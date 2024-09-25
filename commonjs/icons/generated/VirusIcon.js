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
exports.VirusIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M11.918 11.107l.737.737.052-.051A1 1 0 0114.2 13.12l-.078.087-1.414 1.414a1 1 0 01-1.492-1.327l.029-.033-.863-.863c-.426.231-.89.402-1.38.502L9 14l.117.007A1 1 0 019 16H7l-.117-.007A1 1 0 017 14v-1.1a4.967 4.967 0 01-1.447-.539l-.846.846.078.087a1 1 0 01-1.492 1.327l-1.414-1.414-.078-.087a1 1 0 011.492-1.327l.744-.744A4.986 4.986 0 013.23 9.5H2a1 1 0 01-1.993.117L0 9.5v-2a1 1 0 011.993-.117L2 7.5h1.025a4.973 4.973 0 01.905-2.405l-.512-.513-.125.125A1 1 0 011.8 3.38l.078-.087 1.414-1.414a1 1 0 011.529 1.277l.573.575a4.969 4.969 0 011.604-.63V2l-.116-.007a1 1 0 010-1.986L7 0h2a1 1 0 01.117 1.993L9 2l.001 1.1c.639.13 1.233.381 1.757.73l.535-.537-.078-.087a1 1 0 011.492-1.327l1.414 1.414.078.087a1 1 0 01-1.492 1.327l-.535.536a4.97 4.97 0 01.803 2.257H14l.007-.117A1 1 0 0116 7.5v2l-.007.117A1 1 0 0114 9.5h-1.229a4.987 4.987 0 01-.853 1.607zM10 9a1 1 0 100 2 1 1 0 000-2zM6.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
];
const svgPaths20 = [
    'M15.249 13.835l1.251 1.251.354-.354.087-.077a1 1 0 011.327 1.491l-2.122 2.122-.087.077a1 1 0 01-1.327-1.491l.354-.354-1.251-1.251A6.466 6.466 0 0111 16.424L10.999 18h.501a1 1 0 01.117 1.993L11.5 20h-3a1 1 0 01-.117-1.993L8.5 18h.499v-1.577a6.46 6.46 0 01-2.538-.97L5.414 16.5l.354.354a1 1 0 01-1.327 1.491l-.087-.077-2.122-2.122a1 1 0 011.327-1.491l.087.077.354.354.97-.97a6.472 6.472 0 01-1.384-3.057l-.025.002L2 11.06v.44a1 1 0 01-1.993.117L0 11.5v-3a1 1 0 011.993-.117L2 8.5v.56h1.567A6.471 6.471 0 014.97 5.883l-.971-.969-.353.354-.087.077a1 1 0 01-1.327-1.491l2.122-2.122.087-.077a1 1 0 011.327 1.491l-.354.353 1.047 1.048A6.46 6.46 0 019 3.577L9 2h-.5A1 1 0 018.383.007L8.5 0h3a1 1 0 01.117 1.993L11.5 2H11v1.577a6.466 6.466 0 012.838 1.176l.04-.046L15.086 3.5l-.353-.353a1 1 0 011.327-1.491l.087.077 2.122 2.122a1 1 0 01-1.327 1.491l-.087-.077-.354-.354-1.207 1.207-.046.041a6.467 6.467 0 011.16 2.733H18V8.5a1 1 0 011.993-.117L20 8.5v3a1 1 0 01-1.993.117L18 11.5v-.605h-1.561a6.466 6.466 0 01-1.19 2.94zM12.5 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 6a2 2 0 100 4 2 2 0 000-4z'
];
exports.VirusIcon = (0, react_1.memo)((0, react_1.forwardRef)(function VirusIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "virus" }, props));
}));
