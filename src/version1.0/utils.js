export function createNode(nodeName, attributes, children) {
  const node = document.createElement(nodeName);

  for (let attr in attributes) {

    if (attr === 'className') {
      node[attr] = attributes[attr];
    } else {
      node.setAttribute(attr, attributes[attr]);
    }

  }
  return node;
}