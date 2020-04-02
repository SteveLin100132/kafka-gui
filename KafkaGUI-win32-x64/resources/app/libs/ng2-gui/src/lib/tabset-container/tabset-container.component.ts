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

import { Component, OnInit, Input } from '@angular/core';

import { TabItem } from '../shared/models';

/**
 * 標籤頁內容容器元件
 */
@Component({
  selector: 'ng2-gui-tabset-container',
  templateUrl: './tabset-container.component.html',
  styleUrls: ['./tabset-container.component.less']
})
export class TabsetContainerComponent implements OnInit {

  @Input() tab: TabItem;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
