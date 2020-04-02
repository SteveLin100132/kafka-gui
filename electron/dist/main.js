"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const express_1 = __importDefault(require("express"));
const child_process_1 = require("child_process");
const gui_1 = require("./gui/gui");
// 啟動API
if (!process.argv.includes('dev')) {
    const nodeCmd = '.\\node_modules\\node\\bin\\node.exe';
    const apiPath = path.join(__dirname, '../', '/backend/api/main.js');
    child_process_1.exec(`${nodeCmd} ${apiPath}`);
}
// 創建網頁伺服器
const web = express_1.default();
web.use('/', express_1.default.static(path.join(__dirname, '../', '/frontend/kafka-gui')));
web.listen(80);
// 創建視窗
const gui = new gui_1.Gui();
//# sourceMappingURL=main.js.map