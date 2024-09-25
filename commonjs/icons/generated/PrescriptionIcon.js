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
exports.PrescriptionIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M10.91 8.34c.14-.21.36-.34.63-.34h1.29c.22 0 .41.07.52.26.09.16.08.33-.04.53l-2.49 2.87 2.77 3.54c.12.17.14.37.02.55-.11.17-.3.25-.5.25h-1.44a.69.69 0 01-.61-.35L9.4 13.51l-1.69 2.15c-.13.21-.36.34-.63.34H5.8c-.22 0-.41-.07-.52-.26-.09-.16-.08-.33.04-.53l2.71-3.48L4.3 6.99H3.03v3.47c0 .33-.26.56-.62.56h-.8c-.35-.01-.61-.23-.61-.56V.56c0-.33.26-.56.62-.56h3.11c.62 0 1.19.08 1.7.24.51.16.96.39 1.34.69a3.194 3.194 0 011.21 2.53c0 .81-.25 1.5-.74 2.08-.37.44-.84.77-1.42 1.01L7.88 7.9c.04.04.07.08.08.1l1.49 1.9 1.46-1.56zM5.18 5c.62 0 1.08-.13 1.39-.37.29-.23.44-.71.44-1.16s-.15-.87-.44-1.1C6.26 2.12 5.8 2 5.18 2H2.99v3h2.19z'
];
const svgPaths20 = [
    'M13.95 10.23c.16-.18.22-.22.46-.22h1.48c.25 0 .47.08.59.33.1.2.09.41-.05.66l-2.71 3.58L16.88 19c.13.21.16.46.03.69-.12.21-.34.31-.57.31H14.7c-.31 0-.56-.17-.7-.44l-1.9-2.67-1.93 2.68c-.15.27-.42.43-.73.43H7.98c-.25 0-.47-.08-.59-.33-.1-.2-.09-.41.05-.66l3.09-4.35L6.26 9H5v4.32c0 .41-.3.69-.7.69H2.7c-.41 0-.7-.28-.7-.69V.69c0-.41.3-.69.7-.69h4.42c.71 0 1.36.1 1.94.3.59.2 1.11.49 1.54.87.44.38.78.84 1.02 1.39.24.54.36 1.14.36 1.78 0 1.01-.28 1.88-.84 2.6-.43.54-1.35 1.29-2 1.59l3.09 3.94 1.72-2.24zM6.71 6.04c.71 0 1.45-.16 1.81-.46.33-.28.5-.69.5-1.25s-.17-.97-.5-1.25c-.35-.3-1.1-.46-1.81-.46h-1.7v3.42h1.7z'
];
exports.PrescriptionIcon = (0, react_1.memo)((0, react_1.forwardRef)(function PrescriptionIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "prescription" }, props));
}));
