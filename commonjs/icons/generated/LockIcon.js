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
exports.LockIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M13.96 7H12V3.95C12 1.77 10.21 0 8 0S4 1.77 4 3.95V7H1.96c-.55 0-.96.35-.96.9v6.91c0 .54.41 1.19.96 1.19h12c.55 0 1.04-.65 1.04-1.19V7.9c0-.55-.49-.9-1.04-.9zM6 7V3.95c0-1.09.9-1.97 2-1.97s2 .88 2 1.97V7H6z'
];
const svgPaths20 = [
    'M15.93 9H14V4.99c0-2.21-1.79-4-4-4s-4 1.79-4 4V9H3.93c-.55 0-.93.44-.93.99v8c0 .55.38 1.01.93 1.01h12c.55 0 1.07-.46 1.07-1.01v-8c0-.55-.52-.99-1.07-.99zM8 9V4.99c0-1.1.9-2 2-2s2 .9 2 2V9H8z'
];
exports.LockIcon = (0, react_1.memo)((0, react_1.forwardRef)(function LockIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "lock" }, props));
}));
