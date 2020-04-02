/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： APP主元件
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';
import { ConfigureLoader } from '@steveylin/ng2-configure';
import { Logger } from '@steveylin/logger';

import { AppConfig } from './shared/models/app-config';

/**
 * APP主元件
 *
 * @member logger LOG紀錄
 */
@Component({
  selector: 'kafka-gui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  private readonly logger = new Logger(AppComponent.name);

  public appType = 'desktop';

  /**
   * @param configureLoader 設定檔載入器
   */
  constructor(private readonly configureLoader: ConfigureLoader) {}

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    // 設定APP的顯示形式
    this.appType = this.configureLoader.get<AppConfig.Config>('config').appType;
  }

}
