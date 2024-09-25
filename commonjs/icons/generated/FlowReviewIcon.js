"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowReviewIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M5.175 7.004a3.003 3.003 0 012.83-2.001c1.305 0 2.416.835 2.83 2.001h1.985c-.896-.756-1.401-1.193-1.515-1.31a1.03 1.03 0 01-.292-.705c0-.538.453-.989.99-.989a.95.95 0 01.696.294c.117.124 1.12 1.13 3.008 3.016.176.176.293.41.293.684a.976.976 0 01-.283.695l-3.013 3.027a.995.995 0 01-1.691-.702c0-.273.116-.544.292-.72l1.515-1.292h-1.98a3.003 3.003 0 01-2.835 2.016A3.003 3.003 0 015.17 9.002H3.18l1.515 1.292c.176.176.292.447.292.72a.995.995 0 01-1.69.702L.282 8.69A.976.976 0 010 7.994c0-.273.117-.508.293-.684A535.858 535.858 0 003.3 4.294.95.95 0 013.997 4c.537 0 .99.45.99.989 0 .273-.12.528-.292.705-.114.117-.62.554-1.515 1.31h1.995z'
];
const svgPaths20 = [
    'M6.13 9.004A4.005 4.005 0 0110.012 6c1.87 0 3.44 1.278 3.881 3.005h2.768l-2.354-2.317a.97.97 0 01-.283-.691c0-.536.462-.995 1-.995.273 0 .517.107.693.283l4 4.041a.97.97 0 01.284.692.956.956 0 01-.293.682l-3.991 3.997a.944.944 0 01-.694.292c-.537 0-1-.46-1-.997a.97.97 0 01.284-.692l2.345-2.29h-2.765a4.005 4.005 0 01-3.875 2.981 4.005 4.005 0 01-3.874-2.981H3.349l2.376 2.308a.97.97 0 01.283.691 1 1 0 01-.994.983.989.989 0 01-.713-.291L.293 10.699A.956.956 0 010 10.017a.97.97 0 01.283-.692l4.03-4.037a.996.996 0 01.701-.283c.537 0 .994.464.994 1a.97.97 0 01-.283.691L3.34 9.004h2.79z'
];
exports.FlowReviewIcon = (0, react_1.memo)((0, react_1.forwardRef)(function FlowReviewIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "flow-review" }, props));
}));
