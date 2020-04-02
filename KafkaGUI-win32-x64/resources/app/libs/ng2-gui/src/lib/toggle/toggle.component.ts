/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： Toggle按鈕元件
 * @CREATE Tuesday, 10th March 2020 10:14:26 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

/**
 * Toggle按鈕元件
 *
 * @member on  ON狀態文字
 * @member off OFF狀態文字
 */
@Component({
  selector: 'ng2-gui-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements OnInit, ControlValueAccessor {

  @Input()
  public on: string;
  @Input()
  public off: string

  private onChange: (value) => {};
  private onTouched: () => {};

  public state = false;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * 當來源資料變更時呼叫
   *
   * @method public
   * @param state 資料來源
   */
  public writeValue(state: boolean): void {
    this.state = state;
  }

  /**
   * 提供Component內資料變更需要binding時呼叫的方法
   *
   * @method public
   * @param fn 註冊方法
   */
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * 同registerOnChange，只不過是在狀態變更為touched時呼叫
   *
   * @method public
   * @param fn 註冊方法
   */
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 切換
   * ---------------------------------------------------------------------------
   */

  /**
   * 切換Toggle狀態
   *
   * @method public
   */
  public switch(): void {
    this.state = !this.state;
    this.onChange(this.state);
  }

}
