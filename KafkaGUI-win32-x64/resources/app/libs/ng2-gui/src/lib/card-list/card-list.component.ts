/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 卡片清單元件
 * @CREATE Monday, 9th March 2020 10:12:20 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as $ from 'jquery';
import { Component, OnChanges, OnInit, Input, ElementRef, SimpleChanges } from '@angular/core';

/**
 * 卡片清單元件
 *
 * @member title          標題
 * @member icon           圖示
 * @member control        控制元件
 * @member controlToggled 控制觸發狀態
 * @member panelOffset    控制面板位移
 */
@Component({
  selector: 'ng2-gui-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnChanges, OnInit {

  @Input()
  public title: string;
  @Input()
  public icon: string;
  @Input()
  public control = true;
  @Input()
  public panelOffset = 40;

  public controlToggled = false;

  /**
   * @param elementRef 元素參照
   */
  constructor(private readonly elementRef: ElementRef) { }

  /**
   * 當輸入參數發生變化
   *
   * @method public
   * @param changes 輸入參數
   */
  public ngOnChanges(changes: SimpleChanges): void {
  }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 控制元件
   * ---------------------------------------------------------------------------
   */

  /**
   * 當控制元件按鈕點擊時
   *
   * @method public
   */
  public onControlButtonClicked(): void {
    this.controlToggled = !this.controlToggled;
    const style: any = {};
    style['--panel-x'] = this.controlToggled
      ? `calc(-100% + ${this.panelOffset}px)`
      : '0px';
    $(this.elementRef.nativeElement).find('.content-panel').css(style);
  }

}
