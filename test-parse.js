const parse = require('./parse')
const { IDgenerator }= require('./utils')
// const flowInfo = parse('开始发起;\nif(需要选择签署文件) {\n  选择签署文件;\n} else {\n  不选择签署文件；\n}\n发起签署;')
const flowInfo = parse('开始发起;\nif(需要选择签署文件) {\n  if(是否使用模板文件)\n      择模板;\n  else {\n    上传本地文件;\n  }\n}\nif (需要选择签署方？){\n  选择签署方;\n}\n发起签署;')
class Node {
  constructor(node) {
    this.name = node.name
    this.id = IDgenerator()
    this.author = node.author
    this.updatedAt = node.updatedAt // 最后更新时间，可视化影响范围
    this.version = node.version// 产品版本, 想法是当前版本变动保持高亮,用于业务叙述
    this.isCodeChange = node.isCodeChange//关联代码块,感知是否变动,通过高亮等UI形式通知变化,通知保持更新, 想法是结合commit变动,AST结合自动查找对应注释
    this.children = node.children
    this.nodeType = node.nodeType
  }
}
class Edge {
  constructor(edge) {
    this.from = edge.from
    this.to = edge.to
    this.condition = edge.condition
  }
}
class Flow {
  constructor(flow) {
    this.id =  IDgenerator()
    this.name = flow.name
    this.version = flow.version
    this.description = flow.description
    this.nodes = flow.nodes
    this.edges = flow.edges
  }
}

const nodes = [] // 节点
const edges = [] // 边
function traverse(nodeList, initPreNodes = [], initCondition = []) {
  let preNodes = [...initPreNodes] // 当前节点的上一个节点
  let conditions = [...initCondition] // 上一个节点到当前节点的条件

  nodeList.instructions = nodeList.instructions || [nodeList] // 为了兼容
  nodeList.instructions.forEach(node => {
    if (isExpression(node)) {
      const newNode = new Node({name: node.expression.text})
      preNodes.forEach((preNode, index) => {
        edges.push(new Edge({from: preNode.name, to: newNode.name, condition: conditions[index]}))
      })
      nodes.push(newNode)
      preNodes = [newNode]
      conditions = ['']
    }else if (isIfsChain(node)) {
      const ifsChainNode = node.ifs_chain
      const if_block = ifsChainNode.if_block
      const else_block = ifsChainNode.else_block
      let if_preNodes = []
      let else_preNodes = []
      let if_conditions = [] // if语句中叶子结点到下一个节点的条件
      let else_conditions = [] // else语句中叶子结点到下一个节点的条件
      // 生成判断节点
      const newNode = new Node({name: if_block.text, nodeType: 'CHECK'})
      preNodes.forEach((preNode, index) => {
        edges.push(new Edge({from: preNode.name, to: newNode.name, condition: conditions[index]}))
      })
      nodes.push(newNode)

      const if_preNodesInfo = traverse(if_block.instruction, [newNode], ['true'])
      if_preNodes = if_preNodesInfo.preNodes
      if_conditions = if_preNodesInfo.conditions

      if(else_block) {
        const else_preNodesInfo = traverse(else_block.instruction, [newNode], ['false'])
        else_preNodes = else_preNodesInfo.preNodes
        else_conditions = else_preNodesInfo.conditions
      } else {
        else_preNodes = [newNode]
        else_conditions = ['false']
      }
      preNodes = [...if_preNodes, ...else_preNodes]
      conditions = [...if_conditions, ...else_conditions]
     
    } else if (isReturnStatement(node)) {
      preNodes = []
      conditions = []
    }
  })
  
  return {
    preNodes,
    conditions
  }
}
function isExpression(node) {
  return Reflect.has(node, 'expression') 
}
function isIfsChain(node) {
  return Reflect.has(node, 'ifs_chain') 
}
function isIfsChain(node) {
  return Reflect.has(node, 'ifs_chain') 
}
function isReturnStatement(node) {
  return Reflect.has(node, 'return')
}
traverse(flowInfo)
console.log(nodes)
console.log(edges)