import { assign, createNode } from '../utils/index.js';
import constants from '../constants.js';

function Editor(actions) {
  this.element;
  this.actions = actions;
  this.uid = 'reditor_';
  this.startOffset = 0;
  this.endOffset = 0;
}

Editor.prototype.render = function (container = document.body) {
  this.element = createNode('div', {
    class: 'reditor'
  });
  container.appendChild(this.element);
  const header = createNode('header', {
    class: 'reditor-toolbarl',
  });
  for (let p in this.actions) {
    const { icon, title, result } = this.actions[p];
    const btn = createNode('button', {
      class: 'reditor-button'
    });
    btn.innerHTML = icon;
    btn.title = title;
    // btn.onclick = () => this.sendActions(nodeName);
    btn.onclick = () => this.sendActions(result);
    header.appendChild(btn);
  }
  this.body = createNode('div', {
    class: 'reditor-main',
    contentEditable: true
  });

  this.append(header, this.body);
}
//这个得改到this下面去.缓存range scope
Editor.prototype.getSeletedText = function () {
  let select;
  if (window.getSelection) {
    const selections = window.getSelection();
    if (selections.type === 'Range') {
      const range = selections.getRangeAt(0);
      const { endContainer, startOffset, endOffset } = range;
      const { textContent, previousElementSibling } = endContainer;
      select = textContent.substr(startOffset + 1, endOffset);
      this.previousElementSibling = previousElementSibling;
      this.startOffset = startOffset;
      this.endOffset = endOffset;
    }
  }
  return select;
}

/**
 * @param {string} nodeName
*/
Editor.prototype.sendActions = result =>
  result((command, value = null) =>
    document.execCommand(command, false, value));

Editor.prototype.append = function (...args) {
  args.map(arg => arg.nodeType && this.element.appendChild(arg));
}

export default function Reditor(container, blob, actions) {
  this.actions = assign({}, assign(constants.currentActions, actions));
  this.editor = new Editor(this.actions);
  return this.editor;
}
