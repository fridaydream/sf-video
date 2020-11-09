"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var webpack_1 = require("webpack");
var memory_fs_1 = require("memory-fs");
var path_1 = require("path");
var koa2_proxy_middleware_1 = require("koa2-proxy-middleware");
// @ts-ignore
var webpack_config_server_1 = require("../../build/webpack.config.server");
var module_1 = require("module");
var vm_1 = require("vm");
var server_render_1 = require("./server-render");
// (function(exports, require, module, __filename, __dirname) {...bundle code})
var getModuleFromString = function (bundle, filename) {
    var m = { exports: {} };
    var wrapper = module_1["default"].wrap(bundle);
    var script = new vm_1["default"].Script(wrapper, {
        filename: filename,
        displayErrors: true
    });
    var result = script.runInThisContext();
    result.call(m.exports, m.exports, require, m);
    return m;
};
var getTemplate = function () {
    return new Promise(function (resolve, reject) {
        axios_1["default"].get('http://localhost:8888/public/server.ejs')
            .then(function (res) {
            resolve(res.data);
        })["catch"](reject);
    });
};
var mfs = new memory_fs_1["default"];
var serverCompiler = webpack_1["default"](webpack_config_server_1["default"]);
serverCompiler.outputFileSystem = mfs;
var serverBundle;
serverCompiler.watch({}, function (err, stats) {
    if (err)
        throw err;
    // @ts-ignore
    stats = stats.toJson();
    // @ts-ignore
    stats.errors.forEach(function (errmsg) { return console.error(errmsg); });
    // @ts-ignore
    stats.warnings.forEach(function (warn) { return console.warn(warn); });
    var bundlePath = path_1["default"].join(webpack_config_server_1["default"].output.path, webpack_config_server_1["default"].output.filename);
    var bundle = mfs.readFileSync(bundlePath, 'utf-8');
    var m = getModuleFromString(bundle, 'server-entry.js');
    // 下面这个m.exports.default和热更新有关联，改变了webpack public中/public =》 /public/之后需要加 default
    // @ts-ignore
    serverBundle = m.exports;
});
function default_1(app) {
    var _this = this;
    var options = {
        targets: {
            // (.*) means anything
            '/public/(.*)': {
                target: 'http://localhost:8888/',
                changeOrigin: true
            }
        }
    };
    app.use(koa2_proxy_middleware_1["default"](options));
    app.use(function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
        var template;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!serverBundle) {
                        ctx.body = 'waiting for compile, refresh later';
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, getTemplate()];
                case 1:
                    template = _a.sent();
                    ctx.template = template;
                    ctx.serverBundle = serverBundle;
                    return [4 /*yield*/, next()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    app.use(server_render_1["default"]);
}
exports["default"] = default_1;
