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
exports.BlockedPersonIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M9.39 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.07-.01-.13-.02-.2.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.13-.39.27-.06.43-.36.5-.63.01-.03.03-.08.05-.12C8.18 7.8 6.94 6.04 6.94 4c0-.32.04-.62.09-.92-.17-.03-.35-.08-.51-.08-.65 0-1.37.2-1.88.59-.5.38-.87.92-1.05 1.51-.04.14-.07.27-.09.41-.09.48-.14 1.23-.14 1.74v.06c-.19.08-.36.27-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.12 15.5.03 16 .03 16h12.96s.15-.5-.22-1.36c-.37-.85-2.18-1.42-3.38-1.95zM11.97 0C9.75 0 7.94 1.79 7.94 4s1.8 4 4.03 4S16 6.21 16 4s-1.8-4-4.03-4zM9.96 4c0-1.1.9-2 2.01-2 .37 0 .72.11 1.02.28l-2.75 2.73c-.17-.3-.28-.64-.28-1.01zm2.01 2c-.37 0-.72-.11-1.02-.28l2.75-2.73c.18.3.28.64.28 1.01.01 1.1-.9 2-2.01 2z'
];
const svgPaths20 = [
    'M11.55 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.06-.11.14-.35.17-.62C10.33 9.42 8.92 7.38 8.92 5c0-.3.05-.58.09-.87-.33-.08-.67-.13-.99-.13-.79 0-1.68.25-2.31.73-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.17 1.51-.17 2.14v.08c-.24.09-.45.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59C3 16.56.77 17.26.32 18.31-.15 19.38.04 20 .04 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.69-1.75-4.17-2.41zM14.97 0c-2.78 0-5.03 2.24-5.03 5s2.25 5 5.03 5S20 7.76 20 5s-2.25-5-5.03-5zm-3.03 5c0-1.66 1.35-3 3.02-3 .47 0 .9.11 1.29.3l-4.01 3.99c-.18-.4-.3-.83-.3-1.29zm3.03 3c-.47 0-.9-.11-1.29-.3l4.01-3.99c.19.39.3.82.3 1.29 0 1.66-1.36 3-3.02 3z'
];
exports.BlockedPersonIcon = (0, react_1.memo)((0, react_1.forwardRef)(function BlockedPersonIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "blocked-person" }, props));
}));
