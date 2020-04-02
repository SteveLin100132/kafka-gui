/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 重新整理服務
 * @CREATE Monday, 23rd March 2020 8:49:57 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';
import { Logger } from '@steveylin/logger';
import { Subject } from 'rxjs';

import { Crud } from '../../shared/models/crud';

/**
 * 重新整理服務
 *
 * @member logger    LOG紀錄
 * @member borkerSub Broker資料重新整理提示
 */
@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private readonly logger = new Logger(RefreshService.name);

  public readonly borkerSub = new Subject<Crud.Type>();

  constructor() { }

}
