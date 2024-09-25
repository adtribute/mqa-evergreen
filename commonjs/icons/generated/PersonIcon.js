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
exports.PersonIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M15.68 14.32c-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15A3.671 3.671 0 0010.32.72C9.68.25 8.79-.01 8-.01c-.79 0-1.68.25-2.31.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.17 1.51-.17 2.15v.08c-.24.09-.45.32-.5.83-.03.38.13.72.2.86.08.35.28.72.63.78.04.17.09.33.15.49 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.37 1.59-1.48.65-3.7 1.35-4.16 2.4-.46 1.05-.27 1.67-.27 1.67h15.92c-.01.01.18-.61-.28-1.66z'
];
const svgPaths20 = [
    'M19.61 17.91c-.57-1.32-3.35-2.19-5.19-3.01-1.85-.82-1.59-1.31-1.66-1.99-.01-.09-.01-.19-.02-.29.63-.56 1.15-1.33 1.49-2.22 0 0 .02-.05.02-.06.07-.19.13-.39.19-.6.42-.09.67-.55.76-.98.1-.17.29-.6.25-1.08-.06-.62-.31-.91-.59-1.03v-.11c0-.79-.07-1.93-.22-2.68A4.55 4.55 0 0012.9.92C12.11.32 11 0 10.01 0s-2.1.32-2.89.92a4.55 4.55 0 00-1.74 2.94c-.14.75-.22 1.89-.22 2.68v.1c-.29.11-.55.4-.61 1.04-.04.48.15.91.25 1.08.1.44.35.91.79.98.05.21.12.41.19.6 0 .01.01.03.01.04l.01.02c.34.91.87 1.69 1.52 2.25 0 .09-.01.18-.02.26-.07.68.13 1.17-1.72 1.99S.96 16.59.39 17.91C-.18 19.23.05 20 .05 20h19.9s.23-.77-.34-2.09z'
];
exports.PersonIcon = (0, react_1.memo)((0, react_1.forwardRef)(function PersonIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "person" }, props));
}));
