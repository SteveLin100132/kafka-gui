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
import * as log from 'electron-log';
import { app } from 'electron';
import { exec, fork, spawn } from 'child_process';

import { Gui } from './gui/gui';

// const api = fork(path.join(__dirname, '../', '/backend/api/main.js'));
exec(`.\\node_modules\\node\\bin\\node.exe ${path.join(__dirname, '../', '/backend/api/main.js')}`);
// const api = spawn('node', ['./electron/backend/api/main']);
const gui = new Gui();
