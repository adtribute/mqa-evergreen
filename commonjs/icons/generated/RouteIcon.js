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
exports.RouteIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M11.669 5.066l.099.189c.113.213.236.434.367.661.226.39.468.78.709 1.151l-.198-.004-.48-.004c-1.745.003-2.369.233-2.369.688 0 .053.226.19 1.038.436l.84.24C13.9 9.064 15 9.83 15 11.63c0 2.123-1.607 3.122-4.027 3.366-.651.065-1.266.075-2.043.05l-.958-.035H5.196l.268-.406c.336-.517.672-1.052.998-1.593h1.636l.572.023c.857.036 1.475.034 2.103-.03 1.526-.153 2.227-.59 2.227-1.375 0-.531-.402-.84-1.66-1.22l-.691-.198c-1.04-.293-1.764-.562-2.222-.946C8.8 8.366 9 7.612 9 6.997a5.03 5.03 0 00-.184-1.334c.645-.395 1.598-.562 2.853-.597zM4 3a4.007 4.007 0 014 3.997C8 9.21 4 15 4 15l-.416-.62C2.56 12.827 0 8.767 0 6.997A4.002 4.002 0 014 3zm0 2a2 2 0 10.001 4.001A2 2 0 004 5zm10-4c1.103 0 1.996.896 2 1.999C16 4.105 14 7 14 7l-.293-.44C13.15 5.707 12 3.838 12 2.999 12 1.896 12.897 1 14 1z'
];
const svgPaths20 = [
    'M14.028 6.016c.146.275.31.57.485.872.304.524.628 1.047.952 1.545l.118.178-.208-.006-.577-.005c-2.093.004-2.841.303-2.841.895 0 .069.271.248 1.245.567l1.008.313c2.671.831 3.99 1.827 3.99 4.167 0 2.76-1.928 4.059-4.832 4.376-.782.085-1.52.098-2.452.066l-1.15-.046H6.221l.535-.811a67.46 67.46 0 001.122-1.787h2.04l.686.03c1.028.046 1.77.043 2.523-.039 1.832-.2 2.673-.767 2.673-1.789 0-.69-.483-1.09-1.992-1.585l-.83-.257c-1.192-.364-2.037-.7-2.59-1.165.399-1 .612-1.844.612-2.538a6.018 6.018 0 00-.382-2.098c.745-.573 1.884-.822 3.41-.883zM5 4.2c2.648 0 4.791 2.151 4.8 4.797C9.8 11.652 5 18.6 5 18.6l-.5-.744C3.273 15.993.2 11.121.2 8.997A4.802 4.802 0 015 4.2zm0 2.4a2.4 2.4 0 10.002 4.802A2.4 2.4 0 005 6.6zM17 .333a2.671 2.671 0 012.667 2.665C19.667 4.473 17 8.333 17 8.333l-.391-.587c-.741-1.137-2.276-3.629-2.276-4.748A2.668 2.668 0 0117 .333z'
];
exports.RouteIcon = (0, react_1.memo)((0, react_1.forwardRef)(function RouteIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "route" }, props));
}));
