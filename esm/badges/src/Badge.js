import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "className", "color", "isInteractive"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { Strong } from '../../typography';
var pseudoSelectors = {};
var internalStyles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle'
};
var interactiveStyles = {
  selectors: {
    '&:hover': {
      opacity: 0.8
    }
  },
  cursor: 'pointer'
};
var Badge = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Badge(props, ref) {
  var _props$appearance = props.appearance,
    appearance = _props$appearance === void 0 ? 'subtle' : _props$appearance,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'neutral' : _props$color,
    _props$isInteractive = props.isInteractive,
    isInteractive = _props$isInteractive === void 0 ? false : _props$isInteractive,
    restProps = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('Badge', {
    appearance: appearance,
    color: color
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Strong, _extends({
    ref: ref,
    size: 300,
    className: className
  }, isInteractive ? interactiveStyles : {}, themedProps, restProps));
}));
Badge.propTypes = _objectSpread(_objectSpread({}, Strong.propTypes), {}, {
  /**
   * The color used for the badge.
   */
  color: PropTypes.string,
  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: PropTypes.bool
});
export default Badge;