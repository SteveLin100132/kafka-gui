/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 按鈕元件
 * @CREATE Monday, 9th March 2020 10:24:59 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input } from '@angular/core';

import { ButtonStyle, BUTTON_STYLE } from './button-style.enum';

/**
 * 按鈕元件
 *
 * @member style    按鈕樣式
 * @member styleMap 樣式Mapping清單
 */
@Component({
  selector: 'ng2-gui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() style: ButtonStyle = ButtonStyle.COLOR;

  public styleMap = BUTTON_STYLE;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
