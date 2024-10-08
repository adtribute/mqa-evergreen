"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle = {
    paddingX: 12
};
const appearances = {
    default: {
        selectors: {
            _focus: {
                outline: 'none',
                background: 'colors.blue50',
                boxShadow: theme => `inset 0 0 0 1px ${theme.colors.blue500}`
            }
        }
    }
};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
