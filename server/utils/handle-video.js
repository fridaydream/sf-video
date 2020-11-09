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
// import { videoList } from '../../config/video-config'
var videoList = [{
        id: '3400001',
        author: '烨哥',
        title: 'CLS基于qiankun分享',
        date: '2020-06-19',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/CLS%E5%9F%BA%E4%BA%8Eqiankun%E5%88%86%E4%BA%AB.mov',
        poster: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/qiankun.png'
    }, {
        id: '3400002',
        author: '烨哥',
        title: 'CLS基于qiankun分享(下)',
        date: '2020-07-03',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/CLS%E5%9F%BA%E4%BA%8Eqiankun%E5%88%86%E4%BA%AB%28%E4%B8%8B%29.mov',
        poster: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/qiankun.png'
    }, {
        id: '3400003',
        author: '韩硕',
        title: 'passic分享',
        date: '2020-07-03',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/passic%E5%88%86%E4%BA%AB-%E5%BD%95%E5%B1%8F.mov',
        poster: 'https://erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/passic.png'
    }, {
        id: '3400007',
        author: '贤明',
        title: 'qiankun 整体源码浅析',
        date: '2020-07-28',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B62020-07-24%20%E4%B8%8B%E5%8D%884.03.45.mov',
        poster: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/qiankun2.png'
    }, {
        id: '3400004',
        author: '陈盼',
        title: 'canvas 旋转',
        date: '2020-06-23',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/canvas_rotate.mov',
        poster: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/canvas_line.jpg'
    }, {
        id: '3400005',
        author: '陈盼',
        title: 'canvas骑士轨迹',
        date: '2020-07-27',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/canvas_story2.mov',
        poster: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/tract.png'
    }, {
        id: '3400006',
        author: '陈盼',
        title: '骑士节星光轨迹',
        date: '2020-09-12',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/%E9%AA%91%E5%A3%AB%E8%8A%82%E6%98%9F%E5%85%89%E8%BD%A8%E8%BF%B9.mov',
        poster: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/light.png'
    }, {
        id: '3400008',
        author: '陈盼',
        title: 'ssr一期',
        date: '2020-09-12',
        url: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe_share/react-ssr.mov',
        poster: '//erp-1258916733.cos.ap-shanghai.myqcloud.com/fe-share-pic/ssr.png'
    }];
var handleVideo = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result;
    return __generator(this, function (_a) {
        id = ctx.query.id;
        // 如果没有id，查询所有
        if (!id) {
            return [2 /*return*/, ctx.body = {
                    data: videoList,
                    errno: 0
                }];
        }
        result = videoList.find(function (li) { return li.id === id; });
        if (result) {
            return [2 /*return*/, ctx.body = {
                    data: result,
                    errno: 0
                }];
        }
        return [2 /*return*/, ctx.body = {
                message: 'id is not exist',
                errno: 4004
            }];
    });
}); };
exports["default"] = handleVideo;
