(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Broker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_2__);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Broker實體
 * @CREATE Wednesday, 18th March 2020 9:48:30 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */



/**
 * Kafka Broker實體
 *
 * @member id       Borker流水號
 * @member name     Borker名稱
 * @member host     Borker位置
 * @member schema   Schema Registry位置
 * @member username Borker SASL帳號
 * @member password Borker SASL密碼
 */
let Broker = class Broker {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["PrimaryGeneratedColumn"])({ name: 'id' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Broker.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])({ name: 'name', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Broker.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])({ name: 'host', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Broker.prototype, "host", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])({ name: 'schema', nullable: true, default: null }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Broker.prototype, "schema", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])({ name: 'username', nullable: true, default: null }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Broker.prototype, "username", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])({ name: 'password', nullable: true, default: null }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Broker.prototype, "password", void 0);
Broker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Entity"])('broker')
], Broker);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestjsConfigureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/**
 * 專案名稱： steveylin-libs
 * 部門代號： ML8100
 * 檔案說明： Nestjs設定檔載入服務
 * @CREATE Monday, 16th March 2020 10:21:15 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */



/**
 * Nestjs設定檔載入服務
 *
 * @member configs 設定檔
 */
let NestjsConfigureService = class NestjsConfigureService {
    constructor() {
        this.configs = new Map();
    }
    /**
     * ---------------------------------------------------------------------------
     * @NOTE 設定檔
     * ---------------------------------------------------------------------------
     */
    /**
     * 載入設定檔
     *
     * @method public
     * @param files 設定檔資訊
     * @return 回傳一個Promise，讓呼叫者可以載入設定檔
     */
    load(files) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all(files.map((file) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const json = yield fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](file.path);
                this.configs.set(file.key, json.toString());
            })));
            resolve();
        }));
    }
    /**
     * 取得特定Key值的設定檔
     *
     * @method public
     * @param key 設定檔Key值
     * @return 回傳特定Key值設定檔
     */
    get(key) {
        return this.configs.get(key);
    }
};
NestjsConfigureService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NestjsConfigureService);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nestjs_configure_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NestjsConfigureModule", function() { return _nestjs_configure_module__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _nestjs_configure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NestjsConfigureService", function() { return _nestjs_configure_service__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _config_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _config_file__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_file__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： App服務
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */


/**
 * App服務
 */
let AppService = class AppService {
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _broker_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Broker資料實體服務
 * @CREATE Wednesday, 18th March 2020 9:52:28 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
var _a;






/**
 * Broker資料實體服務
 */
let BorkerService = class BorkerService extends _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_4__["TypeOrmCrudService"] {
    /**
     * @param repo Broker實體庫
     */
    constructor(repo) {
        super(repo);
        this.repo = repo;
    }
};
BorkerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_broker_entity__WEBPACK_IMPORTED_MODULE_5__[/* Broker */ "a"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"]) === "function" ? _a : Object])
], BorkerService);



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestjsConfigureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_configure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/**
 * 專案名稱： steveylin-libs
 * 部門代號： ML8100
 * 檔案說明： Nestjs設定檔載入Module
 * @CREATE Monday, 16th March 2020 10:21:15 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
var NestjsConfigureModule_1;



/**
 * Nestjs設定檔載入Module
 */
let NestjsConfigureModule = NestjsConfigureModule_1 = class NestjsConfigureModule {
    /**
     * 預載設定檔
     *
     * @method public
     * @param configFiles 設定檔資訊
     * @return 回傳Module動態設定
     */
    static forRoot(configFiles) {
        return {
            global: true,
            module: NestjsConfigureModule_1,
            providers: [
                _nestjs_configure_service__WEBPACK_IMPORTED_MODULE_2__[/* NestjsConfigureService */ "a"],
                {
                    provide: 'CONFIG',
                    inject: [_nestjs_configure_service__WEBPACK_IMPORTED_MODULE_2__[/* NestjsConfigureService */ "a"]],
                    useFactory: (configService) => {
                        return configService.load(configFiles);
                    }
                }
            ],
            exports: [
                _nestjs_configure_service__WEBPACK_IMPORTED_MODULE_2__[/* NestjsConfigureService */ "a"],
            ]
        };
    }
};
NestjsConfigureModule = NestjsConfigureModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        providers: [
            _nestjs_configure_service__WEBPACK_IMPORTED_MODULE_2__[/* NestjsConfigureService */ "a"]
        ],
        exports: [
            _nestjs_configure_service__WEBPACK_IMPORTED_MODULE_2__[/* NestjsConfigureService */ "a"]
        ],
    })
], NestjsConfigureModule);



