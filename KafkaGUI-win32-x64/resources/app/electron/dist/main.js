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
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const child_process_1 = require("child_process");
const gui_1 = require("./gui/gui");
// const api = fork(path.join(__dirname, '../', '/backend/api/main.js'));
child_process_1.exec(`.\\node_modules\\node\\bin\\node.exe ${path.join(__dirname, '../', '/backend/api/main.js')}`);
// const api = spawn('node', ['./electron/backend/api/main']);
const gui = new gui_1.Gui();
//# sourceMappingURL=main.js.map