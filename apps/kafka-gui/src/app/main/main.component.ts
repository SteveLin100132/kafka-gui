/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 主畫面元件
 * @CREATE Sunday, 8th March 2020 12:17:39 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */


import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageLink, SideMenuItems } from '@kafka-gui/ng2-gui';
import { Logger } from '@steveylin/logger';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Broker } from '../core/services/api/models';
import { BrokersService } from '../core/services/api/services';
import { Crud } from '../shared/models/crud';
import { RefreshService } from '../core/services/refresh.service';
import { SIDE_MENU_LIST } from './mocks/side-menu-list';

/**
 * 主畫面元件
 *
 * @member logger       LOG紀錄
 * @member branch       側邊選單LOGO
 * @member sideMenuList 側邊選單選項
 */
@Component({
  selector: 'kafka-gui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnDestroy {

  private readonly logger = new Logger(MainComponent.name);
  private subscription: Subscription;

  public branch: ImageLink;
  public sideMenuList: SideMenuItems[] = [];

  /**
   * @param router     路由功能
   * @param brokersApi Broker資料API
   * @param refresh    重新整理服務
   */
  constructor(
    private readonly router: Router,
    private readonly brokersApi: BrokersService,
    private readonly refresh: RefreshService,
  ) {}

  /**
   * 初始化
   *
   * @method public
   */
  public async ngOnInit() {
    // 初始化側邊選單
    await this.initSideMenu();

    // 監聽刷新Broker資料信號
    this.listenRefreshSignal();
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
   * @NOTE 側邊選單
   * ---------------------------------------------------------------------------
   */

  /**
   * 初始化側邊選單
   *
   * @method private
   * @return 回傳一個Promise，讓呼叫者可以等待初始化側邊選單
   */
  private initSideMenu(): Promise<void> {
    return new Promise<void>(async resolve => {
      try {
        // 初始化選單圖片
        this.branch = {
          link: '#',
          src: './../../assets/images/kagka-gui-logo.png'
        };

        // 取得Kafka Broker資訊
        this.sideMenuList = [];
        const brokers = await this.brokersApi
          .getManyBaseBrokerControllerBroker()
          .toPromise() as Broker[];
        brokers.forEach((broker, index) => {
          this.sideMenuList.push({
            actived: index === 0,
            title: broker.name,
            link: `/main/manage/${broker.id}`
          });

          if (index === 0) {
            this.router.navigate([`/main/manage/${broker.id}`]);
          }
        });

        resolve();
      } catch (error) {
        this.logger.error('初始化側邊選單發生錯誤', error);
      }
    });
  }

  /**
   * 新增Borker
   *
   * @method public
   */
  public addBroker(): void {
    this.router.navigate([`/main/manage`]);
  }

  /**
   * 監聽刷新Broker資料信號
   *
   * @method private
   */
  private listenRefreshSignal(): void {
    const subscription = this.refresh.borkerSub
      .asObservable()
      .subscribe(async type => {
        // 取得Kafka Broker資訊
        this.sideMenuList = [];
        const brokers = await this.brokersApi
          .getManyBaseBrokerControllerBroker()
          .toPromise() as Broker[];
        brokers.forEach((broker, index) => {
          this.sideMenuList.push({
            actived: index === 0,
            title: broker.name,
            link: `/main/manage/${broker.id}`
          });
        });

        if (type === Crud.Type.CREATE || type === Crud.Type.DELETE) {
          this.router.navigate([this.sideMenuList[0].link]);
        }
      }, error => {
        this.logger.error('監聽刷新Broker資料發生錯誤', error);
      });

    if (this.subscription !== undefined) {
      this.subscription.add(subscription);
    } else {
      this.subscription = subscription;
    }
  }

}
