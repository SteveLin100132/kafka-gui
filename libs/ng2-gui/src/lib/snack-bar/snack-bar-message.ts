/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 提示訊息資料模型
 * @CREATE Sunday, 29th March 2020 3:34:17 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 提示訊息資料模型
 *
 * @param icon    圖示
 * @param message 提示內容
 * @param color   主要顏色
 * @param delay   顯示時間(單位: ms)
 */
export interface SnackBarMessage {
  icon?: string;
  message: string;
  color?: string;
  delay?: number;
}
