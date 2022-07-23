import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__table'; // jshint ignore:line

  toHTML() {
    return `
    <div class="row">
    <div class="row-info"></div>
    <div class="row-data">
      <div class="column">A</div>
      <div class="column">B</div>
      <div class="column">C</div>
      <div class="column">D</div>
      <div class="column">E</div>
      <div class="column">F</div>
    </div>
</div>

<div class="row">
  <div class="row-info">
    1
  </div>
  <div class="row-data">
    <div class="cell selected" contenteditable>1</div>
    <div class="cell" contenteditable>2</div>
    <div class="cell" contenteditable>3</div>
    <div class="cell" contenteditable>4</div>
    <div class="cell" contenteditable>5</div>
    <div class="cell" contenteditable>6</div>
  </div>
</div>

<div class="row">
  <div class="row-info">
    2
  </div>
  <div class="row-data">
    <div class="cell" contenteditable>1</div>
    <div class="cell" contenteditable>2</div>
    <div class="cell" contenteditable>3</div>
    <div class="cell" contenteditable>4</div>
    <div class="cell" contenteditable>5</div>
    <div class="cell" contenteditable>6</div>
  </div>
</div>
    `;
  }
}