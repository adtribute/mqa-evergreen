"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper function to conform to 4 (px) minor scale.
 * @param {number} x — unitless number
 * @return {number} - unitless number
 * @example
 * minorScale(3) => 3*4 = 12
 * minorScale(1) => 1*4 = 4
 */
function minorScale(x) {
    if (!Number.isInteger(x)) {
        throw new TypeError(`minorScale only accepts integers as input, instead ${x} was passed.`);
    }
    return x * 4;
}
exports.default = minorScale;
