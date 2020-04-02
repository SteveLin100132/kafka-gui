/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 標籤列元件
 * @CREATE Sunday, 8th March 2020 9:22:00 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TabItem } from '../shared/models/tab-item';

/**
 * 標籤列元件
 *
 * @member tabs     頁籤
 * @member width    頁籤寬度
 * @member selected 選擇頁籤事件觸發
 */
@Component({
  selector: 'ng2-gui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

  @Input()
  public tabs: TabItem[] = [];
  @Input()
  public width = '100%';

  @Output()
  private readonly selected = new EventEmitter<TabItem>();

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 動作
   * ---------------------------------------------------------------------------
   */

  /**
   * 當頁籤點擊時
   *
   * @method public
   * @param index 頁籤索引值
   */
  public onTabClicked(index: number): void {
    this.selected.emit(this.tabs[index]);
    this.tabs = this.tabs.map((tab, idx) => {
      tab.actived = index === idx;
      return tab;
    });
  }

}
