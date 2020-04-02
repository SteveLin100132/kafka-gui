/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 彈出訊息元件容器指令
 * @CREATE Sunday, 29th March 2020 1:52:09 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Directive, OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { SnackBarContainerComponent } from './snack-bar-container.component';

/**
 * 彈出訊息元件容器指令
 *
 * @member containerRef 訊息提示容器參照
 */
@Directive({
  selector: '[Ng2GuiSnackBarContainer]'
})
export class SnackBarContainerDirective implements OnInit {

  private containerRef: ComponentRef<SnackBarContainerComponent>

  /**
   * @param componentFactoryResolver Component動態產生器
   * @param viewContainerRef         View容器的參照
   */
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly viewContainerRef: ViewContainerRef,
  ) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    // 建立訊息提示容器
    this.createContainer();
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 元件
   * ---------------------------------------------------------------------------
   */

  /**
   * 清除View中的元件
   *
   * @method public
   */
  public clearComponents(): void {
    this.viewContainerRef.clear();
  }

  /**
   * 建立訊息提示容器
   *
   * @method private
   */
  private createContainer(): void {
    // 解析要建立的元件
    const containerFactory = this.componentFactoryResolver
      .resolveComponentFactory(SnackBarContainerComponent);
    this.containerRef = this.viewContainerRef.createComponent(containerFactory);
  }

}
