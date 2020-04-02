"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const url = __importStar(require("url"));
const electron_1 = require("electron");
/**
 * 視窗啟動
 */
class Gui {
    constructor() {
        this.windowMaximize = false;
        // 當APP準備完畢，則產生視窗
        electron_1.app.on('ready', this.createWindow.bind(this));
        // 當APP觸發，則產生視窗
        electron_1.app.on('activate', () => {
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
    createWindow() {
        const browserOptions = {
            width: 1360,
            height: 860,
            frame: false,
            transparent: true,
            maximizable: true,
            webPreferences: { nodeIntegration: true }
        };
        // 產生視窗
        this.window = new electron_1.BrowserWindow(browserOptions);
        this.window.show();
        // 載入頁面
        // this.window.loadURL('http://localhost:4200');
        // this.window.loadFile(path.join(__dirname, '../../', '/frontend/kafka-gui/index.html'));
        this.window.loadURL(url.pathToFileURL(path.join(__dirname, '../../', '/frontend/kafka-gui/index.html')).href);
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
    listenWindowEvent() {
        electron_1.ipcMain.on('minimize', () => this.window.minimize());
        electron_1.ipcMain.on('maximize', () => {
            this.windowMaximize = !this.windowMaximize;
            if (this.windowMaximize) {
                this.window.maximize();
            }
            else {
                this.window.unmaximize();
            }
        });
        electron_1.ipcMain.on('close', () => electron_1.app.quit());
    }
}
exports.Gui = Gui;
//# sourceMappingURL=gui.js.map