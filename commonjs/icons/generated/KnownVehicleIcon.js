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
exports.KnownVehicleIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M15 3a.997.997 0 00-.707.293L12 5.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a.997.997 0 001.414 0l3-3A1 1 0 0015 3zm-.879 6.121l-.007-.007c-.313.309-.69.552-1.114.702V10h-.998H12h-1v-.184c-.424-.15-.8-.395-1.112-.704l-.01.01-2-2 .012-.012A2.978 2.978 0 017.184 6H3c-.176 0-.06-.824 0-1l.73-1.63C3.79 3.192 3.823 3 4 3H7.78C8.328 2.39 9.115 2 10 2c.768 0 1.461.293 1.987.77l.844-.844c-.238-.244-.524-.442-.794-.524C12.037 1.402 10.72 1 8 1c-2.72 0-4.037.402-4.037.402-.508.155-1.078.711-1.268 1.237l-.763 2.117H.88c-.484 0-.88.423-.88.939s.396.939.88.939h.375L1 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.384 1 1 1s1-.343 1-1V9l-.003-.754-.876.875zM5.001 10H3V8h2v2z'
];
const svgPaths20 = [
    'M19 4a.997.997 0 00-.707.293L14 8.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a.997.997 0 001.414 0l5-5A1 1 0 0019 4zm-2.048 7.291c.011.072.048.134.048.209a1.5 1.5 0 01-1.5 1.5c-.225 0-.433-.057-.624-.145-.279.085-.57.145-.876.145a2.99 2.99 0 01-2.121-.879l-3-3 .007-.007A3.027 3.027 0 018.184 8H4V7l1-3h10l.19.568 1.307-1.308c-.336-.356-.758-.658-1.165-.772 0 0-1.74-.488-5.332-.488s-5.332.488-5.332.488c-.67.188-1.424.864-1.674 1.502L2.99 4H3L2 7H1a1 1 0 000 2h.333l-.28.84L1 10v7.5a1.5 1.5 0 103 0V17h12v.5a1.5 1.5 0 003 0V10l-.19-.568-1.858 1.86zM4.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
];
exports.KnownVehicleIcon = (0, react_1.memo)((0, react_1.forwardRef)(function KnownVehicleIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "known-vehicle" }, props));
}));
