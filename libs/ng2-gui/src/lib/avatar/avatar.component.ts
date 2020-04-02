/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 頭像元件
 * @CREATE Sunday, 8th March 2020 1:31:10 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as $ from 'jquery';
import { Component, OnChanges, OnInit, Input, ElementRef, SimpleChanges } from '@angular/core';
import { Logger } from '@steveylin/logger';

import { ColorActived } from '../shared/models';

/**
 * 頭像元件
 *
 * @member actived    頭像是否激活
 * @member text       顯示文字
 * @member icon       顯示圖像
 * @member color      圖像文字色彩
 * @member background 圖像背景色彩
 */
@Component({
  selector: 'ng2-gui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnChanges, OnInit {

  @Input()
  public actived = false;
  @Input()
  public text: string;
  @Input()
  public icon: string;
  @Input()
  public color: ColorActived = { actived: '#1789C7', unactived: '#56596b' };
  @Input()
  public background: ColorActived = { actived: '#106796', unactived: '#222630' };

  private readonly logger = new Logger(AvatarComponent.name);

  /**
   * @param elementRef 元素參照
   */
  constructor(private readonly elementRef: ElementRef) { }

  /**
   * 當輸入參數發生變化
   *
   * @method public
   * @param changes 輸入參數
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('actived')) {
      this.switchColor();
    }
  }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * ---------------------------------------------------------------------------
   * 樣式
   * ---------------------------------------------------------------------------
   */

  /**
   * 切換顏色
   *
   * @method private
   */
  private switchColor(): void {
    if (this.actived) {
      $(this.elementRef.nativeElement).find('.avatar').css({
        '--color': this.color.actived,
        '--background': this.background.actived
      });
    } else {
      $(this.elementRef.nativeElement).find('.avatar').css({
        '--color': this.color.unactived,
        '--background': this.background.unactived
      });
    }
  }

}
