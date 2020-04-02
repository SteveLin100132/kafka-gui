/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Desktop視窗元件
 * @CREATE Sunday, 15th March 2020 1:23:28 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

import { ElectronWindowService } from '../../services/electron-window.service';

/**
 * Desktop視窗元件
 */
@Component({
  selector: 'kafka-gui-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.less']
})
export class FrameComponent implements OnInit {

  /**
   * @param electronWindowService Electron視窗控制服務
   */
  constructor(private readonly electronWindowService: ElectronWindowService) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 工具列
   * ---------------------------------------------------------------------------
   */

  /**
   * 開啟Electron的開發者工具
   *
   * @method public
   */
  public onDevToolOpened(): void {
    this.electronWindowService.openDevTool();
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 視窗
   * ---------------------------------------------------------------------------
   */

  /**
   * 當視窗最小化
   *
   * @method public
   */
  public onMinimized(): void {
    this.electronWindowService.minimize();
  }

  /**
   * 當視窗最大化
   *
   * @method public
   */
  public onMaximized(): void {
    this.electronWindowService.maximize();
  }

  /**
   * 當關閉應用程式
   *
   * @method public
   */
  public onAppClosed(): void {
    this.electronWindowService.close();
  }

}
