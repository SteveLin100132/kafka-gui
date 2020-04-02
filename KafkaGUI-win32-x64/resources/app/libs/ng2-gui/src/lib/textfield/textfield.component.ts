/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 輸入欄位元件
 * @CREATE Wednesday, 11th March 2020 9:25:18 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

/**
 * 輸入欄位元件
 */
@Component({
  selector: 'ng2-gui-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextfieldComponent),
      multi: true
    }
  ]
})
export class TextfieldComponent implements OnInit, ControlValueAccessor  {

  @Input() label: string;
  @Input() disabled = false;

  private onChange: (value) => {};
  private onTouched: () => {};

  public text = '';

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  ngOnInit() {
  }

  /**
   * 當來源資料變更時呼叫
   *
   * @method public
   * @param text 資料來源
   */
  public writeValue(text: string): void {
    this.text = text;
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
   * @NOTE 輸入欄位
   * ---------------------------------------------------------------------------
   */

  /**
   * 當輸入欄位發生變化
   *
   * @method public
   */
  public onTextChanged(): void {
    this.onChange(this.text);
  }

}
