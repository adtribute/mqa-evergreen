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
exports.ClipIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M0 1a1 1 0 011-1h4a1 1 0 010 2H2v3a1 1 0 01-2 0V1zm1 15a1 1 0 01-1-1v-4a1 1 0 112 0v3h3a1 1 0 110 2H1zm14 0a1 1 0 001-1v-4a1 1 0 10-2 0v3h-3a1 1 0 100 2h4zm0-16a1 1 0 011 1v4a1 1 0 11-2 0V2h-3a1 1 0 110-2h4zM8 11a3 3 0 100-6 3 3 0 000 6z'
];
const svgPaths20 = [
    'M0 1a1 1 0 011-1h5a1 1 0 010 2H2v4a1 1 0 01-2 0V1zm1 19a1 1 0 01-1-1v-5a1 1 0 112 0v4h4a1 1 0 110 2H1zm18 0a1 1 0 001-1v-5a1 1 0 10-2 0v4h-4a1 1 0 100 2h5zm0-20a1 1 0 011 1v5a1 1 0 11-2 0V2h-4a1 1 0 110-2h5zm-9 14a4 4 0 100-8 4 4 0 000 8z'
];
exports.ClipIcon = (0, react_1.memo)((0, react_1.forwardRef)(function ClipIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "clip" }, props));
}));
