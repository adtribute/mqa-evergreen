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
exports.GridViewIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M0 1v6h7V0H1C.45 0 0 .45 0 1zm0 14c0 .55.45 1 1 1h6V9H0v6zM15 0H9v7h7V1c0-.55-.45-1-1-1zM9 16h6c.55 0 1-.45 1-1V9H9v7z'
];
const svgPaths20 = [
    'M0 19c0 .55.45 1 1 1h8v-9H0v8zM0 1v8h9V0H1C.45 0 0 .45 0 1zm19-1h-8v9h9V1c0-.55-.45-1-1-1zm-8 20h8c.55 0 1-.45 1-1v-8h-9v9z'
];
exports.GridViewIcon = (0, react_1.memo)((0, react_1.forwardRef)(function GridViewIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "grid-view" }, props));
}));
