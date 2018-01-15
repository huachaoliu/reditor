export default {
  currentActions: {
    undo: {
      icon: '&#8630;',
      title: 'Undo',
      result: (exec) => exec('Undo')
    },
    redo: {
      icon: '&#8631',
      title: 'Redo',
      result: (exec) => exec('Undo')
    },   
    bold: {
      icon: '<b>B</b>',
      title: 'Bold',
      result: (exec) => exec('bold')
    },
    italic: {
      icon: '<i>I</i>',
      title: 'Italic',
      result: (exec) => exec('italic')
    },
    underline: {
      icon: '<u>U</u>',
      title: 'Underline',
      result: (exec) => exec('underline')
    },
    strikethrough: {
      icon: '<strike>S</strike>',
      title: 'Strike-through',
      result: (exec) => exec('strikeThrough')
    },
    heading1: {
      icon: '<b>H<sub>1</sub></b>',
      title: 'Heading 1',
      result: (exec) => exec('formatBlock', '<H1>')
    },
    heading2: {
      icon: '<b>H<sub>2</sub></b>',
      title: 'Heading 2',
      result: (exec) => exec('formatBlock', '<H2>')
    },
    paragraph: {
      icon: '&#182;',
      title: 'Paragraph',
      result: (exec) => exec('formatBlock', '<P>')
    },
    quote: {
      icon: '&#8220; &#8221;',
      title: 'Quote',
      result: (exec) => exec('formatBlock', '<BLOCKQUOTE>')
    },
    olist: {
      icon: '&#35;',
      title: 'Ordered List',
      result: (exec) => exec('insertOrderedList')
    },
    ulist: {
      icon: '&#8226;',
      title: 'Unordered List',
      result: (exec) => exec('insertUnorderedList')
    },
    code: {
      icon: '&lt;/&gt;',
      title: 'Code',
      result: (exec) => exec('formatBlock', '<PRE>')
    },
    line: {
      icon: '&#8213;',
      title: 'Horizontal Line',
      result: (exec) => exec('insertHorizontalRule')
    },
    link: {
      icon: '&#128279;',
      title: 'Link',
      result: (exec) => {
        const url = window.prompt('Enter the link URL')
        if (url) exec('createLink', url)
      }
    },
    image: {
      icon: '&#128247;',
      title: 'Image',
      result: (exec) => {
        const url = window.prompt('Enter the image URL')
        if (url) exec('insertImage', url)
      }
    },
    color: {
      icon: '<input type="color" style="width:20px" />',
      title: 'Color',
      result: (exec) => exec('foreColor', 'red')
    }
  }





}