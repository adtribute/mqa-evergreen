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
exports.RocketIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M6 12C4.397 7.46 4.415 4.465 8 0c3.585 4.485 3.602 7.48 2 12H6zm3-7a1 1 0 11-2 0 1 1 0 012 0zm-7 8.022l3-1-.054-.158C4.636 10.954 4.076 9.317 4 8L3 9l-1 4.022zm9-1l3 1L13 9l-1-1c-.076 1.317-.635 2.954-.946 3.864l-.054.158zM7 13h2c0 1.5-.5 2.5-1 3-.5-.5-1-1.5-1-3z'
];
const svgPaths20 = [
    'M7 7.5c0-3 1.857-6.25 3-7.5 1.143 1.25 3 4.5 3 7.5s-.714 6.25-1 7.5H8c-.286-1.25-1-4.5-1-7.5zm6.84 2.5c-.139 1.62-.47 3.405-.84 5.01l4 .99-1-4-2.16-2zm-4.832 6C9 16.139 9 16.284 9 16.429 9 17.143 9 17.5 10 20c1-2.5 1-2.857 1-3.571 0-.145 0-.29-.008-.429H9.008zM7 15.011c-.37-1.605-.701-3.39-.84-5.011L4 12l-1 4 4-.989zM10 5a1 1 0 100 2 1 1 0 000-2z'
];
exports.RocketIcon = (0, react_1.memo)((0, react_1.forwardRef)(function RocketIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "rocket" }, props));
}));
