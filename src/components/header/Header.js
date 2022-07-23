import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'; // jshint ignore:line

  toHTML() {
    return `
    <input type="text" class="input excel__header-input" value="Новая таблица"/>

        <div>
          <div class="button excel__header-button-delete">
            <i class="material-icons">delete</i>
          </div>
          <div class="button excel__header-button-exit">
            <i class="material-icons">exit_to_app</i>
          </div>
        </div>
    `;
  }
}
