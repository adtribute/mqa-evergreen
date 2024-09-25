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
exports.TargetIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M7 4a1 1 0 012 0v2a1 1 0 01-2 0V4zM10 7a1 1 0 000 2h2a1 1 0 000-2h-2zM3 8a1 1 0 011-1h2a1 1 0 010 2H4a1 1 0 01-1-1zM8 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z',
    'M8 16A8 8 0 108 0a8 8 0 000 16zm0-2A6 6 0 108 2a6 6 0 000 12z'
];
const svgPaths20 = [
    'M9 5a1 1 0 012 0v3a1 1 0 01-2 0V5zM12 9a1 1 0 000 2h3a1 1 0 000-2h-3zM4 10a1 1 0 011-1h3a1 1 0 010 2H5a1 1 0 01-1-1zM10 11a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z',
    'M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z'
];
exports.TargetIcon = (0, react_1.memo)((0, react_1.forwardRef)(function TargetIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "target" }, props));
}));
