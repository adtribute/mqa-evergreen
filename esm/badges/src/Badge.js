import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "className", "color", "isInteractive"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var Badge = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Badge(props, ref) {
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