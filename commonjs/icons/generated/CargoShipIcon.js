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
exports.CargoShipIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M10 1h3a1 1 0 011 1v2h-4V1zM2.25 4a.25.25 0 00-.25.25V9H.883a.5.5 0 00-.429.757l1.072 1.787c.207.344.477.638.791.87A9.76 9.76 0 011 12.5a.5.5 0 000 1c2.067 0 3.414-.543 4.161-.917.55.373 1.505.917 2.839.917 1.32 0 2.27-.533 2.822-.905l.004.002c.196.105.48.24.856.374.75.268 1.857.529 3.318.529a.5.5 0 000-1c-.326 0-.63-.014-.916-.039.47-.328.848-.79 1.07-1.347l.572-1.428A.5.5 0 0015.26 9H4V4.25A.25.25 0 003.75 4h-1.5zm2.714 9.56a.5.5 0 01.527.033c.455.325 1.277.907 2.509.907s2.054-.582 2.51-.907a.5.5 0 01.579-.001l.006.004.036.023c.034.022.09.055.168.097.154.082.394.197.72.313.649.232 1.642.471 2.981.471a.5.5 0 010 1c-1.46 0-2.568-.261-3.318-.53a6.316 6.316 0 01-.856-.373l-.004-.002c-.552.372-1.502.905-2.822.905-1.334 0-2.289-.544-2.839-.917-.747.374-2.094.917-4.161.917a.5.5 0 010-1c2.129 0 3.384-.63 3.964-.94zM14 5h-4v3h3a1 1 0 001-1V5zM5 2a1 1 0 011-1h3v3H5V2zm4 3H5v2a1 1 0 001 1h3V5z'
];
const svgPaths20 = [
    'M12.5 1.25h4a1 1 0 011 1V5h-5V1.25zM2.75 5a.25.25 0 00-.25.25v6H.883a.5.5 0 00-.429.757l1.672 2.787c.17.284.384.533.63.741-.458.057-.959.09-1.506.09a.625.625 0 100 1.25c2.583 0 4.268-.68 5.202-1.146.687.466 1.88 1.146 3.548 1.146 1.65 0 2.837-.666 3.528-1.132l.005.003c.244.131.6.3 1.07.468.938.335 2.321.661 4.147.661a.625.625 0 100-1.25c-.319 0-.622-.01-.91-.03.398-.318.717-.738.914-1.23l.972-2.43a.5.5 0 00-.464-.685H5v-6A.25.25 0 004.75 5h-2zm3.455 11.95a.625.625 0 01.658.041c.569.407 1.597 1.134 3.137 1.134s2.568-.727 3.137-1.134a.625.625 0 01.724-.001l.007.005.045.029c.044.027.114.069.21.12.194.104.493.247.9.392.812.29 2.053.589 3.727.589a.625.625 0 110 1.25c-1.826 0-3.21-.326-4.148-.661a7.894 7.894 0 01-1.069-.468l-.005-.003c-.691.466-1.878 1.132-3.528 1.132-1.667 0-2.861-.68-3.548-1.146-.934.467-2.619 1.146-5.202 1.146a.625.625 0 110-1.25c2.66 0 4.23-.787 4.955-1.176zM17.5 6.25h-5V10h4a1 1 0 001-1V6.25zm-11.25-4a1 1 0 011-1h4V5h-5V2.25zm5 4h-5V9a1 1 0 001 1h4V6.25z'
];
exports.CargoShipIcon = (0, react_1.memo)((0, react_1.forwardRef)(function CargoShipIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "cargo-ship" }, props));
}));