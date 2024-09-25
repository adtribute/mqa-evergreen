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
exports.EyeOnIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M10.29 6.7c.18.18.43.29.71.29s.53-.11.71-.29l4-4c.17-.18.29-.43.29-.7a1.003 1.003 0 00-1.71-.71L11 4.58 9.71 3.29A.997.997 0 009 3c-.55 0-1 .44-1 1a1 1 0 00.3.7l1.99 2zM16 7.96v-.02-.01-.02-.02a.64.64 0 00-.17-.36c-.3-.4-.65-.76-1-1.12l-1.7 1.7c-.55.55-1.3.88-2.13.88-.06 0-.11-.01-.17-.02C10.42 10.15 9.32 11 8.01 11A3.005 3.005 0 016.4 5.46c-.24-.43-.39-.93-.39-1.46 0-.26.04-.5.1-.74-.7.2-1.37.5-2.01.86-1.26.7-2.4 1.68-3.4 2.77-.18.21-.36.41-.53.63-.22.29-.22.64 0 .93.51.67 1.12 1.27 1.73 1.81 1.33 1.17 2.85 2.15 4.53 2.55.97.23 1.95.24 2.92.05.89-.18 1.74-.54 2.54-.99 1.25-.71 2.4-1.69 3.39-2.78.18-.2.37-.41.54-.63.09-.1.15-.23.17-.37v-.02-.02-.01-.02-.03c.01-.01.01-.02.01-.03zM8.01 9c.48 0 .87-.35.96-.81a.55.55 0 01-.07-.09l-.02.01L7.8 7.03c-.45.1-.79.48-.79.96 0 .56.45 1.01 1 1.01z'
];
const svgPaths20 = [
    'M13.3 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4.99-5a1.003 1.003 0 00-1.42-1.42L14 6.58l-2.29-2.29a.956.956 0 00-.7-.29 1.003 1.003 0 00-.71 1.71l3 3zM20 9.96v-.03-.01-.02-.02a.823.823 0 00-.21-.44c-.44-.55-.94-1.05-1.46-1.52l-2.2 2.2c-.55.54-1.3.88-2.12.88-.05 0-.09-.01-.14-.01a3.978 3.978 0 01-3.86 3.02 4.007 4.007 0 01-1.66-7.65A2.97 2.97 0 018.02 5c0-.28.05-.54.12-.8-1.05.22-2.07.64-3.02 1.15-1.57.85-3 2.02-4.24 3.33-.23.25-.46.5-.67.76-.28.35-.28.77 0 1.12.64.8 1.4 1.52 2.17 2.17 1.66 1.41 3.56 2.58 5.66 3.06 1.21.27 2.43.29 3.65.05 1.11-.21 2.18-.65 3.18-1.19 1.57-.85 3-2.02 4.24-3.33.23-.24.46-.49.67-.76.11-.12.18-.27.21-.44v-.02-.02-.01-.03V10c.01-.01.01-.03.01-.04zm-9.99 2.05c1.03 0 1.87-.79 1.98-1.8l-.09-.09-.01.01-2.1-2.11c-1 .11-1.77.95-1.77 1.98-.01 1.11.89 2.01 1.99 2.01z'
];
exports.EyeOnIcon = (0, react_1.memo)((0, react_1.forwardRef)(function EyeOnIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "eye-on" }, props));
}));
