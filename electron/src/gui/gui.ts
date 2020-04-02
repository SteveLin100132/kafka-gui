/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： GUI物件
 * @CREATE Saturday, 14th March 2020 8:24:02 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */


import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import { app, BrowserWindow, ipcMain } from 'electron';

/**
 * 視窗啟動
 */
export class Gui {

  private window: BrowserWindow;
  private windowMaximize = false;

  constructor() {
    // 當APP準備完畢，則產生視窗
    app.on('ready', this.createWindow.bind(this));

    // 當APP觸發，則產生視窗
    app.on('activate', () => {
      if (this.window === null) {
        this.createWindow();
      }
    });

    // 監聽視窗事件(最小化、最大化及關閉)
    this.listenWindowEvent();
  }

  /**
   * 產生視窗
   *
   * @method public
   */
  public createWindow(): void {
    const browserOptions: Electron.BrowserWindowConstructorOptions = {
      width: 1360,
      height: 860,
      frame: false,
      transparent: true,
      maximizable: true,
      webPreferences: { nodeIntegration: true }
    }

    // 產生視窗
    this.window = new BrowserWindow(browserOptions);
    this.window.show();

    // 載入頁面
    if (process.argv.includes('dev')) {
      this.window.loadURL('http://localhost:4200');
    } else {
      this.window.loadURL('http://localhost');
    }

    // 開發者工具
    // this.window.webContents.openDevTools();

    this.window.on('closed', () => {
      this.window = null;
    });
  }

  /**
   * 監聽視窗事件
   *
   * @method private
   */
  private listenWindowEvent(): void {
    // 開啟開發者工具
    ipcMain.on('tool-dev', () => this.window.webContents.openDevTools());

    // 視窗最小化
    ipcMain.on('minimize', () => this.window.minimize());

    // 視窗最大化
    ipcMain.on('maximize', () => {
      this.windowMaximize = !this.windowMaximize;
      if (this.windowMaximize) {
        this.window.maximize();
      } else {
        this.window.unmaximize();
      }
    });

    // 視窗關閉
    ipcMain.on('close', () => app.quit());
  }

}
