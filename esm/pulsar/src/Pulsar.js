import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["position", "size", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box, { keyframes } from 'ui-box';
import Positions from '../../constants/src/Position';
import { Pane } from '../../layers';
import { majorScale } from '../../scales';
import { useTheme } from '../../theme';
var pulseAnimation = keyframes('pulseAnimation', {
  0: {
    transform: 'scale(1)'
  },
  50: {
    transform: 'scale(1.9)'
  },
  100: {
    transform: 'scale(1)'
  }
});
var animationTiming = 'cubic-bezier(0, 0, 0.58, 1)';
var animationDuration = '1.8s';
var pulsarAnimationStyles = {
  animation: "".concat(pulseAnimation, " ").concat(animationDuration, " ").concat(animationTiming, " both infinite")
};
var POSITION_KEYS = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Positions.TOP_LEFT, ['top', 'left']), Positions.TOP_RIGHT, ['top', 'right']), Positions.BOTTOM_LEFT, ['bottom', 'left']), Positions.BOTTOM_RIGHT, ['bottom', 'right']);
var getPositionProps = function getPositionProps(_ref) {
  var position = _ref.position,
    size = _ref.size;
  var keys = POSITION_KEYS[position];
  var props = {};
  keys.forEach(function (key) {
    var isYAxisKey = key === 'top' || key === 'bottom';
    if (isYAxisKey) {
      props[key] = -(size / 2);
    } else {
      props[key] = -size;
    }
  });
  return props;
};
export var Pulsar = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function (_ref2, ref) {
  var _ref2$position = _ref2.position,
    position = _ref2$position === void 0 ? Positions.TOP_RIGHT : _ref2$position,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? majorScale(1) : _ref2$size,
    onClick = _ref2.onClick,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _useTheme = useTheme(),
    colors = _useTheme.colors;
  var positionProps = getPositionProps({
    position: position,
    size: size
  });
  var outerPadding = size * 0.25;
  return /*#__PURE__*/React.createElement(Pane, _extends({
    ref: ref,
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: colors.blue100,
    boxSizing: "content-box",
    opacity: 0.7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: outerPadding
  }, pulsarAnimationStyles, {
    onClick: onClick,
    cursor: onClick ? 'pointer' : undefined
  }, positionProps, rest), /*#__PURE__*/React.createElement(Pane, {
    width: size,
    height: size,
    backgroundColor: colors.blue200,
    borderRadius: "50%",
    opacity: 0.7
  }));
}));
Pulsar.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * The position of the pulsar
   */
  position: PropTypes.oneOf([Positions.TOP_LEFT, Positions.TOP_RIGHT, Positions.BOTTOM_LEFT, Positions.BOTTOM_RIGHT]),
  /**
   * The width/height of the dot
   */
  size: PropTypes.number
});