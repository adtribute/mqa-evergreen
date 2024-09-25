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
exports.ShipIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M5.44.804L5.2 2H3a1 1 0 00-1 1v3.714l-1.08.309a.988.988 0 00-.69 1.192c.366 1.432.897 3.324 1.309 4.26a.644.644 0 00.005.01c-.175.01-.356.015-.544.015a.5.5 0 000 1c2.067 0 3.414-.543 4.161-.917.55.373 1.505.917 2.839.917 1.32 0 2.27-.533 2.822-.905l.004.002c.196.105.48.24.856.374.75.268 1.857.529 3.318.529a.5.5 0 000-1c-.295 0-.572-.012-.834-.032a.995.995 0 00.308-.458l1.208-3.74a1 1 0 00-.677-1.269L14 6.714V3a1 1 0 00-1-1h-2.2L10.56.804A1 1 0 009.58 0H6.42a1 1 0 00-.98.804zM4 6.143l3-.857V4H4v2.143zm5-.857l3 .857V4H9v1.286zm-4.036 8.273a.5.5 0 01.527.034c.455.325 1.277.907 2.509.907s2.054-.582 2.51-.907a.5.5 0 01.579-.001l.006.004.036.023c.034.022.09.055.168.097.154.082.394.197.72.313.649.232 1.642.471 2.981.471a.5.5 0 010 1c-1.46 0-2.568-.261-3.318-.53a6.316 6.316 0 01-.856-.373l-.004-.002c-.552.372-1.502.905-2.822.905-1.334 0-2.289-.544-2.839-.917-.747.374-2.094.917-4.161.917a.5.5 0 010-1c2.129 0 3.384-.63 3.964-.94z'
];
const svgPaths20 = [
    'M6.84.804L6.5 2.5h-3a1 1 0 00-1 1v4.893l-1.58.451a.99.99 0 00-.691 1.192c.46 1.82 1.163 4.356 1.701 5.571-.218.012-.445.018-.68.018a.625.625 0 100 1.25c2.583 0 4.268-.68 5.202-1.146.687.466 1.88 1.146 3.548 1.146 1.65 0 2.837-.666 3.528-1.132l.005.003c.244.131.6.3 1.07.468.938.335 2.321.661 4.147.661a.625.625 0 100-1.25c-.323 0-.63-.011-.922-.031a.996.996 0 00.184-.334l1.67-5.168a1 1 0 00-.677-1.27l-1.505-.43V3.5a1 1 0 00-1-1h-3L13.16.804A1 1 0 0012.18 0H7.82a1 1 0 00-.98.804zM5 7.679l3.75-1.072V5H5v2.679zm6.25-1.072L15 7.68V5h-3.75v1.607zM6.205 16.95a.625.625 0 01.658.042c.569.407 1.597 1.134 3.137 1.134s2.568-.727 3.137-1.134a.625.625 0 01.724-.001l.007.005.045.029c.044.027.114.069.21.12.194.104.493.247.9.392.811.29 2.053.589 3.727.589a.625.625 0 110 1.25c-1.826 0-3.21-.326-4.148-.661a7.894 7.894 0 01-1.069-.468l-.005-.003c-.691.466-1.878 1.132-3.528 1.132-1.667 0-2.861-.68-3.548-1.146-.934.467-2.619 1.146-5.202 1.146a.625.625 0 110-1.25c2.66 0 4.23-.787 4.955-1.176z'
];
exports.ShipIcon = (0, react_1.memo)((0, react_1.forwardRef)(function ShipIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "ship" }, props));
}));
