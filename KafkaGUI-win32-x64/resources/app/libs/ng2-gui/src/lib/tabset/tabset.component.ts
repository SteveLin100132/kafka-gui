/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 標切頁籤換元件
 * @CREATE Saturday, 14th March 2020 1:29:27 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

 import * as $ from 'jquery';
import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, ElementRef, Input } from '@angular/core';

import { TabItem } from '../shared/models';
import { TabsetContainerComponent } from '../tabset-container/tabset-container.component';

/**
 * 標切頁籤換元件
 *
 * @member containers   標籤頁內容容器元件
 * @member tabsMaxWidth 標籤寬度
 * @member tabs         標籤
 */
@Component({
  selector: 'ng2-gui-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.less']
})
export class TabsetComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabsetContainerComponent)
  public containers: QueryList<TabsetContainerComponent>;

  @Input()
  public tabsMaxWidth = '100%';

  public tabs: TabItem[] = [];

  /**
   * @param elementRef 元素參照
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * 內容載入後進行初始化
   *
   * @method public
   */
  public ngAfterContentInit(): void {
    // 取得頁籤並設定樣式
    this.containers.forEach(container => this.tabs.push(container.tab));
    this.setTabContainerStyle();
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 樣式
   * ---------------------------------------------------------------------------
   */

  /**
   * 設定頁籤內容容器樣式
   *
   * @method private
   */
  private setTabContainerStyle(): void {
    const style = {};
    const gridOffsetIndex = this.tabs.findIndex(tab => tab.actived);
    style['--grid-offset'] = `${gridOffsetIndex * -100}%`;
    style['--grid-columns'] = `repeat(${this.tabs.length}, 100%)`
    $(this.elementRef.nativeElement).find('.tab-container').css(style);
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 頁籤
   * ---------------------------------------------------------------------------
   */

  /**
   * 當觸發的頁籤變化時
   *
   * @method public
   * @param activedTab 觸發的頁籤
   */
  public onActivedTagChanged(activedTab: TabItem): void {
    this.tabs = this.tabs.map(tab => {
      tab.actived = tab.id === activedTab.id;
      return tab;
    });
    this.setTabContainerStyle();
  }

}
