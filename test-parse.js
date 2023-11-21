const parse = require('./parse')
const { IDgenerator }= require('./utils')
const flowInfo = parse('开始发起;\nif(需要选择签署文件) {\n  if(是否使用模板文件)\n   {\n      选择模板;\n      return\n   }\n  else if(是否本地上传文件？)\n    本地上传文件;\n  else {\n    使用默认文件\n  }\n}\nif (需要选择签署方?){\n  选择签署方;\n}\n发起签署;')
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
function createNodeFactory(node) {
  if (isExpression(node)) {
    return new Node({name: node.expression.text})
  }
  if (isIfsChain(node)) {
    const if_block = node.ifs_chain.if_block
    return new Node({name: if_block.text, nodeType: 'CHECK'})
  }
}
function traverse(nodeList, pre = null) {
  const nodes = []
  const edges = []
  nodeList.instructions.forEach(node => {
    if (isExpression(node)) {
      const newNode = new Node({name: node.expression.text})
      if(pre) {
        edges.push({from: pre.id, to: newNode.id})
        pre = newNode
      }
      nodes.push(newNode)
    }
    if (isIfsChain(node)) {
      Reflect.ownKeys().forEach(key => {
        const block = node.ifs_chain[key]
        if (block) {
          const newNode = new Node({name: block.text, nodeType: 'CHECK'})
          if(pre) {
            edges.push({from: pre.id, to: newNode.id, condition: key})
          }
          nodes.push(newNode)
          const {nodes: subNodes, edges: subEdges} = traverse(block.instruction, newNode)
          nodes.push(...subNodes)
          edges.push(...subEdges)
        }
      })
    }
    if (isReturnStatement(node)) {
      
    }
  })
  
  return {
    nodes,
    edges,
  }
}
function isExpression(node) {
  return Reflect.has(node, 'expression') 
}
function isIfsChain() {
  return Reflect.has(node, 'ifs_chain') 
}
function isIfsChain() {
  return Reflect.has(node, 'ifs_chain') 
}
function isReturnStatement(node) {
  return Reflect.has(node, 'return')
}
console.log(traverse(flowInfo))
// console.log(new Node())