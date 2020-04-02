/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 帳號資料模型
 * @CREATE Thursday, 12th March 2020 9:16:22 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 帳號資料模型
 *
 * @param username 使用者名稱
 * @param password 使用者密碼
 */
export interface Account {
  username: string;
  password: string;
}
