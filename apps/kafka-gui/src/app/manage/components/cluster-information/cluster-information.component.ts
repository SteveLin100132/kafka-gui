/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Cluster資料編輯元件
 * @CREATE Saturday, 14th March 2020 1:55:53 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { ButtonStyle } from '@kafka-gui/ng2-gui';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ConfigureLoader } from '@steveylin/ng2-configure';
import { Logger } from '@steveylin/logger';
import { Subscription } from 'rxjs';

import { Account } from './../../../shared/models/account';
import { AppConfig } from '../../../shared/models/app-config';
import { Broker, Client as KafkaClientOptions } from '../../../core/services/api/models';
import { BrokersService, KafkaService } from '../../../core/services/api/services';
import { Crud } from '../../../shared/models/crud';
import { Cluster } from './models/cluster';
import { DelayService } from '../../../core/services/delay.service';
import { RefreshService } from '../../../core/services/refresh.service';
import { StateService } from './../../../core/services/state.service';
import { SnackBarService } from './../../../../../../../libs/ng2-gui/src/lib/snack-bar/snack-bar.service';

/**
 * Kafka Cluster資料編輯元件
 *
 * @member logger                LOG紀錄
 * @member subscription          訂閱
 * @member broker                Broker ID
 * @member clusterCardList       Broker卡片清單
 * @member buttonStyle           按鈕樣式
 * @member brokerName            Broker名稱
 * @member schemaRegitsryEnabled Schema Registry允許狀態
 * @member schemaRegistryHost    Schema Registry Host
 * @member saslEnabled           SASL允許狀態
 * @member saslAccount           SASL帳號密碼
 * @member onSavedLoading        保存Broker資料Loading狀態
 * @member onDeletedLoading      刪除Broker資料Loading狀態
 * @member onConnectedLoading    連線至Broker Loading狀態
 * @member isBorkerConnected     是否連線至Kafka Broker
 */
@Component({
  selector: 'kafka-gui-cluster-information',
  templateUrl: './cluster-information.component.html',
  styleUrls: ['./cluster-information.component.less']
})
export class ClusterInformationComponent implements OnInit, OnDestroy {

  private readonly logger = new Logger(ClusterInformationComponent.name);
  private subscription: Subscription;
  private broker: string;

  public clusterCardList: Cluster.ClusterCardList[];
  public buttonStyle = ButtonStyle;
  public brokerName: string;
  public schemaRegitsryEnabled = false;
  public schemaRegistryHost = '';
  public saslEnabled = false;
  public saslAccount: Account = { username: '', password: '' };
  public onSavedLoading = false;
  public onDeletedLoading = false;
  public onConnectedLoading = false;
  public isBorkerConnected = false;

