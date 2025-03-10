import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "color", "fontFamily", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { useTheme } from '../../theme';
var emptyObject = {};
var Text = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Text(props, ref) {
  var className = props.className,
      _props$color = props.color,
      colorProp = _props$color === void 0 ? 'default' : _props$color,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'ui' : _props$fontFamily,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      restProps = _objectWithoutProperties(props, _excluded);

  var theme = useTheme();
  var colors = theme.colors,
      fontFamilies = theme.fontFamilies;
  var color = colorProp === 'none' || colorProp === 'default' ? 'default' : colorProp;
  var themedFontFamily = fontFamilies[fontFamily] || fontFamily;
  var themedColor = colors[color] || colors.text && colors.text[color] || color;
  var themedProps = useStyleConfig('Text', {
    size: size
  }, emptyObject, emptyObject);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "span",
    ref: ref
  }, themedProps, {
    fontFamily: themedFontFamily,
    color: themedColor,
    className: className
  }, restProps));
}));
Text.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600, `small`, `medium`, `large`.
   */
  size: PropTypes.oneOf([300, 400, 500, 600, 'small', 'medium', 'large']),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
});
export default Text;