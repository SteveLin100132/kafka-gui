/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 頁籤資料模型
 * @CREATE Sunday, 8th March 2020 9:34:29 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 頁籤資料模型
 *
 * @param id      頁籤ID
 * @param title   頁籤標題
 * @param actived 頁籤是否激活
 */
export interface TabItem {
  id: any;
  title: string;
  actived: boolean;
}
