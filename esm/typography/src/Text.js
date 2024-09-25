import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "color", "fontFamily", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useStyleConfig } from '../../hooks';
import { useTheme } from '../../theme';
var emptyObject = {};
var Text = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Text(props, ref) {
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