  /**
   * @param activatedRoute  激活的路由功能
   * @param elementRef      元素參照
   * @param configureLoader 設定檔載入器
   * @param brokersApi      Broker資料API
   * @param stateService    狀態服務
   * @param delay           延遲用服務
   * @param kafkaService    Kafka連線服務
   * @param refresh         重新整理服務
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly elementRef: ElementRef,
    private readonly configureLoader: ConfigureLoader,
    private readonly brokersApi: BrokersService,
    private readonly stateService: StateService,
    private readonly snackBarService: SnackBarService,
    private readonly delay: DelayService,
    private readonly kafkaService: KafkaService,
    private readonly refresh: RefreshService,
  ) { }

  /**
   * 初始化
   *
   * @method public
   */
  public async ngOnInit() {
    // 初始化畫面大小
    this.onResized();

    // 初始化Cluster資訊
    this.initClusterCardList();

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
      .css('--scroll-max-height', ($(window).height() - 210 - toolbarHeight) + 'px');

    const containerWidth = $(this.elementRef.nativeElement)
      .find('.cluster-container')
      .width();
    $(this.elementRef.nativeElement)
      .find('.cluster-container')
      .css('--container-width', containerWidth + 'px');
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
          if (this.broker !== undefined) {
            const broker = await this.brokersApi
              .getOneBaseBrokerControllerBroker({ id: this.broker })
              .toPromise();
            this.setBorkerInfo(broker);
          }
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
   * @NOTE 卡片清單
   * ---------------------------------------------------------------------------
   */

  /**
   * 初始化Broker卡片清單
   *
   * @method private
   */
  private initClusterCardList(): void {
    this.clusterCardList = [
      { title: 'cluster', icon: 'fa-text-height', control: true }
    ];
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Broker
   * ---------------------------------------------------------------------------
   */

  /**
   * 設定Broker資料
   *
   * @method private
   * @param broker Broker資料
   */
  private setBorkerInfo(broker: Broker): void {
    // Broker名稱
    this.brokerName = broker.name;

    // Cluster位置
    const clusters = broker.host.split(',');
    this.clusterCardList = [];
    if (clusters.length > 0) {
      clusters.forEach(cluster => {
        this.clusterCardList.push({
          title: 'cluster',
          icon: 'fa-text-height',
          control: true,
          host: cluster
        });
      });
    }

    // Schema Registry
    if (broker.schema !== undefined &&
      broker.schema !== null &&
      broker.schema !== '') {
      this.schemaRegitsryEnabled = true;
      this.schemaRegistryHost = broker.schema;
    } else {
      this.schemaRegitsryEnabled = false;
      this.schemaRegistryHost = '';
    }

    // SASL
    this.saslEnabled = broker.sasl;
    if (this.saslEnabled) {
      this.saslAccount.username = broker.username;
      this.saslAccount.password = broker.password;
    } else {
      this.saslAccount.username = '';
      this.saslAccount.password = '';
    }

    this.isBorkerConnected = false;
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
    this.clusterCardList.push({
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
    if (this.clusterCardList.length > 1) {
      this.clusterCardList.splice(index, 1);
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 保存&連線
   * ---------------------------------------------------------------------------
   */

  /**
   * 保存Broker設定
   *
   * @method public
   */
  public save(): void {
    if (this.broker === undefined) {
      this.insertBroker();
    } else {
      this.updateBroker();
    }
  }

  /**
   * 刪除特定Broker資料
   *
   * @method public
   */
  public async delete() {
    // 沒有Borker ID則不處理
    if (this.broker === undefined) {
      return;
    }

    try {
      this.onDeletedLoading = true;
      await this.brokersApi
        .deleteOneBaseBrokerControllerBroker({ id: this.broker })
        .toPromise();
      await this.delay.wait(500);
      this.onDeletedLoading = false;
      this.refresh.borkerSub.next(Crud.Type.DELETE);
      this.snackBarService.show({
        icon: 'fa-info-circle',
        message: 'Broker delete completely',
        color: '#E5B92C',
        delay: 3000
      });
    } catch (error) {
      this.logger.error('刪除特定Broker發生錯誤', error);
      this.snackBarService.show({
        icon: 'fa-times-circle',
        message: 'Broker delete failed',
        color: '#C52233',
        delay: Infinity
      });
    }
  }

  /**
   * 新增Broker資料
   *
   * @method private
   */
  private async insertBroker() {
    try {
      this.onSavedLoading = true;

      const clusters: string[] = [];
      this.clusterCardList.forEach(cluster => {
        clusters.push(cluster.host);
      });
      const result = await this.brokersApi.createOneBaseBrokerControllerBroker({
        body: {
          id: this.broker,
          name: this.brokerName,
          host: clusters.join(','),
          schema: this.schemaRegistryHost,
          sasl: this.saslEnabled,
          username: this.saslAccount.username,
          password: this.saslAccount.password
        }
      }).toPromise();

      await this.delay.wait(500);
      this.onSavedLoading = false;
      this.refresh.borkerSub.next(Crud.Type.CREATE);
      this.snackBarService.show({
        icon: 'fa-check-circle',
        message: 'Broker insert completely',
        color: '#3CBBB1',
        delay: 3000
      });
    } catch (error) {
      this.logger.error('新增Broker發生錯誤', error);
      this.snackBarService.show({
        icon: 'fa-times-circle',
        message: 'Broker insert failed',
        color: '#C52233',
        delay: Infinity
      });
    }
  }

  /**
   * 更新Broker資料
   *
   * @method private
   */
  private async updateBroker() {
    try {
      this.onSavedLoading = true;

      const clusters: string[] = [];
      this.clusterCardList.forEach(cluster => {
        clusters.push(cluster.host);
      });
      const result = await this.brokersApi.updateOneBaseBrokerControllerBroker({
        id: this.broker,
        body: {
          id: this.broker,
          name: this.brokerName,
          host: clusters.join(','),
          schema: this.schemaRegistryHost,
          sasl: this.saslEnabled,
          username: this.saslAccount.username,
          password: this.saslAccount.password
        }
      }).toPromise();

      await this.delay.wait(500);
      this.onSavedLoading = false;
      this.refresh.borkerSub.next(Crud.Type.UPDATE);
      this.snackBarService.show({
        icon: 'fa-check-circle',
        message: 'Broker update completely',
        color: '#3CBBB1',
        delay: 3000
      });
    } catch (error) {
      this.logger.error('更新Broker發生錯誤', error);
      this.snackBarService.show({
        icon: 'fa-times-circle',
        message: 'Broker update failed',
        color: '#C52233',
        delay: Infinity
      });
    }
  }

  /**
   * 連線至Kafka
   *
   * @method public
   */
  public connect(): void {
    this.onConnectedLoading = true;

    // 要連線的Kafka客戶端配置頂
    const clusters: string[] = [];
    this.clusterCardList.forEach(cluster => {
      clusters.push(cluster.host);
    });
    const clientOptions: KafkaClientOptions = {
      id: this.broker,
      host: clusters.join(','),
    };

    // 進行連線
    this.kafkaService
      .kafkaControllerCreateKafkaClient({ body: clientOptions })
      .toPromise()
      .then(async result => {
        // 連線狀態訊息顯示
        if (!result.ready) {
          this.logger.error('連線至Kafka發生錯誤', result.messages);
          this.onConnectedLoading = false;
          this.snackBarService.show({
            icon: 'fa-times-circle',
            message: JSON.stringify(result.messages),
            color: '#C52233',
            delay: Infinity
          });
        } else {
          await this.delay.wait(500);
          this.onConnectedLoading = false;
          this.isBorkerConnected = true;
          this.logger.log(result);
          this.stateService.kafkaConnetedSub.next(result);
          this.snackBarService.show({
            icon: 'fa-check-circle',
            message: result.messages,
            color: '#3CBBB1',
            delay: 3000
          });
        }
      })
      .catch(async error => {
        this.logger.error('連線至Kafka發生錯誤', error);
        await this.delay.wait(500);
        this.onConnectedLoading = false;
      });
  }

  /**
   * 取消Kafka連線
   *
   * @method public
   */
  public disconnect(): void {
    this.onConnectedLoading = true;

    // 進行連線
    this.kafkaService
      .kafkaControllerDeleteKafkaClient({ id: this.broker })
      .toPromise()
      .then(async result => {
        this.logger.log(result);
        await this.delay.wait(500);
        this.onConnectedLoading = false;
        this.isBorkerConnected = false;
        this.stateService.kafkaConnetedSub.next(null);
        this.snackBarService.show({
          icon: 'fa-check-circle',
          message: result.messages,
          color: '#3CBBB1',
          delay: 3000
        });
      })
      .catch(async error => {
        this.logger.error('連線至Kafka發生錯誤', error);
        await this.delay.wait(500);
        this.onConnectedLoading = false;
        this.snackBarService.show({
          icon: 'fa-times-circle',
          message: error,
          color: '#C52233',
          delay: 3000
        });
      });
  }

}
