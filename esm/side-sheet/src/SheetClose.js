import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["isClosing", "position"];
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { keyframes } from 'ui-box';
import { Position } from '../../constants';
import { CrossIcon } from '../../icons';
var animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
};
var ANIMATION_DURATION = 240;
var sharedStyles = {
  padding: 4,
  borderRadius: 9999,
  position: 'absolute',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  transition: 'background-color 120ms',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    '&:active': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)'
    }
  }
};
var withAnimations = function withAnimations(animateIn, animateOut) {
  var enterAnimation = {
    animation: "".concat(animateIn, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
  };
  return {
    selectors: {
      '&[data-state="entering"]': enterAnimation,
      '&[data-state="entered"]': enterAnimation,
      '&[data-state="exiting"]': {
        animation: "".concat(animateOut, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
      }
    }
  };
};
var sheetCloseStyles = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Position.RIGHT, _objectSpread({
  left: 0,
  marginLeft: -12,
  marginTop: 12,
  transform: 'translateX(-100%)'
}, withAnimations(keyframes('rotate360InAnimation', {
  from: {
    transform: 'translateX(100%) rotate(0deg)'
  },
  to: {
    transform: 'translateX(-100%) rotate(-360deg)'
  }
}), keyframes('rotate360OutAnimation', {
  from: {
    transform: 'translateX(-100%) rotate(0deg)'
  },
  to: {
    transform: 'translateX(100%) rotate(360deg)'
  }
})))), Position.LEFT, _objectSpread({
  marginRight: -12,
  right: 0,
  marginTop: 12,
  transform: 'translateX(100%)'
}, withAnimations(keyframes('leftRotate360InAnimation', {
  from: {
    transform: 'translateX(-100%) rotate(0deg)'
  },
  to: {
    transform: 'translateX(100%), rotate(360deg)'
  }
}), keyframes('leftRotate360OutAnimation', {
  from: {
    transform: 'translateX(100%) rotate(0deg)'
  },
  to: {
    transform: 'translateX(-100%), rotate(360deg)'
  }
})))), Position.TOP, _objectSpread({
  right: 0,
  marginRight: 12,
  top: '100%',
  marginTop: 12,
  transform: 'translateY(0)'
}, withAnimations(keyframes('topRotate360InAnimation', {
  from: {
    transform: 'translateY(-200%) rotate(0deg)'
  },
  to: {
    transform: 'translateY(0%), rotate(360deg)'
  }
}), keyframes('topRotate360OutAnimation', {
  from: {
    transform: 'translateY(0%) rotate(0deg)'
  },
  to: {
    transform: 'translateY(-200%), rotate(360deg)'
  }
})))), Position.BOTTOM, _objectSpread({
  right: 0,
  marginRight: 12,
  bottom: '100%',
  marginBottom: 12,
  transform: 'translateY(0)'
}, withAnimations(keyframes('bottomRotate360InAnimation', {
  from: {
    transform: 'translateY(200%) rotate(0deg)'
  },
  to: {
    transform: 'translateY(0%), rotate(360deg)'
  }
}), keyframes('bottomRotate360OutAnimation', {
  from: {
    transform: 'translateY(0%) rotate(0deg)'
  },
  to: {
    transform: 'translateY(200%), rotate(360deg)'
  }
}))));
var SheetClose = /*#__PURE__*/function (_PureComponent) {
  function SheetClose() {
    _classCallCheck(this, SheetClose);
    return _callSuper(this, SheetClose, arguments);
  }
  _inherits(SheetClose, _PureComponent);
  return _createClass(SheetClose, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        isClosing = _this$props.isClosing,
        position = _this$props.position,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/React.createElement(Box, _extends({
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, sheetCloseStyles[position], sharedStyles, props), /*#__PURE__*/React.createElement(CrossIcon, {
        color: "#fff"
      }));
    }
  }]);
}(PureComponent);
SheetClose.displayName = "SheetClose";
_defineProperty(SheetClose, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  isClosing: PropTypes.bool,
  position: PropTypes.oneOf([Position.LEFT, Position.RIGHT, Position.TOP, Position.BOTTOM]).isRequired
}));
export { SheetClose as default };