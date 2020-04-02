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
    // this.window.loadURL('http://localhost:4200');
    // this.window.loadFile(path.join(__dirname, '../../', '/frontend/kafka-gui/index.html'));
    this.window.loadURL(
      url.pathToFileURL(
        path.join(__dirname, '../../', '/frontend/kafka-gui/index.html')
      ).href
    );
    // this.window.loadURL(url.format({
    //   pathname: path.join(__dirname, '../../', '/frontend/kafka-gui/index.html'),
    //   protocol: 'file:',
    //   slashes: true
    // }));

    // 開發者工具
    this.window.webContents.openDevTools();

    this.window.on('closed', () => {
      this.window = null;
    });
  }

  /**
   * 監聽視窗事件(最小化、最大化及關閉)
   *
   * @method private
   */
  private listenWindowEvent(): void {
    ipcMain.on('minimize', () => this.window.minimize());
    ipcMain.on('maximize', () => {
      this.windowMaximize = !this.windowMaximize;
      if (this.windowMaximize) {
        this.window.maximize();
      } else {
        this.window.unmaximize();
      }
    });
    ipcMain.on('close', () => app.quit());
  }

}
