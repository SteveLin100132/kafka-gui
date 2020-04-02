/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Cluster資料模型
 * @CREATE Sunday, 22nd March 2020 3:14:03 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CardList } from '../../../models/card-list';

/**
 * Cluster資料模型
 */
export namespace Cluster {

  /**
   * Cluster卡片清單資料模型
   *
   * @param title   標題
   * @param icon    圖示
   * @param control 是否添加控制器
   * @param host    Cluster位置
   */
  export interface ClusterCardList extends CardList {
    host?: string;
  }

}
