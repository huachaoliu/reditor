
/**
 * 创建dom节点
 * @param {string} nodeName
 * @param {Object} attributes
 * @param {Array} children
*/
export function createNode (nodeName, attributes, children) {
  const node = document.createElement(nodeName);

  for (let p in attributes) {
    node.setAttribute(p, attributes[p]);
  }

  return node;
}

export function assign (target, source) {
  for (let p in source) {
    target[p] = source[p];
  }
  return target;
}
