/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 彈出提示元件
 * @CREATE Sunday, 29th March 2020 1:08:20 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ButtonStyle } from './../button/button-style.enum';
import { SnackBarService } from './snack-bar.service';

/**
 * 彈出提示元件
 *
 * @member id          提示訊息元件ID
 * @member icon        圖示
 * @member message     要顯示的訊息
 * @member color       主要顏色
 * @member buttonStyle 確認按鈕樣式清單
 */
@Component({
  selector: 'ng2-gui-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.less']
})
export class SnackBarComponent implements OnInit, OnDestroy {

  @Input()
  public id: number;
  @Input()
  public icon = 'fa-info-circle';
  @Input()
  public message: string;
  @Input()
  public color = '#1789C7';

  public buttonStyle = ButtonStyle;

  /**
   * @param snackBarService 彈出提示元件服務
   */
  constructor(private readonly snackBarService: SnackBarService) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * 當Component銷毀時
   *
   * @method public
   */
  public ngOnDestroy(): void {
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 互動
   * ---------------------------------------------------------------------------
   */

  /**
   * 當按下Done按鈕時
   *
   * @method public
   */
  public onSnackBarDone(): void {
    this.snackBarService.remove(this.id);
  }

}
