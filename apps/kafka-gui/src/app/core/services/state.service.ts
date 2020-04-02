/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 狀態服務
 * @CREATE Wednesday, 25th March 2020 5:10:14 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';
import { Logger } from '@steveylin/logger';
import { ReplaySubject } from 'rxjs';

import { ClientConnectedStatus } from './api/models';

/**
 * 狀態服務
 *
 * @member logger           LOG紀錄
 * @member kafkaConnetedSub Kafka連線狀態
 */
@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly logger = new Logger(StateService.name);

  public readonly kafkaConnetedSub = new ReplaySubject<ClientConnectedStatus>(1);

  constructor() { }

}
