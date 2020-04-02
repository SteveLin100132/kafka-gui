/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Broker實體訂閱器
 * @CREATE Sunday, 22nd March 2020 11:39:04 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Logger } from '@nestjs/common';

import { Broker } from './broker.entity';

/**
 * Broker實體訂閱器
 *
 * @member logger LOG紀錄
 */
@EventSubscriber()
export class BrokerSubscriber implements EntitySubscriberInterface<Broker> {

  private readonly logger = new Logger;

  constructor() {}

  /**
   * 監聽插入資料前的事件
   *
   * @method public
   * @param event 事件參數
   */
  public beforeInsert(event: InsertEvent<Broker>): void {
    // TODO:
  }

}
