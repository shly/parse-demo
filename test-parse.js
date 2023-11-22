const parse = require('./parse')
const { IDgenerator }= require('./utils')
const flowInfo = parse('开始发起;\nif(需要选择签署文件) {\n  if(是否使用模板文件)\n      择模板;\n  else {\n    上传本地文件;\n  }\n}\nif (需要选择签署方？){\n  选择签署方;\n}\n发起签署;')
class Node {
  constructor(node) {
    this.name = node.name // 节点名称
    this.id = IDgenerator() // 节点唯一标识
    this.author = node.author // 节点创建者
    this.updatedAt = node.updatedAt // 最后更新时间，可视化影响范围
    this.version = node.version// 产品版本, 想法是当前版本变动保持高亮,用于业务叙述
    this.isCodeChange = node.isCodeChange//关联代码块,感知是否变动,通过高亮等UI形式通知变化,通知保持更新, 想法是结合commit变动,AST结合自动查找对应注释
    this.children = node.children // 子节点
    this.nodeType = node.nodeType // 节点类型，普通节点还是判断节点
  }
}
class Edge {
  constructor(edge) {
    this.from = edge.from // 上一个节点
    this.to = edge.to // 下一个节点
    this.condition = edge.condition // 连接条件
  }
}
class Flow {
  constructor(flow) {
    this.id =  IDgenerator() // 流程唯一标识
    this.name = flow.name // 流程名称
    this.version = flow.version // 产品版本
    this.description = flow.description // 流程描述
    this.startNode = flow.startNode // 流程起始节点
    this.nodes = flow.nodes // 节点
    this.edges = flow.edges // 边
  }
}


/**
 * Check if the given node is an expression.
 *
 * @param {any} node - The node to check.
 * @return {boolean} True if the node is an expression, false otherwise.
 */
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
/**
 * Parses the given nodeList to generate a flow graph.
 *
 * @param {Array} nodeList - The list of nodes to parse.
 * @return {Object} An object containing the generated nodes and edges of the flow graph.
 */
function parseFlow(nodeList) {
  const nodes = [] // 节点
  const edges = [] // 边
  function traverse(nodeList, initPreNodes = [], initCondition = []) {
    let preNodes = [...initPreNodes] // 当前节点的上一个节点
    let conditions = [...initCondition] // 上一个节点到当前节点的条件

    nodeList.instructions = nodeList.instructions || [nodeList] // 为了兼容
    nodeList.instructions.forEach(node => {
      // 根据不同节点类型，生成节点，边、返回需要与下一个节点相连的节点，以及连接条件
      if (isExpression(node)) {
        // 生成节点与边
        const newNode = new Node({name: node.expression.text})
        edges.push(...createEdge(preNodes,conditions, newNode))
        nodes.push(newNode)
        // 生成与下个节点相连的节点与条件
        preNodes = [newNode]
        conditions = ['']
      } else if (isIfsChain(node)) {
        const ifsChainNode = node.ifs_chain

        const if_block = ifsChainNode.if_block
        const else_block = ifsChainNode.else_block
        let if_preNodes = []
        let else_preNodes = []
        let if_conditions = [] // if语句中叶子结点到下一个节点的条件
        let else_conditions = [] // else语句中叶子结点到下一个节点的条件

        // 生成判断节点
        const newNode = new Node({name: if_block.text, nodeType: 'CHECK'})
        edges.push(...createEdge(preNodes,conditions, newNode))
        nodes.push(newNode)
      
        // 生成if语句中叶子结点,if语句中if_block一定存在，所以无需判断是否为空
        const if_preNodesInfo = traverse(if_block.instruction, [newNode], ['true'])
        // 得到if语句中true子句与下个节点相连的节点，以及与下个节点相连的条件
        if_preNodes = if_preNodesInfo.preNodes
        if_conditions = if_preNodesInfo.conditions
        
        // 生成else语句中叶子结点，以及与下个节点相连的节点与条件
        if(else_block) {
          const else_preNodesInfo = traverse(else_block.instruction, [newNode], ['false'])
          else_preNodes = else_preNodesInfo.preNodes
          else_conditions = else_preNodesInfo.conditions
        } else {
          // 如果没有else语句，则判断节点直接与下一节点相连，条件为false
          else_preNodes = [newNode]
          else_conditions = ['false']
        }
        // 拿到所有if语句中与下个节点相连的节点与条件，供下次循环中与下一节点相连
        preNodes = [...if_preNodes, ...else_preNodes]
        conditions = [...if_conditions, ...else_conditions]
      } else if (isReturnStatement(node)) {
        // 如果是有return语句，则无需与下一节点相连，直接返回
        preNodes = []
        conditions = []
      }
    })
    
    return {
      preNodes,
      conditions
    }
  }
  function createEdge(preNodes,conditions, curNode) {
    const newEdges = []
    preNodes.forEach((preNode, index) => {
      newEdges.push(new Edge({from: preNode.name, to: curNode.name, condition: conditions[index]}))
    })
    return newEdges
  }
  traverse(nodeList)
  return {
    nodes,
    edges 
  }
}
//  

module.exports = {
  parseFlow
}
