/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 管理頁面元件
 * @CREATE Sunday, 8th March 2020 8:15:07 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';
import { TabItem } from '@kafka-gui/ng2-gui';

import { CardList } from './models/card-list';

/**
 * 管理頁面元件
 *
 * @member tabs 頁籤
 */
@Component({
  selector: 'kafka-gui-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.less']
})
export class ManageComponent implements OnInit {

  public tabs: TabItem[] = [];
  public brokerCardList: CardList[];

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    // 初始化元件
    this.initTabs();
    this.initBrokerCardList();
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
      { id: 'borker', title: 'Borker', actived: true },
      { id: 'topics', title: 'Topics', actived: false }
    ];
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 卡片清單
   * ---------------------------------------------------------------------------
   */

  /**
   * 初始化Broker卡片清單
   *
   * @method private
   */
  private initBrokerCardList(): void {
    this.brokerCardList = [
      { title: 'cluster', icon: 'fa-text-height', control: true }
    ];
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Cluster
   * ---------------------------------------------------------------------------
   */

  /**
   * 當增加Cluster按鈕點擊時
   *
   * @method public
   */
  public onAddClusterButtonClicked(): void {
    this.brokerCardList.push({
      title: 'cluster', icon: 'fa-text-height', control: true
    });
  }

  /**
   * 刪除Cluster
   *
   * @method public
   * @param index Cluster索引值
   */
  public onClusterDeleted(index: number): void {
    if (this.brokerCardList.length > 1) {
      this.brokerCardList.splice(index, 1);
    }
  }

}
