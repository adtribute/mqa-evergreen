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
exports.StrikethroughIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M14 7H8.65c-.38-.09-.73-.18-1.04-.26-.31-.08-.49-.13-.54-.14-.43-.11-.79-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72s.32-.34.54-.46c.22-.11.46-.19.72-.24.26-.05.52-.07.77-.07.74 0 1.36.15 1.84.46.32.2.55.5.68.9h2.22c-.06-.33-.17-.64-.32-.92-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7S8.59 2 7.95 2c-.55 0-1.1.07-1.63.2-.54.13-1.02.34-1.45.62-.42.28-.76.63-1.02 1.05-.26.42-.39.92-.39 1.5 0 .3.04.59.13.88.08.26.21.51.39.75H2c-.55 0-1 .45-1 1s.45 1 1 1h7.13c.25.07.49.14.71.22.25.09.48.23.7.44.21.21.32.53.32.97 0 .21-.05.43-.14.63-.09.21-.24.39-.45.55-.21.16-.48.29-.81.39-.33.1-.73.15-1.2.15-.44 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.01 0-.01-.01-.02-.02H3.14a3.68 3.68 0 001.39 2.03c.46.34 1 .58 1.62.74.61.15 1.27.23 1.97.23.61 0 1.2-.07 1.79-.2.58-.13 1.11-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.3-.05-.6-.15-.9-.05-.19-.13-.36-.22-.52H14c.55 0 1-.45 1-1s-.45-1-1-1z'
];
const svgPaths20 = [
    'M18 9h-4.46a4.7 4.7 0 00-.4-.14c-.19-.05-.51-.14-.96-.25-.45-.11-.9-.23-1.37-.35-.47-.12-.89-.23-1.27-.33s-.6-.16-.65-.17c-.53-.15-.95-.37-1.27-.66-.32-.28-.49-.68-.49-1.19 0-.36.09-.66.26-.9s.39-.43.65-.57c.26-.14.55-.24.87-.3s.63-.09.93-.09c.89 0 1.63.19 2.21.57.45.3.75.76.89 1.38h2.63c-.06-.52-.2-.98-.42-1.4-.3-.57-.71-1.05-1.23-1.43a5.33 5.33 0 00-1.79-.87c-.7-.2-1.42-.3-2.19-.3-.66 0-1.31.08-1.96.25s-1.22.43-1.73.77-.92.79-1.23 1.32c-.31.52-.46 1.15-.46 1.87 0 .37.05.74.15 1.1.1.36.28.7.53 1.02.18.24.41.47.69.67H2c-.55 0-1 .45-1 1s.45 1 1 1h10.14c.02.01.05.02.07.02.3.11.58.29.84.55.25.26.38.67.38 1.21 0 .27-.06.53-.17.79-.11.26-.29.49-.54.69-.25.2-.57.36-.97.49s-.88.19-1.44.19c-.52 0-1.01-.06-1.45-.17-.45-.11-.84-.29-1.19-.54s-.61-.56-.8-.95c-.05-.08-.09-.18-.12-.28H4.11c.09.43.22.82.4 1.18.33.65.77 1.18 1.32 1.59.55.41 1.2.72 1.94.92.74.2 1.53.3 2.37.3.73 0 1.44-.08 2.14-.25.7-.17 1.33-.43 1.88-.79.55-.36.99-.83 1.33-1.39.34-.56.51-1.25.51-2.05 0-.37-.06-.75-.18-1.12a3.12 3.12 0 00-.15-.39H18c.55 0 1-.45 1-1s-.45-1-1-1z'
];
exports.StrikethroughIcon = (0, react_1.memo)((0, react_1.forwardRef)(function StrikethroughIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "strikethrough" }, props));
}));
