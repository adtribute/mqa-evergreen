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
exports.DriveTimeIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M15.12 4.76h-1.05l-.76-2.12c-.19-.53-.76-1.08-1.27-1.24 0 0-1.32-.4-4.04-.4-2.72 0-4.04.4-4.04.4-.5.16-1.07.71-1.26 1.24l-.77 2.12H.88c-.48 0-.88.42-.88.94s.4.94.88.94h.38L1 7c-.03.69 0 1.44 0 2v5c0 .66.38 1 1 1s1-.34 1-1v-1h10v1c0 .66.38 1 1 1s1-.34 1-1V9c0-.56-.01-1.37 0-2l-.26-.37h.38c.48 0 .88-.42.88-.93 0-.52-.4-.94-.88-.94zM5 10H3V8h2v2zm8 0h-2V8h2v2zm0-4H3c-.18 0-.06-.82 0-1l.73-1.63C3.79 3.19 3.82 3 4 3h8c.18 0 .21.19.27.37L13 5c.06.18.18 1 0 1z'
];
const svgPaths20 = [
    'M20.01 7.7c0-.63-.5-1.14-1.1-1.14h-1.32l-.95-2.57c-.24-.64-.95-1.31-1.59-1.5 0 0-1.65-.49-5.05-.49s-5.04.49-5.04.49c-.63.19-1.35.86-1.59 1.5l-.95 2.57H1.1C.5 6.56 0 7.07 0 7.7c0 .63.5 1.14 1.1 1.14h.47l-.34.91c-.24.64-.43 1.72-.43 2.4v5.39c0 .8.63 1.45 1.4 1.45.77 0 1.4-.65 1.4-1.45v-.83h12.8v.83c0 .8.63 1.45 1.4 1.45s1.4-.65 1.4-1.45v-5.39c0-.68-.19-1.77-.43-2.4l-.34-.91h.47c.61 0 1.11-.51 1.11-1.14zm-16.47.34l1.12-3.16c.08-.22.32-.39.54-.39h9.6c.22 0 .46.17.54.39l1.12 3.16c.08.21-.04.39-.26.39H3.8c-.22-.01-.34-.18-.26-.39zm.96 4.94c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.68 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
];
exports.DriveTimeIcon = (0, react_1.memo)((0, react_1.forwardRef)(function DriveTimeIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "drive-time" }, props));
}));
