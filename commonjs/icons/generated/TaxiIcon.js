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
exports.TaxiIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M15.12 6.63h-.38L15 7c-.01.3-.01.64 0 .98V8c0 .07-.03.13-.04.19h.02L14 13.1v.9c0 .55-.45 1-1 1s-1-.45-1-1v-1H4v1c0 .55-.45 1-1 1s-1-.45-1-1v-.9l-.98-4.9h.02C1.03 8.13 1 8.07 1 8H.99c0-.33 0-.67.01-1l.26-.37H.88C.4 6.63 0 6.21 0 5.69s.4-.94.88-.94h1.05l.77-2.11c.19-.53.76-1.08 1.26-1.24 0 0 .68-.2 2.05-.32C6.01 1.05 6 1.03 6 1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1 0 .03-.01.05-.02.08 1.37.12 2.05.32 2.05.32.51.15 1.08.71 1.27 1.24l.76 2.12h1.05c.49 0 .89.42.89.93 0 .52-.4.94-.88.94zM11 10h2V8h-2v2zm-8 0h2V8H3v2zm10-5l-.73-1.63C12.21 3.19 12.18 3 12 3H4c-.18 0-.21.19-.27.37L3 5c-.06.18-.18 1 0 1h10c.18 0 .06-.82 0-1z'
];
const svgPaths20 = [
    'M19 9h-.33l.33 1v.5c0 .15-.03.3-.07.44h.01L17 17.23v.27c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V17H6v.5c0 .83-.67 1.5-1.5 1.5S3 18.33 3 17.5v-.27l-1.93-6.28h.01c-.05-.15-.08-.3-.08-.45V10s.02-.06.05-.16c.06-.17.16-.47.28-.84H1c-.55 0-1-.45-1-1s.45-1 1-1h1l1-3h-.01v-.01c.25-.64 1-1.31 1.67-1.5 0 0 .78-.21 2.33-.36V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.13c1.55.14 2.33.36 2.33.36.67.19 1.42.86 1.67 1.5V4H17l1 3h1c.55 0 1 .45 1 1s-.45 1-1 1zM3 11.5c0 .83.67 1.5 1.5 1.5S6 12.33 6 11.5 5.33 10 4.5 10 3 10.67 3 11.5zM16 7l-1-3H5L4 7v1h12V7zm-.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'
];
exports.TaxiIcon = (0, react_1.memo)((0, react_1.forwardRef)(function TaxiIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "taxi" }, props));
}));
