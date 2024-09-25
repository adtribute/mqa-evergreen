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
exports.SendToGraphIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M6 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm8 .5c-.56 0-1.06.23-1.42.59l-2.13-1.24L8.99 8l3.59-2.09A2.002 2.002 0 0016 4.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .19.03.37.08.54L8.5 7.13v-3.2c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v3.2l-.88-.52-2.7-1.57c.05-.17.08-.35.08-.54 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.56 0 1.06-.23 1.42-.59l2.13 1.24 3.84 2.24 2.7 1.57c-.06.17-.09.35-.09.54 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
];
const svgPaths20 = [
    'M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm10 2c-.53 0-1.01.21-1.37.55L11.9 10.6c.06-.19.1-.39.1-.6 0-.21-.04-.41-.1-.6l4.72-2.95c.37.34.85.55 1.38.55 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .21.04.41.1.6l-4.73 2.96c-.24-.23-.54-.4-.87-.48V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.33.09-.63.26-.87.48L7.6 7.91 5.42 6.55 3.9 5.6c.06-.19.1-.39.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.53 0 1.01-.21 1.37-.55L9 9.96V10h.06L12 11.84l.4.25 1.51.94 2.19 1.37c-.06.19-.1.39-.1.6 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zm-7-2.96l-.06-.04H11v.04z'
];
exports.SendToGraphIcon = (0, react_1.memo)((0, react_1.forwardRef)(function SendToGraphIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "send-to-graph" }, props));
}));
