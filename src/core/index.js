import { assign, createNode } from '../utils/index.js';
import constants from '../constants.js';

function Editor(actions) {
  this.element;
  this.actions = actions;
  // this.init();
  // return this.element;
}

Editor.prototype.render = function (container = document.body) {
  this.element = createNode('div', {
    class: 'reditor'
  });
  container.appendChild(this.element);
  const header = createNode('header', {
    class: 'reditor-toolbarl',
  });
  // console.log(this.actions);
  for (let p in this.actions) {
    const { icon, title, nodeName } = this.actions[p];
    const btn = createNode('button', {
      class: 'reditor-button'
    });
    btn.innerHTML = icon;
    btn.title = title;
    btn.onclick = () => this.sendActions(nodeName);
    header.appendChild(btn);
  }
  this.body = createNode('div', {
    class: 'reditor-main',
    contentEditable: true
  });

  // body.oninput = (e) => {
  
  // }

  this.append(header, this.body);  
}

const getSeletedText = () => {
  let select;
  if (window.getSelection) {
    const { endContainer: { data }, startOffset, endOffset } = window.getSelection().getRangeAt(0);
    select = data ? data.substr(startOffset, endOffset) : '';
  }
  return select;
}

Editor.prototype.sendActions = function (nodeName) {
  console.log(name);
  const select = getSeletedText();
  const result = createNode(nodeName);
  console.log(this.body.children);
  // result.innerHTML = select;

  // this.body.appendChild(result);
}

Editor.prototype.append = function (...args) {
  args.map(arg => arg.nodeType && this.element.appendChild(arg));
}

export default function Reditor (container, blob, actions) {
  this.actions = assign({}, assign(constants.currentActions, actions));
  this.editor = new Editor(this.actions);
  return this.editor;
}
