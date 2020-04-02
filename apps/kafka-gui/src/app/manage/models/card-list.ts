/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 卡片清單資料模型
 * @CREATE Monday, 9th March 2020 10:16:42 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 卡片清單資料模型
 *
 * @param title   標題
 * @param icon    圖示
 * @param control 是否添加控制器
 */
export interface CardList {
  title: string;
  icon?: string;
  control: boolean;
}
