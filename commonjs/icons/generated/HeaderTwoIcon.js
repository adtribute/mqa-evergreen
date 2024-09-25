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
exports.HeaderTwoIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M13.17 13.93c-.17.15-.33.29-.46.44-.13.16-.22.32-.27.49h3.55V16H11c.01-.65.16-1.22.44-1.71s.67-.91 1.17-1.27c.24-.18.49-.36.75-.54.25-.18.49-.36.71-.57.21-.2.39-.42.53-.65.14-.24.21-.51.22-.82 0-.14-.02-.29-.05-.45-.03-.16-.09-.31-.18-.45a1.13 1.13 0 00-.37-.35c-.16-.09-.37-.14-.63-.14-.24 0-.43.05-.59.15-.16.1-.29.24-.38.42-.1.17-.17.38-.21.62-.05.24-.07.5-.08.77h-1.19c0-.43.05-.83.16-1.2s.27-.69.49-.96c.21-.25.48-.46.79-.62.31-.15.67-.23 1.07-.23.45 0 .82.08 1.11.23.3.16.55.36.73.6.19.24.32.5.39.79.08.28.12.54.12.79 0 .31-.04.6-.13.85s-.22.49-.37.7c-.15.21-.32.41-.52.59s-.4.35-.61.51l-.63.45c-.21.14-.39.28-.57.42zM0 1c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zm6 0c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zM2 5h4v2H2V5z'
];
const svgPaths20 = [
    'M16.6 17.41c-.22.17-.4.36-.56.55-.16.19-.27.4-.33.61h4.28V20H14c.01-.81.18-1.52.53-2.13.35-.6.81-1.13 1.41-1.58.28-.23.58-.46.89-.68.31-.22.59-.46.85-.71.26-.26.48-.53.63-.83.16-.3.25-.64.26-1.02 0-.18-.02-.37-.06-.57-.04-.2-.11-.39-.22-.56s-.26-.31-.45-.43-.44-.18-.75-.18c-.28 0-.52.06-.71.19s-.34.3-.45.52c-.11.22-.2.48-.25.78-.05.3-.08.62-.09.97h-1.43c0-.54.07-1.04.2-1.5.13-.47.32-.87.58-1.2.26-.34.58-.6.95-.78.37-.19.81-.29 1.3-.29.54 0 .99.09 1.35.29.36.19.65.44.87.74.22.29.38.62.47.97.09.35.14.68.14 1 0 .4-.05.75-.16 1.07-.11.32-.26.61-.44.88-.19.27-.4.52-.63.74-.24.22-.48.43-.73.63s-.5.38-.75.56c-.26.17-.5.35-.71.53zM10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1z'
];
exports.HeaderTwoIcon = (0, react_1.memo)((0, react_1.forwardRef)(function HeaderTwoIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "header-two" }, props));
}));
