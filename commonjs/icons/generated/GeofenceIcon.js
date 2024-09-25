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
exports.GeofenceIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M6 9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-3.29 3.3A1.003 1.003 0 010 15c0-.28.11-.53.3-.71L3.59 11H2c-.55 0-1-.45-1-1s.45-1 1-1zM9.088.004l.097.013.097.024.057.018.1.042.054.029.095.061.052.04 6 5 .05.046.076.08.053.07.06.095.051.11c.056.141.079.294.067.446l-.014.105-.037.143-.035.087-.043.083-4 7-.034.056-.059.08-.038.044-.096.092-.114.082-.116.062-.086.034-.109.03-.1.017-.069.006H8.83c.088-.25.144-.515.163-.79L9 13v-3a3 3 0 00-2.824-2.995L6 7H3c-.351 0-.689.06-1.002.171L2 5l.002-.07.013-.1.015-.073.025-.085.043-.104.056-.101.045-.066.079-.093.084-.078.083-.062 6-4 .07-.043.12-.056.111-.036.108-.022.083-.01h.031c.046-.002.083 0 .12.003z'
];
const svgPaths20 = [
    'M8 11l.075.003.126.017.111.03.111.044.098.052.096.067.09.08c.036.035.068.073.097.112l.071.11.054.114.035.105.03.148L9 12V18a1 1 0 01-1.993.117L7 18v-3.586l-5.293 5.293a1 1 0 01-1.497-1.32l.083-.094L5.584 13h-3.58a1 1 0 01-.117-1.993L2.004 11H8zm3.018-11a1.003 1.003 0 01.39.087l.12.063.031.02.1.078 8.027 7.026.062.064.068.086.044.068.064.128.04.117.024.113.011.108v.1l-.007.073-.019.103-.037.121-.039.09-.05.087-4.996 7.994c-.06.097-.137.183-.226.254l-.093.067-.095.053-.087.037-.125.037a1.018 1.018 0 01-.218.026H11v-5a3 3 0 00-2.824-2.995L8 9H3V6a1 1 0 01.321-.734l.098-.08 7-5a1.01 1.01 0 01.45-.178L11.018 0z'
];
exports.GeofenceIcon = (0, react_1.memo)((0, react_1.forwardRef)(function GeofenceIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "geofence" }, props));
}));
