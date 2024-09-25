import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { keyframes } from 'ui-box';
import { Position } from '../../constants';
import { Pane } from '../../layers';
import { Overlay } from '../../overlay';
import SheetClose from './SheetClose';
var paneProps = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
});
var subpaneProps = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Position.LEFT, {
  height: '100vh'
}), Position.RIGHT, {
  height: '100vh'
}), Position.TOP, {
  width: '100vw'
}), Position.BOTTOM, {
  width: '100vw'
});
var animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
};
var ANIMATION_DURATION = 240;
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
var animationStylesClass = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Position.LEFT, _objectSpread({
  transform: 'translateX(-100%)'
}, withAnimations(keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: 'translateX(-100%)'
  },
  to: {
    transform: 'translateX(0)'
  }
}), keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: 'translateX(0)'
  },
  to: {
    transform: 'translateX(-100%)'
  }
})))), Position.RIGHT, _objectSpread({
  transform: 'translateX(100%)'
}, withAnimations(keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: 'translateX(100%)'
  },
  to: {
    transform: 'translateX(0)'
  }
}), keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: 'translateX(0)'
  },
  to: {
    transform: 'translateX(100%)'
  }
})))), Position.TOP, _objectSpread({
  transform: 'translateY(-100%)'
}, withAnimations(keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: 'translateY(-100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
}), keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: 'translateY(0)'
  },
  to: {
    transform: 'translateY(-100%)'
  }
})))), Position.BOTTOM, _objectSpread({
  transform: 'translateY(100%)'
}, withAnimations(keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
}), keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: 'translateY(0)'
  },
  to: {
    transform: 'translateY(100%)'
  }
}))));
var noop = function noop() {};
var SideSheet = /*#__PURE__*/memo(function SideSheet(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 620 : _props$width,
    isShown = props.isShown,
    children = props.children,
    containerProps = props.containerProps,
    _props$onOpenComplete = props.onOpenComplete,
    onOpenComplete = _props$onOpenComplete === void 0 ? noop : _props$onOpenComplete,
    _props$onCloseComplet = props.onCloseComplete,
    onCloseComplete = _props$onCloseComplet === void 0 ? noop : _props$onCloseComplet,
    onBeforeClose = props.onBeforeClose,
    _props$shouldAutoFocu = props.shouldAutoFocus,
    shouldAutoFocus = _props$shouldAutoFocu === void 0 ? true : _props$shouldAutoFocu,
    _props$shouldCloseOnO = props.shouldCloseOnOverlayClick,
    shouldCloseOnOverlayClick = _props$shouldCloseOnO === void 0 ? true : _props$shouldCloseOnO,
    _props$shouldCloseOnE = props.shouldCloseOnEscapePress,
    shouldCloseOnEscapePress = _props$shouldCloseOnE === void 0 ? true : _props$shouldCloseOnE,
    _props$position = props.position,
    position = _props$position === void 0 ? Position.RIGHT : _props$position,
    preventBodyScrolling = props.preventBodyScrolling;
  return /*#__PURE__*/React.createElement(Overlay, {
    isShown: isShown,
    shouldAutoFocus: shouldAutoFocus,
    shouldCloseOnClick: shouldCloseOnOverlayClick,
    shouldCloseOnEscapePress: shouldCloseOnEscapePress,
    onBeforeClose: onBeforeClose,
    onExited: onCloseComplete,
    onEntered: onOpenComplete,
    preventBodyScrolling: preventBodyScrolling
  }, function (_ref) {
    var close = _ref.close,
      state = _ref.state;
    return /*#__PURE__*/React.createElement(Pane, _extends({
      width: width
    }, paneProps[position], animationStylesClass[position], {
      "data-state": state
    }), /*#__PURE__*/React.createElement(SheetClose, {
      position: position,
      "data-state": state,
      isClosing: false,
      onClick: close
    }), /*#__PURE__*/React.createElement(Pane, _extends({
      elevation: 4,
      backgroundColor: "white",
      overflowY: "auto",
      maxHeight: "100vh",
      "data-state": state,
      width: width
    }, subpaneProps[position], containerProps), typeof children === 'function' ? children({
      close: close
    }) : children));
  });
});
SideSheet.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /**
   * When true, the Side Sheet is shown.
   */
  isShown: PropTypes.bool,
  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,
  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,
  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,
  /**
   * Controls whether the overlay should automatically try to bring focus inside.
   * @default true
   */
  shouldAutoFocus: PropTypes.bool,
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   * @default true
   */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * @default true
   */
  shouldCloseOnEscapePress: PropTypes.bool,
  /**
   * Width of the SideSheet.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: PropTypes.object,
  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: PropTypes.oneOf([Position.TOP, Position.BOTTOM, Position.LEFT, Position.RIGHT]),
  /**
   * Whether or not to prevent scrolling in the outer body
   * @default false
   */
  preventBodyScrolling: PropTypes.bool
};
export default SideSheet;