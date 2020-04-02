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

import * as $ from 'jquery';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { ButtonStyle, BUTTON_STYLE } from './button-style.enum';

/**
 * 按鈕元件
 *
 * @member style     按鈕樣式
 * @member color     按鈕顏色
 * @member loading   等待載入
 * @member styleType 樣式類型
 * @member styleMap  樣式Mapping清單
 */
@Component({
  selector: 'ng2-gui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input()
  public style: ButtonStyle = ButtonStyle.COLOR;
  @Input()
  public color = '#106796';
  @Input()
  public loading = false;

  public styleType = ButtonStyle;
  public styleMap = BUTTON_STYLE;

  /**
   * @param elementRef 元素參照
   */
  constructor(private readonly elementRef: ElementRef) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
