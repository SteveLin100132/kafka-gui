/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 標籤頁內容容器元件
 * @CREATE Saturday, 14th March 2020 1:33:59 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';

import { TabItem } from '../shared/models';

/**
 * 標籤頁內容容器元件
 *
 * @member tab 頁籤項目
 */
@Component({
  selector: 'ng2-gui-tabset-container',
  templateUrl: './tabset-container.component.html',
  styleUrls: ['./tabset-container.component.less']
})
export class TabsetContainerComponent implements OnChanges, OnInit {

  @Input()
  public tab: TabItem;

  constructor() { }

  /**
   * 當輸入參數發生變化時
   *
   * @method public
   * @param changes 輸入參數
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('tab')) {
      // TODO:
    }
  }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
