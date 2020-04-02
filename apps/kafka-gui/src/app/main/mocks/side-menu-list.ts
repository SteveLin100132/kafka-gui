/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 側邊選單假資料
 * @CREATE Sunday, 8th March 2020 2:29:45 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { SideMenuItems } from '@kafka-gui/ng2-gui';

export const SIDE_MENU_LIST: SideMenuItems[] = [
  {
    actived: true,
    title: 'WKS.PRD',
    link: '/main/manage/WKS.PRD'
  },
  {
    actived: false,
    title: 'WZS.PRD',
    link: '/main/manage/WZS.PRD'
  },
  {
    actived: false,
    title: 'WCQ.PRD',
    link: '/main/manage/WCQ.PRD'
  },
  {
    actived: false,
    title: 'WCD.PRD',
    link: '/main/manage/WCD.PRD'
  }
];
