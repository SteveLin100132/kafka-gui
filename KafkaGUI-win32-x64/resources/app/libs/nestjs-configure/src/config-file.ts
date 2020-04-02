/**
 * 專案名稱： steveylin-libs
 * 部門代號： ML8100
 * 檔案說明： 設定檔資料模型
 * @CREATE Monday, 16th March 2020 10:25:03 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 設定檔資料模型
 */
export namespace Config {

  /**
   * 設定檔檔案資料模型
   *
   * @param key 設定檔Key值
   * @param path 設定檔檔案路徑
   */
  export interface File {
    key: string;
    path: string;
  }

}
