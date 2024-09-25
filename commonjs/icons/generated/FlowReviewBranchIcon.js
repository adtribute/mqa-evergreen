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
exports.FlowReviewBranchIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M10.392 10.647A3.002 3.002 0 016.16 8.995H3.37l1.338 1.318c.172.178.287.41.282.683-.01.536-.524.995-.99.995-.465 0-.63-.187-.747-.294L.281 8.682A.956.956 0 010 7.994a.971.971 0 01.294-.687l3.01-3.028a.973.973 0 01.697-.27c.536.01.998.485.989 1.021a.971.971 0 01-.295.687L3.37 6.997h2.79a3.002 3.002 0 014.106-1.716l2.416-2.277-1.732.004a.99.99 0 01-.679-.329.978.978 0 01.05-1.378c.199-.186.459-.315.714-.3l4.012.005c.248.009.493.1.68.3.185.2.273.45.264.699L15.99 6.05a.973.973 0 01-.314.679 1.03 1.03 0 01-1.421-.048.971.971 0 01-.265-.699V4.29L11.65 6.602c.219.416.343.89.343 1.394 0 .451-.1.88-.279 1.263L14 11.68l-.004-1.73a.982.982 0 01.323-.68.978.978 0 011.378.049c.187.2.316.46.3.714l-.004 4.011a.983.983 0 01-.3.691.972.972 0 01-.7.265l-4.046-.001a.987.987 0 01-.679-.326 1.017 1.017 0 01.048-1.41.972.972 0 01.699-.265h1.693l-2.315-2.35z'
];
const svgPaths20 = [
    'M13.04 13.424c-.6.36-1.302.568-2.052.568a4 4 0 01-3.868-2.999H3.342l2.372 2.31c.176.176.283.42.283.694 0 .537-.452.998-.988.998a.935.935 0 01-.691-.289L.292 10.683A.96.96 0 010 9.999c0-.274.107-.518.283-.694l4.035-4.04a.973.973 0 01.691-.288c.536 0 .988.47.988 1.007a.975.975 0 01-.283.694L3.332 8.984h3.786a4 4 0 013.87-3.006c.771 0 1.492.22 2.102.599l3.565-3.57-2.538-.003a.974.974 0 01-.69-.29c-.38-.38-.38-1.052-.002-1.431A.94.94 0 0114.122 1l4.896.005a.96.96 0 01.69.277c.193.193.27.442.27.69l.005 4.9a.971.971 0 01-.289.69 1.023 1.023 0 01-1.416 0 .975.975 0 01-.29-.691l-.003-2.54-3.554 3.62c.351.596.553 1.291.553 2.034 0 .763-.213 1.477-.583 2.084l3.595 3.595.003-2.54c0-.249.097-.497.29-.69.38-.38 1.05-.381 1.429-.002a.94.94 0 01.282.697l-.005 4.9a.927.927 0 01-.277.675.974.974 0 01-.69.291L13.974 19a.97.97 0 01-.69-.29 1.03 1.03 0 01.002-1.42.974.974 0 01.69-.29l2.696-.003-3.632-3.573z'
];
exports.FlowReviewBranchIcon = (0, react_1.memo)((0, react_1.forwardRef)(function FlowReviewBranchIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "flow-review-branch" }, props));
}));
