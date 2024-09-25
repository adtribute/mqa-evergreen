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
exports.SocialMediaIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M9.5 4c.4 0 .8-.1 1.1-.3C12 4.5 12.9 6 13 7.6c0 .5.5.9 1 .9.6 0 1-.4 1-1v-.2c-.2-2.4-1.5-4.4-3.5-5.5-.1-1-.9-1.8-2-1.8s-2 .9-2 2 .9 2 2 2zM4 8.5c0-.7-.4-1.3-.9-1.7.3-1.4 1.2-2.6 2.5-3.3.3-.1.6-.4.6-.9s-.4-1-1-1c-.2 0-.3 0-.5.1-1.9 1-3.2 2.8-3.6 5C.4 7.1 0 7.8 0 8.5c0 1.1.9 2 2 2s2-.9 2-2zm8.8 1.2c-1.1 0-2 .9-2 2v.3c-.8.6-1.8.9-2.8.9-1.2 0-2.3-.4-3.2-1.1-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.6.3.8C4.6 14.4 6.2 15 8 15c1.5 0 3-.5 4.1-1.3.2.1.5.1.7.1 1.1 0 2-.9 2-2s-.9-2.1-2-2.1z'
];
const svgPaths20 = [
    'M11.5 5c.8 0 1.6-.4 2-1 2 1.2 3.3 3.3 3.5 5.7 0 .5.5.9 1 .9.6 0 1-.5 1-1v-.1c-.2-3.3-2.2-6.2-5.1-7.6C13.7.8 12.7 0 11.5 0 10.1 0 9 1.1 9 2.5S10.1 5 11.5 5zm5 7c-1.4 0-2.5 1.1-2.5 2.5 0 .4.1.7.2 1.1-1.1.9-2.6 1.4-4.2 1.4-1.9 0-3.6-.8-4.9-2-.2-.2-.5-.4-.8-.4-.5 0-1 .5-1 1 0 .3.1.5.3.7C5.3 18 7.5 19 10 19c2.2 0 4.2-.8 5.8-2.1.2.1.5.1.7.1 1.4 0 2.5-1.1 2.5-2.5S17.9 12 16.5 12zM5 10.5c0-1.1-.7-2.1-1.7-2.4.5-1.9 1.9-3.5 3.6-4.4.3-.2.6-.5.6-.9 0-.5-.4-1-1-1-.2 0-.4.1-.6.2-2.4 1.2-4.2 3.6-4.7 6.4C.5 8.9 0 9.6 0 10.5 0 11.9 1.1 13 2.5 13S5 11.9 5 10.5z'
];
exports.SocialMediaIcon = (0, react_1.memo)((0, react_1.forwardRef)(function SocialMediaIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "social-media" }, props));
}));
