/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Electron 主程式
 * @CREATE Saturday, 14th March 2020 8:24:02 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as path from 'path';
import express from 'express';
import { exec } from 'child_process';

import { Gui } from './gui/gui';

// 啟動API
if (!process.argv.includes('dev')) {
  const nodeCmd = '.\\node_modules\\node\\bin\\node.exe';
  const apiPath = path.join(__dirname, '../', '/backend/api/main.js');
  exec(`${nodeCmd} ${apiPath}`);
}

// 創建網頁伺服器
const web = express();
web.use('/', express.static(path.join(__dirname, '../', '/frontend/kafka-gui')));
web.listen(80);

// 創建視窗
const gui = new Gui();

