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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const icons_1 = require("../../icons");
const scales_1 = require("../../scales");
const typography_1 = require("../../typography");
const StatusIndicator = (0, react_1.memo)((0, react_1.forwardRef)(function StatusIndicator(props, ref) {
    const { children, color = 'disabled', disabled, dotSize = 10 } = props, rest = __rest(props, ["children", "color", "disabled", "dotSize"]);
    return (react_1.default.createElement(typography_1.Text, Object.assign({ display: "inline-flex", alignItems: "center", ref: ref }, rest),
        react_1.default.createElement(icons_1.SymbolCircleIcon, { flexShrink: 0, marginRight: (0, scales_1.majorScale)(1), size: dotSize, color: color }),
        children));
}));
StatusIndicator.propTypes = Object.assign(Object.assign({}, typography_1.Text.propTypes), { 
    /**
     * The label of the status hint.
     */
    children: prop_types_1.default.node, 
    /**
     * The color of the status hint. Can be an intent or hex value.
     */
    color: prop_types_1.default.string, 
    /**
     * The size of the dot to the left of the text
     */
    dotSize: prop_types_1.default.number });
exports.default = StatusIndicator;
