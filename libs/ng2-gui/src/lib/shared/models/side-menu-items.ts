/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 側邊選單資料模型
 * @CREATE Sunday, 8th March 2020 2:26:12 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 側邊選單資料模型
 *
 * @param actived 選項是否激活
 * @param title   選項標題
 * @param link    選項連結
 */
export interface SideMenuItems {
  actived: boolean;
  title: string;
  link?: string;
}
