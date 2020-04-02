/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 彈出提示元件服務
 * @CREATE Sunday, 29th March 2020 1:38:15 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';

import { SnackBarMessage } from './snack-bar-message';
import { Subject, Observable } from 'rxjs';

/**
 * 彈出提示元件服務
 *
 * @member messageSub 訊息推播
 * @member destorySub 提示訊息銷毀推播
 */
@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  private readonly messageSub = new Subject<SnackBarMessage>();
  private readonly destorySub = new Subject<number>();

  constructor() { }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 提示訊息
   * ---------------------------------------------------------------------------
   */

  /**
   * 顯示對應的內容
   *
   * @method public
   * @param message 要顯示的訊息
   */
  public show(message: SnackBarMessage): void {
    this.messageSub.next(message);
  }

  /**
   * 監聽提示訊息
   *
   * @method public
   * @retrun 回傳一個Observable，讓呼叫者可以監聽提示訊息
   */
  public listenMessages(): Observable<SnackBarMessage> {
    return this.messageSub.asObservable();
  }

  /**
   * 銷毀特定ID的提示訊息元件
   *
   * @method public
   * @param id 提示訊息元件ID
   */
  public remove(id: number): void {
    this.destorySub.next(id);
  }

  /**
   * 監聽提示訊息元件銷毀信號
   *
   * @method public
   * @return 回傳一個Observable，讓呼叫者可以監聽提示訊息元件銷毀信號
   */
  public listenDestorySignal(): Observable<number> {
    return this.destorySub.asObservable();
  }

}
