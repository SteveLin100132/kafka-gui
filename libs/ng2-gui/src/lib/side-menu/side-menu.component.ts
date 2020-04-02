/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 側邊選單元件
 * @CREATE Sunday, 8th March 2020 12:55:01 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { Logger } from '@steveylin/logger';
import { Router } from '@angular/router';

import { ImageLink } from '../shared/models/image-link';
import { SideMenuItems } from '../shared/models/side-menu-items';

/**
 * 側邊選單元件
 *
 * @member branch 側邊選單LOGO
 * @member items  側邊選單選項
 */
@Component({
  selector: 'ng2-gui-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnChanges, OnInit {

  @Input()
  public branch: ImageLink;
  @Input()
  public items: SideMenuItems[] = [];

  private readonly logger = new Logger(SideMenuComponent.name);

  /**
   * @param router 路由功能
   */
  constructor(private readonly router: Router) { }

  /**
   * 當輸入參數發生變化
   *
   * @method public
   * @param changes 輸入參數
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('items')) {
      this.items.forEach(item => {
        if (item.actived) {
          this.router.navigate([item.link]);
        }
      });
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
   * @NOTE UI動作
   * ---------------------------------------------------------------------------
   */

  /**
   * 當選像被選擇時
   *
   * @method public
   * @param index 選項索引值
   */
  public onItemSelected(index: number): void {
    this.router.navigate([this.items[index].link]);
    this.items = this.items.map((item, idx) => {
      item.actived = idx === index;
      return item;
    });
  }

}
