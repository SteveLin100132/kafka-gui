/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 頭像顯示文字縮寫
 * @CREATE Sunday, 8th March 2020 1:44:04 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * 頭像顯示文字縮寫
 */
@Pipe({
  name: 'avatarShortText'
})
export class AvatarShortTextPipe implements PipeTransform {

  /**
   * 將內文轉換為縮寫
   *
   * @method public
   * @param text 要轉換的文字
   */
  public transform(text: string): any {
    const fields  = text.split(' ');
    let shortText = '';

    if (fields.length === 1) {
      shortText = (text[0] || '') + (text[1] || '');
    } else {
      shortText = fields[0] + fields[1];
    }

    return shortText.toUpperCase();
  }

}
