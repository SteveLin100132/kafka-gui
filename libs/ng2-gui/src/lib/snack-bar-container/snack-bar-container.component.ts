/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 彈出提示容器元件
 * @CREATE Sunday, 29th March 2020 2:10:36 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, OnDestroy, ComponentRef, ComponentFactoryResolver, ViewContainerRef, Injector, ApplicationRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { SnackBarMessage } from '../snack-bar/snack-bar-message';
import { SnackBarService } from '../snack-bar/snack-bar.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

/**
 * 彈出提示容器元件
 *
 * @member snackBarRefs 訊息提示元件參照
 */
@Component({
  selector: 'ng2-gui-snack-bar-container',
  templateUrl: './snack-bar-container.component.html',
  styleUrls: ['./snack-bar-container.component.less']
})
export class SnackBarContainerComponent implements OnInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  public viewContainerRef: ViewContainerRef;

  private subscription: Subscription;
  private snackBarRefs = new Map<number, ComponentRef<SnackBarComponent>>();

  /**
   * @param componentFactoryResolver Component動態產生器
   * @param snackBarService          彈出提示元件服務
   */
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly snackBarService: SnackBarService,
  ) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    // 監聽提示訊息
    this.listenSnackBarMessages();

    // 監聽提示訊息元件銷毀信號，並觸發銷毀
    this.listenSnackBarDestorySignal();
  }

  /**
   * 當Component銷毀時
   *
   * @method public
   */
  public ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 元件
   * ---------------------------------------------------------------------------
   */

  /**
   * 建立訊息提示容器
   *
   * @method private
   * @param message 要顯示的提示訊息
   */
  private createSnackBar(message: SnackBarMessage): void {
    // 解析要建立的元件
    const snackBarFactory = this.componentFactoryResolver
      .resolveComponentFactory(SnackBarComponent);
    const snackBarRef = this.viewContainerRef.createComponent(snackBarFactory);

    const timestamp = new Date().getTime();
    snackBarRef.instance.id = timestamp;
    snackBarRef.instance.message = message.message;
    snackBarRef.instance.icon = message.icon || 'fa-info-circle';
    snackBarRef.instance.color = message.color || '#1789C7';
    this.snackBarRefs.set(timestamp, snackBarRef);
    this.removeSnackBar(timestamp, message.delay || 2000);
  }

  /**
   * 移除訊息提示容器
   *
   * @method private
   * @param index 提示訊息時間戳
   * @param ms    延遲移除的時間(單位: ms)
   */
  private removeSnackBar(timestamp: number, ms: number): void {
    if (ms !== Infinity) {
      setTimeout(() => this.snackBarRefs.get(timestamp).destroy(), ms);
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 訊息
   * ---------------------------------------------------------------------------
   */

  /**
   * 監聽提示訊息
   *
   * @method private
   */
  private listenSnackBarMessages(): void {
    const subscription = this.snackBarService.listenMessages()
      .subscribe(message => {
        this.createSnackBar(message);
      });

    if (this.subscription !== undefined) {
      this.subscription.add(subscription);
    } else {
      this.subscription = subscription;
    }
  }

  /**
   * 監聽提示訊息元件銷毀信號，並觸發銷毀
   *
   * @method private
   */
  private listenSnackBarDestorySignal(): void {
    const subscription = this.snackBarService.listenDestorySignal()
      .subscribe(id => {
        this.snackBarRefs.get(id).destroy()
      });

    if (this.subscription !== undefined) {
      this.subscription.add(subscription);
    } else {
      this.subscription = subscription;
    }
  }

}
