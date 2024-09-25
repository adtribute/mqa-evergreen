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
exports.LayoutBalloonIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M14 11c-.2 0-.38.04-.56.09L12.42 9.4c.36-.36.58-.85.58-1.4 0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .55.22 1.04.58 1.4l-1.01 1.69C11.38 6.04 11.2 6 11 6c-.93 0-1.71.64-1.93 1.5H6.93C6.71 6.64 5.93 6 5 6c-.2 0-.38.04-.56.09L3.42 4.4C3.78 4.04 4 3.55 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.2 0 .38-.04.56-.09L3.58 6.6C3.22 6.96 3 7.45 3 8c0 .55.22 1.04.58 1.4l-1.01 1.69C2.38 11.04 2.2 11 2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09.93 0 1.71-.64 1.93-1.5h2.14c.22.86 1 1.5 1.93 1.5.2 0 .38-.04.56-.09l1.01 1.69c-.35.36-.57.85-.57 1.4 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
];
const svgPaths20 = [
    'M18 16c-.14 0-.28.02-.42.05l-1.73-3.45c.69-.45 1.14-1.22 1.14-2.1s-.46-1.65-1.14-2.1l1.73-3.45c.14.03.28.05.42.05 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .6.27 1.13.69 1.5l-1.77 3.54c-.14-.02-.28-.04-.42-.04a2.5 2.5 0 00-2.45 2h-4.1A2.5 2.5 0 005.5 8c-.14 0-.28.02-.42.04L3.31 4.5C3.73 4.13 4 3.6 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.14 0 .28-.02.42-.05L4.14 8.4C3.46 8.85 3 9.62 3 10.5s.46 1.65 1.14 2.1l-1.73 3.45A1.84 1.84 0 002 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.6-.27-1.13-.69-1.5l1.77-3.54c.14.02.28.04.42.04a2.5 2.5 0 002.45-2h4.1a2.5 2.5 0 002.45 2c.14 0 .28-.02.42-.04l1.77 3.54c-.42.37-.69.9-.69 1.5 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
];
exports.LayoutBalloonIcon = (0, react_1.memo)((0, react_1.forwardRef)(function LayoutBalloonIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "layout-balloon" }, props));
}));