/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * 專案名稱： steveylin-libs
 * 部門代號： ML8100
 * 檔案說明： 設定檔資料模型
 * @CREATE Monday, 16th March 2020 10:25:03 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kafka_gui_nestjs_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _local_database_local_database_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： App Module
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */






/**
 * App Module
 */
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _local_database_local_database_module__WEBPACK_IMPORTED_MODULE_5__[/* LocalDatabaseModule */ "a"].forRoot(),
            _kafka_gui_nestjs_configure__WEBPACK_IMPORTED_MODULE_2__["NestjsConfigureModule"].forRoot([
                { key: 'config', path: './apps/api/configs/config.json' },
            ]),
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_4__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"]]
    })
], AppModule);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kafka_gui_nestjs_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： App控制器
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
var _a, _b;




/**
 * App控制器
 */
let AppController = class AppController {
    /**
     * @param appService APP服務
     * @param configure  設定檔載入服務
     */
    constructor(appService, configure) {
        this.appService = appService;
        this.configure = configure;
    }
};
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _kafka_gui_nestjs_configure__WEBPACK_IMPORTED_MODULE_2__["NestjsConfigureService"] !== "undefined" && _kafka_gui_nestjs_configure__WEBPACK_IMPORTED_MODULE_2__["NestjsConfigureService"]) === "function" ? _b : Object])
], AppController);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDatabaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kafka_gui_nestjs_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _broker_broker_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _broker_borker_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 本地端資料庫Module
 * @CREATE Wednesday, 18th March 2020 9:19:33 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
var LocalDatabaseModule_1;






/**
 * 本地端資料庫Module
 */
let LocalDatabaseModule = LocalDatabaseModule_1 = class LocalDatabaseModule {
    /**
     * 先行連線
     *
     * @method public
     * @return 回傳Module動態設定
     */
    static forRoot() {
        return {
            module: LocalDatabaseModule_1,
            imports: [
                _broker_borker_module__WEBPACK_IMPORTED_MODULE_5__[/* BorkerModule */ "a"],
                _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forRootAsync({
                    inject: [_kafka_gui_nestjs_configure__WEBPACK_IMPORTED_MODULE_2__["NestjsConfigureService"]],
                    useFactory: (configure) => {
                        return {
                            type: 'sqlite',
                            database: './database/kafka_gui.db',
                            entities: [_broker_broker_entity__WEBPACK_IMPORTED_MODULE_4__[/* Broker */ "a"]],
                        };
                    },
                }),
            ],
        };
    }
};
LocalDatabaseModule = LocalDatabaseModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [],
        controllers: [],
        providers: [],
    })
], LocalDatabaseModule);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorkerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _broker_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _borker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _broker_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Broker Model Module
 * @CREATE Wednesday, 18th March 2020 9:47:44 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */






/**
 * Kafka Broker Model Module
 */
let BorkerModule = class BorkerModule {
};
BorkerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_broker_entity__WEBPACK_IMPORTED_MODULE_3__[/* Broker */ "a"]]),
        ],
        controllers: [
            _broker_controller__WEBPACK_IMPORTED_MODULE_5__[/* BrokerController */ "a"],
        ],
        providers: [
            _borker_service__WEBPACK_IMPORTED_MODULE_4__[/* BorkerService */ "a"],
        ],
        exports: [
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"],
        ]
    })
], BorkerModule);



/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@nestjsx/crud-typeorm");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _broker_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _borker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Broker資料實體控制器
 * @CREATE Wednesday, 18th March 2020 9:58:05 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
var _a;






/**
 * Broker資料實體控制器
 */
let BrokerController = class BrokerController {
    /**
     * @param service Broker資料實體服務
     */
    constructor(service) {
        this.service = service;
    }
};
BrokerController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiTags"])('brokers'),
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"])({
        model: { type: _broker_entity__WEBPACK_IMPORTED_MODULE_4__[/* Broker */ "a"] }
    }),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Controller"])('brokers'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _borker_service__WEBPACK_IMPORTED_MODULE_5__[/* BorkerService */ "a"] !== "undefined" && _borker_service__WEBPACK_IMPORTED_MODULE_5__[/* BorkerService */ "a"]) === "function" ? _a : Object])
], BrokerController);



/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@nestjsx/crud");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka GUI API
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */





/**
 * 啟動API
 */
function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // API設定
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_4__[/* AppModule */ "a"]);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.port || 3333;
        // Swagger設定
        const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["DocumentBuilder"]()
            .setTitle('Kafka GUI API')
            .setVersion('1.0.0')
            .addTag('Borkers')
            .build();
        const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].createDocument(app, options);
        _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].setup('explorer', app, document);
        // 匯出Swagger文件
        yield fs__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"]('./swagger.json', JSON.stringify(document));
        // 允許API跨站請求
        app.enableCors();
        // 啟動並監聽API
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map