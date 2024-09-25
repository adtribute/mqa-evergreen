import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "color", "disabled", "dotSize"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { SymbolCircleIcon } from '../../icons';
import { majorScale } from '../../scales';
import { Text } from '../../typography';
var StatusIndicator = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function StatusIndicator(props, ref) {
  var children = props.children,
    _props$color = props.color,
    color = _props$color === void 0 ? 'disabled' : _props$color,
    disabled = props.disabled,
    _props$dotSize = props.dotSize,
    dotSize = _props$dotSize === void 0 ? 10 : _props$dotSize,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Text, _extends({
    display: "inline-flex",
    alignItems: "center",
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(SymbolCircleIcon, {
    flexShrink: 0,
    marginRight: majorScale(1),
    size: dotSize,
    color: color
  }), children);
}));
StatusIndicator.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * The label of the status hint.
   */
  children: PropTypes.node,
  /**
   * The color of the status hint. Can be an intent or hex value.
   */
  color: PropTypes.string,
  /**
   * The size of the dot to the left of the text
   */
  dotSize: PropTypes.number
});
export default StatusIndicator;