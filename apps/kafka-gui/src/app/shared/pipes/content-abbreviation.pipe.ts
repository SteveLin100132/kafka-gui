/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 內容超出範圍縮寫
 * @CREATE Tuesday, 31st March 2020 7:50:05 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Logger } from '@steveylin/logger';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * 內容超出範圍縮寫
 *
 * @param logger LOG紀錄
 */
@Pipe({
  name: 'contentAbbreviation'
})
export class ContentAbbreviationPipe implements PipeTransform {

  private readonly logger = new Logger(ContentAbbreviationPipe.name);

  /**
   * 轉換內容
   *
   * @method public
   * @param value 原內容
   * @param limit 內容字數限制
   * @return 回傳縮寫後的內容
   */
  public transform(value: string, limit: number): string {
    const contentWidth = value.length;
    if (contentWidth > limit) {
      value = value.slice(0, limit);
      value += '...';
    }
    return value;
  }

}
