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
exports.SearchAroundIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M13.5 11c-.51 0-.98.15-1.38.42l-2.4-2.41c.17-.3.28-.64.28-1.01s-.11-.71-.28-1.01l2.41-2.41c.39.27.86.42 1.37.42a2.5 2.5 0 000-5A2.5 2.5 0 0011 2.5c0 .51.15.98.42 1.38l-2.41 2.4C8.71 6.11 8.37 6 8 6s-.71.11-1.01.28l-2.41-2.4c.27-.4.42-.87.42-1.38a2.5 2.5 0 00-5 0A2.5 2.5 0 002.5 5c.51 0 .98-.15 1.38-.42l2.41 2.41C6.11 7.29 6 7.63 6 8s.11.71.28 1.01l-2.41 2.41c-.39-.27-.86-.42-1.37-.42a2.5 2.5 0 000 5A2.5 2.5 0 005 13.5c0-.51-.15-.98-.42-1.38l2.41-2.41c.3.18.64.29 1.01.29s.71-.11 1.01-.28l2.41 2.41c-.27.39-.42.86-.42 1.37a2.5 2.5 0 005 0 2.5 2.5 0 00-2.5-2.5zm0-10c.83 0 1.5.67 1.5 1.5S14.33 4 13.5 4 12 3.33 12 2.5 12.67 1 13.5 1zm-11 3C1.67 4 1 3.33 1 2.5S1.67 1 2.5 1 4 1.67 4 2.5 3.33 4 2.5 4zm0 11c-.83 0-1.5-.67-1.5-1.5S1.67 12 2.5 12s1.5.67 1.5 1.5S3.33 15 2.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
];
const svgPaths20 = [
    'M9.9 6.9a3 3 0 100 6 3 3 0 100-6zM3 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM10 10L5 5',
    'M5.379 4.671l5.02 5.02-.707.708-5.02-5.02zM10 10l5-5',
    'M14.621 4.671l.707.708-5.02 5.02-.707-.707z',
    'M10 10l5 5M10.379 9.671l5.02 5.02-.707.708-5.02-5.02z',
    'M10 10l-5 5M9.621 9.671l.707.708-5.02 5.02-.707-.707z'
];
exports.SearchAroundIcon = (0, react_1.memo)((0, react_1.forwardRef)(function SearchAroundIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "search-around" }, props));
}));
