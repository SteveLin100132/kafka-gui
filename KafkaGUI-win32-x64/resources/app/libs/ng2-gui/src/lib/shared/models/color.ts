/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： 顏色變化資料模型
 * @CREATE Sunday, 8th March 2020 1:59:14 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 滑鼠徘徊顏色變化資料模型
 *
 * @param normal 一般狀態的顏色
 * @param hover  徘徊狀態的顏色
 */
export interface ColorHoverd {
  normal: string;
  hover: string;
}

/**
 * 觸發前後顏色變化資料模型
 *
 * @param actived   觸發狀態的顏色
 * @param unactived 未觸發狀態的顏色
 */
export interface ColorActived {
  actived: string;
  unactived: string;
}
