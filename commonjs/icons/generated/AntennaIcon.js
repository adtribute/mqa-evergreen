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
exports.AntennaIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M2.673 10.758a1.396 1.396 0 01.093.234c.127.442.012.932-.362 1.212-.441.332-1.075.246-1.349-.233a8 8 0 1114.014-.225c-.259.488-.889.594-1.341.277-.382-.269-.513-.755-.4-1.2a1.259 1.259 0 01.085-.238 6 6 0 10-10.74.173zm2.464-1.862a1.783 1.783 0 01.076.404c.03.415-.096.831-.43 1.078-.444.328-1.08.237-1.314-.264a5.003 5.003 0 01-.24-.62l-.004-.011a5 5 0 119.574-.08l-.003.011c-.063.213-.14.422-.23.625-.226.504-.861.606-1.31.285-.338-.241-.47-.654-.448-1.07a1.737 1.737 0 01.07-.405 2.99 2.99 0 00-.216-2.233 3 3 0 00-5.525 2.28zM8 7a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414L8 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L7 11.586V8a1 1 0 011-1z'
];
const svgPaths20 = [
    'M2.01 10.758a8.025 8.025 0 001.01 3.204l.02.035c.034.058.061.117.084.178.163.44.054.951-.33 1.239-.435.328-1.059.242-1.342-.224a9.797 9.797 0 01-.221-.383 10 10 0 1117.48.106c-.269.474-.89.58-1.335.267-.392-.275-.518-.783-.37-1.228a1.19 1.19 0 01.078-.18l.019-.036A8.026 8.026 0 102.01 10.758zm4.272.772a1.464 1.464 0 01.091.32c.07.425-.052.87-.402 1.128-.44.325-1.068.235-1.316-.252a6 6 0 1110.734-.09c-.24.492-.867.593-1.312.275-.354-.253-.483-.695-.42-1.122a1.462 1.462 0 01.085-.321 4.021 4.021 0 00-5.87-4.878 4.02 4.02 0 00-1.59 4.94zm4.712 2.583A.999.999 0 0011 14v-4a1 1 0 10-2 0v4c0 .038.002.076.006.113l-3.753 4.223a1 1 0 001.494 1.328L10 16.005l3.252 3.66a1 1 0 101.495-1.33l-3.753-4.222z'
];
exports.AntennaIcon = (0, react_1.memo)((0, react_1.forwardRef)(function AntennaIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "antenna" }, props));
}));