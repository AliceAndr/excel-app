import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'; // jshint ignore:line

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  toHTML() {
    return `
    <div class="formula-info">fx</div>
        <div class="formula-input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('jopa');
  }

  onClick(event) {
  }
}
