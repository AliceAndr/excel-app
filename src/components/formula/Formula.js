import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'; // jshint ignore:line

  toHTML() {
    return `
    <div class="formula-info">fx</div>
        <div class="formula-input" contenteditable spellcheck="false"></div>
    `;
  }
}
