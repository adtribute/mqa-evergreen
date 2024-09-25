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
exports.ManyToOneIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M3 2a1 1 0 100 2 1 1 0 000-2zm0-2c1.385 0 2.551.94 2.896 2.215.168.044.34.096.51.158 1.076.394 2.237 1.242 2.575 2.93.161.809.664 1.211 1.293 1.443a3 3 0 110 2.508c-.629.232-1.132.634-1.293 1.442-.338 1.69-1.499 2.537-2.575 2.93a5.436 5.436 0 01-.51.159A3.001 3.001 0 010 13a3 3 0 015.726-1.254c.629-.232 1.132-.634 1.293-1.442.216-1.076.765-1.81 1.413-2.304-.648-.493-1.197-1.228-1.413-2.304-.161-.808-.664-1.21-1.293-1.442A3 3 0 113 0zm1 13a1 1 0 10-2 0 1 1 0 002 0zm8-5a1 1 0 102 0 1 1 0 00-2 0z'
];
const svgPaths20 = [
    'M3 2a1 1 0 100 2 1 1 0 000-2zm0 4c1.296 0 2.4-.821 2.82-1.972.487.039 1.086.13 1.667.347.947.352 1.773 1 2.032 2.318.323 1.644 1.234 2.675 2.264 3.307-1.03.632-1.941 1.663-2.264 3.307-.259 1.318-1.085 1.966-2.032 2.318a6.244 6.244 0 01-1.668.347 3.001 3.001 0 10.019 2.004c.633-.042 1.491-.158 2.347-.476 1.402-.523 2.867-1.625 3.296-3.807.259-1.318 1.085-1.966 2.032-2.318.24-.09.484-.158.722-.21a3 3 0 100-2.33 5.329 5.329 0 01-.722-.21c-.947-.352-1.773-1-2.032-2.318-.428-2.182-1.894-3.284-3.296-3.807-.856-.318-1.714-.434-2.347-.476A3.001 3.001 0 000 3a3 3 0 003 3zm13 4a1 1 0 102 0 1 1 0 00-2 0zM2 17a1 1 0 112 0 1 1 0 01-2 0z'
];
exports.ManyToOneIcon = (0, react_1.memo)((0, react_1.forwardRef)(function ManyToOneIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "many-to-one" }, props));
}));
