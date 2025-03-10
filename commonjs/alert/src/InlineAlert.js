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
const ui_box_1 = require("@maestroqa/ui-box");
const prop_types_1 = __importDefault(require("prop-types"));
const hooks_1 = require("../../hooks");
const layers_1 = require("../../layers");
const typography_1 = require("../../typography");
const getIconForIntent_1 = require("./getIconForIntent");
const pseudoSelectors = {};
const internalStyles = {
    display: 'flex',
    alignItems: 'center'
};
const InlineAlert = (0, react_1.memo)((0, react_1.forwardRef)(function InlineAlert(props, ref) {
    const { children, className, hasIcon = true, intent = 'info', size = 400 } = props, restProps = __rest(props, ["children", "className", "hasIcon", "intent", "size"]);
    const intentToken = intent === 'none' ? 'info' : intent;
    const themedProps = (0, hooks_1.useStyleConfig)('InlineAlert', { intent: intentToken }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ ref: ref, className: className }, themedProps, restProps),
        hasIcon && (react_1.default.createElement(layers_1.Pane, { display: "flex", marginRight: 16 }, (0, getIconForIntent_1.getIconForIntent)(intent, { size: 16 }))),
        react_1.default.createElement(typography_1.Text, { size: size, lineHeight: 1, fontWeight: 500, color: "inherit" }, children)));
}));
InlineAlert.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), ui_box_1.dimensions.propTypes), { 
    /**
     * The content of the alert.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]), 
    /**
     * The intent of the alert. This should always be set explicitly.
     */
    intent: prop_types_1.default.string, 
    /**
     * When true, show a icon on the left matching the type.
     * There is no point not showing this.
     */
    hasIcon: prop_types_1.default.bool, 
    /**
     * The size of the Text.
     */
    size: prop_types_1.default.number });
exports.default = InlineAlert;
