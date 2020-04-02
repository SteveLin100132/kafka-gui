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
import { ButtonStyle } from '@kafka-gui/ng2-gui';
import { ConfigureLoader } from '@steveylin/ng2-configure';
import { Logger } from '@steveylin/logger';
import { Component, OnInit, ElementRef } from '@angular/core';

import { Account } from './../../../shared/models/account';
import { AppConfig } from '../../../shared/models/app-config';
import { CardList } from './../../models/card-list';

/**
 * Kafka Cluster資料編輯元件
 *
 * @member logger                LOG紀錄
 * @member brokerCardList        Broker卡片清單
 * @member buttonStyle           按鈕樣式
 * @member schemaRegitsryEnabled Schema Registry允許狀態
 * @member schemaRegistryHost    Schema Registry Host
 * @member saslEnabled           SASL允許狀態
 * @member saslAccount           SASL帳號密碼
 */
@Component({
  selector: 'kafka-gui-cluster-information',
  templateUrl: './cluster-information.component.html',
  styleUrls: ['./cluster-information.component.less']
})
export class ClusterInformationComponent implements OnInit {

  private readonly logger = new Logger(ClusterInformationComponent.name);

  public clusterCardList: CardList[];
  public buttonStyle = ButtonStyle;
  public schemaRegitsryEnabled = false;
  public schemaRegistryHost = '';
  public saslEnabled = false;
  public saslAccount: Account = { username: '', password: '' };

  /**
   * @param elementRef      元素參照
   * @param configureLoader 設定檔載入器
   */
  constructor(
    private readonly elementRef: ElementRef,
    private readonly configureLoader: ConfigureLoader
  ) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    // 初始化畫面大小
    this.onResized();

    // 初始化Cluster資訊
    this.initClusterCardList();
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
 * @NOTE SASL
 * ---------------------------------------------------------------------------
 */

}
