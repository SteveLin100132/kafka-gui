/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Topic資料瀏覽元件
 * @CREATE Sunday, 29th March 2020 9:20:28 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ConfigureLoader } from '@steveylin/ng2-configure';
import { Logger } from '@steveylin/logger';
import { Subscription } from 'rxjs';

import { AppConfig } from '../../../shared/models/app-config';
import { ButtonStyle } from '@kafka-gui/ng2-gui';
import { KafkaService } from '../../../core/services/api/services';
import { StateService } from '../../../core/services/state.service';
import { Topic } from '../../../core/services/api/models';

/**
 * Topic資料瀏覽元件
 *
 * @member logger             LOG紀錄
 * @member subscription       訂閱
 * @member broker             Broker ID
 * @member contentMaxWidth    內容限制寬度
 * @member buttonStyle        按鈕樣式
 * @member topics             Kafka Topics
 * @member filterTopic        要過濾的Topics
 * @member topicCreatedStatus Topic建立狀態
 */
@Component({
  selector: 'kafka-gui-topic-information',
  templateUrl: './topic-information.component.html',
  styleUrls: ['./topic-information.component.less']
})
export class TopicInformationComponent implements OnInit, OnDestroy {

  private readonly logger = new Logger(TopicInformationComponent.name);
  private subscription: Subscription;
  private broker: string;

  public contentMaxWidth: number;
  public buttonStyle = ButtonStyle
  public topics: Topic[];
  public filterTopic = '';
  public topicCreatedStatus = false;

  /**
   * @param activatedRoute  激活的路由功能
   * @param elementRef      元素參照
   * @param configureLoader 設定檔載入器
   * @param kafkaService    Kafka連線服務
   * @param stateService    狀態服務
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly elementRef: ElementRef,
    private readonly configureLoader: ConfigureLoader,
    private readonly kafkaService: KafkaService,
    private readonly stateService: StateService
  ) { }

  /**
   * 初始化
   *
   * @method public
   */
  public async ngOnInit() {
    // 初始化畫面大小
    this.onResized();

    // 監聽Kafka狀態
    this.listenKafkaState();

    // 等待取得Broker資料
    await this.listenRouteParams();
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
   * @NOTE 樣式
   * ---------------------------------------------------------------------------
   */

  /**
   * 當畫面縮放時
   *
   * @method public
   */
  public onResized(): void {
    const appType = this.configureLoader
      .get<AppConfig.Config>('config')
      .appType;

    const toolbarHeight = appType === 'desktop' ? 35 : 0;
    $(this.elementRef.nativeElement)
      .find('.outer-scrollbar')
      .css('--scroll-max-height', ($(window).height() - 210 - 50 - 60 - toolbarHeight) + 'px');

    const containerWidth = $(this.elementRef.nativeElement)
      .find('.topic-container')
      .width();
    $(this.elementRef.nativeElement)
      .find('.topic-container')
      .css('--container-width', containerWidth + 'px');
    this.contentMaxWidth = containerWidth - 100;
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 路由
   * ---------------------------------------------------------------------------
   */

  /**
   * 等待取得必要的路由參數
   *
   * @method private
   * @return 回傳一個Promise，讓呼叫者可以等待取得必要的路由參數
   */
  private listenRouteParams(): Promise<void> {
    return new Promise<void>(resolve => {
      const subscription = this.activatedRoute.params
        .subscribe(async params => {
          this.broker = params['broker'];
          resolve();
        }, error => {
          this.logger.error('監聽路由參數發生錯誤', error);
        });

      if (this.subscription !== undefined) {
        this.subscription.add(subscription);
      } else {
        this.subscription = subscription;
      }
    });
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Kafka狀態
   * ---------------------------------------------------------------------------
   */

  /**
   * 監聽Kafka狀態
   *
   * @method private
   */
  private listenKafkaState(): void {
    const subscription = this.stateService.kafkaConnetedSub
      .subscribe(state => {
        this.listAllTopics();
      }, error => {
        this.logger.error('監聽Kafka狀態發生錯誤', error);
      });

    if (this.subscription !== undefined) {
      this.subscription.add(subscription);
    } else {
      this.subscription = subscription;
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Topic
   * ---------------------------------------------------------------------------
   */

  /**
   * 列出所有Topics
   *
   * @method private
   */
  private listAllTopics(): void {
    this.kafkaService.kafkaControllerListTopics({ id: this.broker })
      .toPromise()
      .then(topics => {
        this.topics = topics;
        this.logger.data(this.topics);
      }, error => {
        this.logger.error('取得Kafka Topics發生錯誤', error);
      });
  }

  /**
   * 當按下Topic建立的按鈕
   *
   * @method public
   */
  public onCreateTopicClicked(): void {
    this.topicCreatedStatus = true;
  }

}
