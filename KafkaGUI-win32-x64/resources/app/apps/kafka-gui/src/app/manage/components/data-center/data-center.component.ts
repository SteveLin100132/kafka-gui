/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 資料中心元件
 * @CREATE Saturday, 14th March 2020 4:23:30 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';
import { TabItem } from '@kafka-gui/ng2-gui';

/**
 * 資料中心元件
 *
 * @member tabs         頁籤
 * @member CONSUMER_TAB Consumer頁籤索引值
 * @member PRODUCER_TAB Producer頁籤索引值
 */
@Component({
  selector: 'kafka-gui-data-center',
  templateUrl: './data-center.component.html',
  styleUrls: ['./data-center.component.less']
})
export class DataCenterComponent implements OnInit {

  public tabs: TabItem[] = [];
  public readonly CONSUMER_TAB = 0;
  public readonly PRODUCER_TAB = 1;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    // 初始化元件
    this.initTabs();
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 頁籤
   * ---------------------------------------------------------------------------
   */

  /**
   * 初始化頁籤
   *
   * @method private
   */
  private initTabs(): void {
    this.tabs = [
      { id: 'consumer', title: 'Consumer', actived: true },
      { id: 'producer', title: 'Producer', actived: false }
    ];
  }

}
