/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： App控制器
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Controller } from '@nestjs/common';
import { NestjsConfigureService } from '@kafka-gui/nestjs-configure';

import { AppService } from './app.service';

/**
 * App控制器
 */
@Controller()
export class AppController {

  /**
   * @param appService         APP服務
   * @param configure          設定檔載入服務
   */
  constructor(
    private readonly appService: AppService,
    private readonly configure: NestjsConfigureService,
  ) {}

}
