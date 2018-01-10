import css from './index.css';
import { createNode } from './utils.js';

const actions = {
  bold: {
    icon: '<b>B</b>',
    title: 'Bold',
    click: () => {
      console.log('哈哈哈');
      exec('bold')
    }
  },
  italic: {
    icon: '<i>I</i>',
    title: 'italic',
    click: () => exec('italic')
  },
  underline: {
    icon: '<u>U</u>',
    title: 'underline',
    click: () => exec('underline')
  },
  strikethrough: {
    icon: '<strike>S</strike>',
    title: 'strike',
    click: () => exec('strikeThrough')
  },
  heading1: {
    icon: '<b>H<sub>1</sub></b>',
    title: 'heading1',
    click: () => exec('formatBlock', '<H1>')
  },
  heading2: {
    icon: '<b>H<sub>2</sub></b>',
    title: 'heading2',
    click: () => exec('formatBlock', '<H2>')
  },
  paragraph: {
    icon: '&#182',
    title: 'Paragraph',
    click: () => exec('formatBlock', '<p>')
  },
  quote: {
    icon: '&#8220; &#8221;',
    title: 'Quote',
    click: () => exec('formatBlock', '<BLOCKQUOTE>')
  },
  olist: {
    icon: '&#35;',
    title: 'Ordered List',
    click: () => exec('insertOrderedList')
  },
  ulist: {
    icon: '&#8226;',
    title: 'Unordered List',
    click: () => exec('insertUnorderedList')
  },
  code: {
    icon: '&lt;/&gt;',
    title: 'Code',
    click: () => exec('formatBlock', '<PRE>')
  },
  line: {
    icon: '&#8213;',
    title: 'Horizontal Line',
    click: () => exec('insertHorizontalRule')
  },
  link: {
    icon: '&#128279;',
    title: 'Link',
    click: () => {
      const url = window.prompt('Enter the link URL')
      if (url) exec('createLink', url)
    }
  },
  image: {
    icon: '&#128247;',
    title: 'Image',
    click: () => {
      const url = window.prompt('Enter the image URL')
      if (url) exec('insertImage', url)
    }
  }
}

export const exec = (command, value = null) => {
  document.execCommand(command, false, value);
}

export default class Reditor {
  constructor(context) {
    this.editor = new Editor(context);
    return this.editor;
  }
}

class Editor {
  constructor(context) {
    this.context = context;

    this.init();
  }

  init() {

    this.element = createNode('div', {
      className: 'reditor',
      'data-type': 'reditor'
    });

    const header = createNode('header');
    const body = createNode('div', {
      id: 'main',
      contentEditable: true,
      type: 'reditor-body'
    });

    this.append(header, body);
    for (let p in actions) {
      const { icon, title, click } = actions[p];
      const btn = createNode('button', {
        className: 'reditor-button'
      });
      btn.innerHTML = icon;
      btn.title = title;
      btn.onclick = click;
      header.appendChild(btn);
    }
  }

  render(container = document.body, context = this.context) {
    container.appendChild(this.element);
  }

  append(...args) {
    args.map(arg => arg.nodeType && this.element.appendChild(arg));
  }
}