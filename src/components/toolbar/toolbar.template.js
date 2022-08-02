function toButton(button) {
  const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
  `;
  return `
    <div 
      class="button ${button.active ? 'active' : ''}"
      ${meta}
    >
      <i 
        class="material-icons"
        ${meta}
      >${button.icon}</i>
    </div>
  `;
}

export function createToolbar(s) {
  const buttons = [
    {
      value: {textAlign: 'left'},
      icon: 'format_align_left',
      active: s['textAlign'] === 'left' // jshint ignore:line
    },
    {
      value: {textAlign: 'center'},
      icon: 'format_align_justify',
      active: s['textAlign'] === 'center' // jshint ignore:line
    },
    {
      value: {textAlign: 'right'},
      icon: 'format_align_right',
      active: s['textAlign'] === 'right' // jshint ignore:line
    },
    {
      value: {fontWeight: s['fontWeight'] === 'bold' ? // jshint ignore:line
       'normal' : 'bold'},
      icon: 'format_bold',
      active: s['fontWeight'] === 'bold' // jshint ignore:line
    },
    {
      value: {
        textDecoration:
        s['textDecoration'] === 'underline' ? // jshint ignore:line
         'none' : 'underline'
      },
      icon: 'format_underlined',
      active: s['textDecoration'] === 'underline' // jshint ignore:line
    },
    {
      value: {fontStyle: s['fontStyle'] === 'italic' ? // jshint ignore:line
       'normal' : 'italic'},
      icon: 'format_italic',
      active: s['fontStyle'] === 'italic' // jshint ignore:line
    }
  ];
  return buttons.map(toButton).join('');
}
