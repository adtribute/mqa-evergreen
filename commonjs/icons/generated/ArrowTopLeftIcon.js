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
exports.ArrowTopLeftIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M13.71 12.29L5.41 4H10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
];
const svgPaths20 = [
    'M17.71 16.29L5.41 4H13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5.41L16.29 17.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
];
exports.ArrowTopLeftIcon = (0, react_1.memo)((0, react_1.forwardRef)(function ArrowTopLeftIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "arrow-top-left" }, props));
}));