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
exports.InboxSearchIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M5.639 2a5.391 5.391 0 00-.144 2H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6V9c0-.088.012-.174.033-.255.12-.007.238-.019.39-.038.154-.008.252-.03.442-.077a5.34 5.34 0 00.24-.05h.05l.122-.04 1.266 1.271c.425.47 1.116.769 1.847.769.21 0 .414-.025.61-.071V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h2.639zM15.82 7.53c.1.12.17.27.18.44 0 .34-.27.61-.61.61a.57.57 0 01-.43-.18l-2.24-2.25c-.13.08-.26.16-.4.23-.02.01-.05.02-.07.03-.14.06-.27.12-.42.17h-.01c-.14.05-.29.08-.44.11-.04.01-.08.02-.11.02-.15.02-.3.04-.46.04-1.85 0-3.35-1.51-3.35-3.37S8.96.01 10.81 0c1.85 0 3.35 1.51 3.35 3.37 0 .16-.02.31-.04.47-.01.04-.01.07-.02.11-.02.15-.05.29-.1.44v.01c-.05.15-.11.28-.17.42-.01.02-.02.05-.03.07-.07.14-.14.27-.23.4l2.25 2.24zm-5.01-1.94c1.22 0 2.21-.99 2.21-2.22 0-1.23-.99-2.22-2.21-2.22S8.6 2.14 8.6 3.37c0 1.22.99 2.22 2.21 2.22z'
];
const svgPaths20 = [
    'M7.136 3a6.327 6.327 0 00-.098 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h1.076l1.14 1.14a2.767 2.767 0 001.974.806c.282 0 .554-.042.81-.12V17c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h3.136zm3.244 1.33c0 1.62 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93-1.31-2.93-2.93-2.93-2.93 1.31-2.93 2.93zm6.47 2.43l2.89 2.85c.13.15.22.35.23.56 0 .43-.35.78-.78.78-.23 0-.42-.08-.56-.22l-2.87-2.87c-.17.1-.33.2-.51.29-.03.01-.06.03-.09.04-.18.07-.35.15-.55.21-.19.06-.37.11-.57.14-.05.01-.1.02-.14.02-.2.03-.39.05-.6.05A4.3 4.3 0 019 4.31C9 1.93 10.93.01 13.3 0c2.37 0 4.3 1.93 4.3 4.3 0 .21-.02.4-.05.6-.01.05-.01.09-.02.14-.04.2-.08.38-.14.58-.05.19-.13.36-.21.54-.01.03-.03.06-.04.09-.08.18-.18.34-.29.51z'
];
exports.InboxSearchIcon = (0, react_1.memo)((0, react_1.forwardRef)(function InboxSearchIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "inbox-search" }, props));
}));
