/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： CRUD資料模型
 * @CREATE Monday, 23rd March 2020 9:00:09 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * CRUD資料模型
 */
export namespace Crud {

  /**
   * CRUD類型
   *
   * @param CREATE 新增
   * @param READ   讀取
   * @param UPDATE 修改
   * @param DELETE 刪除
   */
  export enum Type {
    CREATE,
    READ,
    UPDATE,
    DELETE
  }

}
