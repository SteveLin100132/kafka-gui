/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 連線提示元件
 * @CREATE Monday, 16th March 2020 7:54:45 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kafka-gui-connect-hint',
  templateUrl: './connect-hint.component.html',
  styleUrls: ['./connect-hint.component.less']
})
export class ConnectHintComponent implements OnInit {

  constructor() { }

  /**
   * 連線提示元件
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
