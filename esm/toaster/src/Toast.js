import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useMemo, useRef, useState, useEffect, useCallback } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Alert from '../../alert/src/Alert';
var ANIMATION_DURATION = 240;
var defaultStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transform: 'scale(1)',
  transition: "all ".concat(ANIMATION_DURATION, "ms cubic-bezier(0.0, 0.0, 0.2, 1)"),
  opacity: 0
};
var transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0,
    transform: 'scale(1)'
  },
  exited: {
    opacity: 0,
    transform: 'scale(0.9)'
  }
};
var Toast = /*#__PURE__*/memo(function Toast(props) {
  var children = props.children,
      duration = props.duration,
      hasCloseButton = props.hasCloseButton,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      isShownProp = props.isShown,
      onRemove = props.onRemove,
      title = props.title,
      zIndex = props.zIndex;
  var transitionRef = useRef(null);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var closeTimer = useRef(null);
  var clearCloseTimer = useCallback(function () {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);
  var close = useCallback(function () {
    clearCloseTimer();
    setIsShown(false);
  }, [clearCloseTimer]);
  var startCloseTimer = useCallback(function () {
    if (duration) {
      clearCloseTimer();
      closeTimer.current = setTimeout(function () {
        close();
      }, duration * 1000);
    }
  }, [duration, clearCloseTimer, close]);
  useEffect(function () {
    startCloseTimer();
    return function () {
      clearCloseTimer();
    };
  }, [startCloseTimer, clearCloseTimer]);
  useEffect(function () {
    if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
      setIsShown(isShownProp);
    }
  }, [isShown, isShownProp]);
  var handleMouseEnter = useCallback(function () {
    return clearCloseTimer();
  }, [clearCloseTimer]);
  var handleMouseLeave = useCallback(function () {
    return startCloseTimer();
  }, [startCloseTimer]);
  var onRef = useCallback(function (ref) {
    if (ref === null) return;

    var _ref$getBoundingClien = ref.getBoundingClientRect(),
        rectHeight = _ref$getBoundingClien.height;

    setHeight(rectHeight);
  }, []);
  var styles = useMemo(function () {
    return {
      height: height,
      zIndex: zIndex,
      marginBottom: isShown ? 0 : -height
    };
  }, [isShown, height, zIndex]);
  return /*#__PURE__*/React.createElement(Transition, {
    nodeRef: transitionRef,
    appear: true,
    unmountOnExit: true,
    timeout: ANIMATION_DURATION,
    "in": isShown,
    onExited: onRemove
  }, function (state) {
    return /*#__PURE__*/React.createElement(Box, {
      ref: transitionRef,
      "data-state": state || 'entered',
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave // Styles object needs to be spread after defaultStyles, otherwise the height/zIndex is overridden
      // and earlier toasts will not be pushed down in the viewport
      ,
      style: _objectSpread(_objectSpread(_objectSpread({}, defaultStyles), transitionStyles[state]), styles)
    }, /*#__PURE__*/React.createElement(Box, {
      ref: onRef,
      padding: 8
    }, /*#__PURE__*/React.createElement(Alert, {
      flexShrink: 0,
      appearance: "card",
      elevation: 3,
      intent: intent,
      title: title,
      isRemoveable: hasCloseButton,
      onRemove: close,
      pointerEvents: "all"
    }, children)));
  });
});
Toast.propTypes = {
  /**
   * The z-index of the toast.
   */
  zIndex: PropTypes.number,

  /**
   * Duration of the toast.
   */
  duration: PropTypes.number,

  /**
   * Function called when the toast is all the way closed.
   */
  onRemove: PropTypes.func,

  /**
   * The type of the alert.
   */
  intent: PropTypes.string,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * Description of the alert.
   */
  children: PropTypes.node,

  /**
   * When true, show a close icon button inside of the toast.
   */
  hasCloseButton: PropTypes.bool,

  /**
   * When false, will close the Toast and call onRemove when finished.
   */
  isShown: PropTypes.bool
};
export default Toast;