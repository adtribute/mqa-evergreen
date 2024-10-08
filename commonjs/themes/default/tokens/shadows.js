"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const borderShadowColor = 'rgba(67, 90, 111, 0.3)';
const blurryShadowColor = 'rgba(67, 90, 111, 0.47)';
/**
 * Elevation styles are applied as box shadows.
 * Available levels: 0, 1, 2, 3, 4.
 */
const shadows = [
    `0 0 1px ${borderShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
];
shadows.focusRing = `0 0 0 2px ${colors_1.default.blue100}`;
exports.default = shadows;
