/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Broker資料導覽元件
 * @CREATE Tuesday, 10th March 2020 9:38:04 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';
import { TabItem } from '@kafka-gui/ng2-gui';

import { Account } from './../../../shared/models/account';
import { CardList } from './../../models/card-list';
import { ButtonStyle } from '@kafka-gui/ng2-gui';

/**
 * Kafka Broker資料導覽元件
 *
 * @member tabs                  頁籤
 * @member BROKER_INFO_TAB       Broker資訊頁籤索引值
 * @member TOPICS_INFO_TAB       Topics資訊頁籤索引值
 * @member TEST_INFO_TAB         測試用頁籤索引值
 */
@Component({
  selector: 'kafka-gui-borker-information',
  templateUrl: './borker-information.component.html',
  styleUrls: ['./borker-information.component.less']
})
export class BorkerInformationComponent implements OnInit {

  public tabs: TabItem[] = [];
  public readonly BROKER_INFO_TAB = 0;
  public readonly TOPICS_INFO_TAB = 1;
  public readonly TEST_INFO_TAB = 2;

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
      { id: 'borker', title: 'Borker', actived: true },
      { id: 'topics', title: 'Topics', actived: false },
      { id: 'test', title: 'Test', actived: false },
    ];
  }

}
