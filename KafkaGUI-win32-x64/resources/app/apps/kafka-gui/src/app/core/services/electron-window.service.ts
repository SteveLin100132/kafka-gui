/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Electron視窗控制服務
 * @CREATE Sunday, 15th March 2020 8:18:43 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { Logger } from '@steveylin/logger';

/**
 * Electron視窗控制服務
 *
 * @member logger      LOG紀錄
 * @member ipcRenderer Electron IPC溝通渲染
 */
@Injectable({
  providedIn: 'root'
})
export class ElectronWindowService {

  private readonly logger = new Logger(ElectronWindowService.name);
  private readonly ipcRenderer: IpcRenderer;

  constructor() {
    if (window.require) {
      try {
        this.ipcRenderer = window.require('electron').ipcRenderer;
      } catch (error) {
        this.logger.log('Load Electron\'s IPC occur error', error);
      }
    } else {
      this.logger.warn('Electron\'s IPC was not loaded');
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 視窗控制
   * ---------------------------------------------------------------------------
   */

  /**
   * 縮小視窗
   *
   * @method public
   */
  public minimize(): void {
    this.ipcRenderer.send('minimize');
  }

  /**
   * 放大視窗
   *
   * @method public
   */
  public maximize(): void {
    this.ipcRenderer.send('maximize');
  }

  /**
   * 關閉應用程式
   *
   * @method public
   */
  public close(): void {
    this.ipcRenderer.send('close');
  }

}
