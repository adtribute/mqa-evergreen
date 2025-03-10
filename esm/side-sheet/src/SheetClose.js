import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["isClosing", "position"];

var _sheetCloseStyles;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { PureComponent } from 'react';
import Box, { keyframes } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
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

var sheetCloseStyles = (_sheetCloseStyles = {}, _defineProperty(_sheetCloseStyles, Position.RIGHT, _objectSpread({
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
})))), _defineProperty(_sheetCloseStyles, Position.LEFT, _objectSpread({
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
})))), _defineProperty(_sheetCloseStyles, Position.TOP, _objectSpread({
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
})))), _defineProperty(_sheetCloseStyles, Position.BOTTOM, _objectSpread({
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
})))), _sheetCloseStyles);

var SheetClose = /*#__PURE__*/function (_PureComponent) {
  _inherits(SheetClose, _PureComponent);

  var _super = _createSuper(SheetClose);

  function SheetClose() {
    _classCallCheck(this, SheetClose);

    return _super.apply(this, arguments);
  }

  _createClass(SheetClose, [{
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

  return SheetClose;
}(PureComponent);

SheetClose.displayName = "SheetClose";

_defineProperty(SheetClose, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  isClosing: PropTypes.bool,
  position: PropTypes.oneOf([Position.LEFT, Position.RIGHT, Position.TOP, Position.BOTTOM]).isRequired
}));

export { SheetClose as default };