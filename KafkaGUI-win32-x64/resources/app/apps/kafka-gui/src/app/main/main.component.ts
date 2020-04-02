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


import { Component, OnInit } from '@angular/core';
import { ImageLink, SideMenuItems } from '@kafka-gui/ng2-gui';
import { Logger } from '@steveylin/logger';

import { Broker } from '../core/services/api/models';
import { BrokersService } from '../core/services/api/services';
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
export class MainComponent implements OnInit {

  private readonly logger = new Logger(MainComponent.name);

  public branch: ImageLink;
  public sideMenuList: SideMenuItems[] = [];

  constructor(private readonly brokersApi: BrokersService) {}

  /**
   * 初始化
   *
   * @method public
   */
  public async ngOnInit() {
    // 初始化側邊選單
    await this.initSideMenu();
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
            link: `/main/manage/${broker.name}`
          });
        });

        resolve();
      } catch (error) {
        this.logger.error('初始化側邊選單發生錯誤', error);
      }
    });
  }

}
