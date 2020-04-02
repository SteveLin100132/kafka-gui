/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 延遲用服務
 * @CREATE Sunday, 22nd March 2020 9:16:47 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';

/**
 * 延遲用服務
 */
@Injectable({
  providedIn: 'root'
})
export class DelayService {

  constructor() { }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 延遲
   * ---------------------------------------------------------------------------
   */

  /**
   * 等待幾毫秒
   *
   * @method public
   * @param ms 毫秒
   * @return 回傳一個Promise，讓呼叫者可以等待幾毫秒
   */
  public wait(ms: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

}
