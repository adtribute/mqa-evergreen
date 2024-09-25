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
exports.NotificationsSnoozeIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M9 14c0 1.1-.9 2-2 2s-2-.9-2-2zM7 0c.404 0 .755.243.912.59L7.9.6c-.7.6-.9 1.36-.9 1.9 0 .8.267 1.433.8 1.9-.533.6-.795 1.222-.784 1.867l.004.358A2.8 2.8 0 009.82 9.4L12 9.399V10c0 .51.388.935.884.993L13 11c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V6c0-2.43 1.73-4.45 4.02-4.9L6 1c0-.55.45-1 1-1z',
    'M13 6.702a.632.632 0 00-.632-.632h-1.743l2.208-2.734A.75.75 0 0013 2.864v-.3A.565.565 0 0012.435 2H9.561a.561.561 0 100 1.123h1.814L9.221 5.795A1 1 0 009 6.423v.279c0 .349.283.631.632.631h2.736A.632.632 0 0013 6.702z'
];
const svgPaths20 = [
    'M10 18c0 1.1-.9 2-2 2s-2-.9-2-2zM8 0c.476 0 .914.168 1.258.448C8.508.878 8.09 1.562 8 2.5c-.133 1.4.4 2.367 1.6 2.9C8.533 6.6 8 7.467 8 8v1.2a2.8 2.8 0 002.8 2.8H14v2c0 .51.388.935.884.993L15 15c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V8c0-2.61 1.67-4.81 4-5.63V2c0-1.1.9-2 2-2z',
    'M16 9.25v-.395a.75.75 0 00-.75-.75h-2.813L15.834 3.9A.75.75 0 0016 3.43v-.68a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.184c0 .414.336.75.75.75h2.813L10.22 7.831a1 1 0 00-.221.627v.792c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75z'
];
exports.NotificationsSnoozeIcon = (0, react_1.memo)((0, react_1.forwardRef)(function NotificationsSnoozeIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "notifications-snooze" }, props));
}));
