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

import { ButtonStyle } from '@kafka-gui/ng2-gui';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabItem } from '@kafka-gui/ng2-gui';

import { Account } from './../../../shared/models/account';
import { CardList } from './../../models/card-list';
import { StateService } from '../../../core/services/state.service';
import { Logger } from '@steveylin/logger';

/**
 * Kafka Broker資料導覽元件
 *
 * @member logger          LOG紀錄
 * @member subscription    服務訂閱紀錄
 * @member tabs            頁籤
 * @member BROKER_INFO_TAB Broker資訊頁籤索引值
 * @member TOPICS_INFO_TAB Topics資訊頁籤索引值
 * @member TEST_INFO_TAB   測試用頁籤索引值
 */
@Component({
  selector: 'kafka-gui-borker-information',
  templateUrl: './borker-information.component.html',
  styleUrls: ['./borker-information.component.less']
})
export class BorkerInformationComponent implements OnInit, OnDestroy {

  private readonly logger = new Logger(BorkerInformationComponent.name);
  private subscription: Subscription;

  public tabs: TabItem[] = [];
  public readonly BROKER_INFO_TAB = 0;
  public readonly TOPICS_INFO_TAB = 1;
  public readonly TEST_INFO_TAB = 2;

  /**
   * @param stateService 狀態服務
   */
  constructor(private stateService: StateService) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    // 初始化元件
    this.initTabs();

    // 監聽Kafka連線狀態
    this.listenKafkaConnectedState();
  }

  /**
   * 當Component銷毀時
   *
   * @method public
   */
  public ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
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
   * @param topicEnabled Topic頁籤是否允許使用
   */
  private initTabs(topicDisabled = true): void {
    this.tabs = [
      { id: 'borker', title: 'Borker', actived: true },
      { id: 'topics', title: 'Topics', actived: false, disabled: topicDisabled },
      { id: 'test', title: 'Test', actived: false },
    ];
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Kafka
   * ---------------------------------------------------------------------------
   */

  /**
   * 監聽Kafka連線狀態
   *
   * @method private
   */
  private listenKafkaConnectedState(): void {
    const subscription = this.stateService.kafkaConnetedSub
      .asObservable()
      .subscribe(state => {
        if (state !== null) {
          this.initTabs(!state.ready);
        } else {
          this.initTabs(true);
        }
      }, error => {
          this.logger.error('監聽Kafka連線狀態發生錯誤', error);
      });

    if (this.subscription !== undefined) {
      this.subscription.add(subscription);
    } else {
      this.subscription = subscription;
    }
  }

}
