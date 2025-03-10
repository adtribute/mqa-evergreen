import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "containerProps", "preventBodyScrolling", "shouldAutoFocus", "shouldCloseOnClick", "shouldCloseOnEscapePress", "onBeforeClose", "onExit", "onExiting", "onExited", "onEnter", "onEntering", "onEntered", "isShown"];
import React, { memo, useState, useEffect, useRef } from 'react';
import Box, { keyframes } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { StackingOrder } from '../../constants';
import preventBodyScroll from '../../lib/prevent-body-scroll';
import safeInvoke from '../../lib/safe-invoke';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import { useTheme } from '../../theme';

var noop = function noop() {};

var emptyProps = {};
var animationEasing = {
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
var ANIMATION_DURATION = 240;
var fadeInAnimation = keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var fadeOutAnimation = keyframes('fadeOutAnimation', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});
var enterAnimationProps = {
  animationName: fadeInAnimation,
  animationDuration: ANIMATION_DURATION,
  animationTimingFunction: animationEasing.deceleration,
  animationFillMode: 'both'
};
var exitAnimationProps = {
  animationName: fadeOutAnimation,
  animationDuration: ANIMATION_DURATION,
  animationTimingFunction: animationEasing.acceleration,
  animationFillMode: 'both'
};

var animationStyles = function animationStyles(backgroundColor) {
  return {
    selectors: {
      '&::before': {
        backgroundColor: backgroundColor,
        left: 0,
        top: 0,
        position: 'fixed',
        display: 'block',
        width: '100%',
        height: '100%',
        content: '" "'
      },
      '&[data-state="entering"]::before': enterAnimationProps,
      '&[data-state="entered"]::before': enterAnimationProps,
      '&[data-state="exiting"]::before': exitAnimationProps,
      '&[data-state="exited"]::before': exitAnimationProps
    }
  };
};
/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 */


var Overlay = /*#__PURE__*/memo(function Overlay(_ref) {
  var children = _ref.children,
      _ref$containerProps = _ref.containerProps,
      containerProps = _ref$containerProps === void 0 ? emptyProps : _ref$containerProps,
      _ref$preventBodyScrol = _ref.preventBodyScrolling,
      preventBodyScrolling = _ref$preventBodyScrol === void 0 ? false : _ref$preventBodyScrol,
      _ref$shouldAutoFocus = _ref.shouldAutoFocus,
      shouldAutoFocus = _ref$shouldAutoFocus === void 0 ? true : _ref$shouldAutoFocus,
      _ref$shouldCloseOnCli = _ref.shouldCloseOnClick,
      shouldCloseOnClick = _ref$shouldCloseOnCli === void 0 ? true : _ref$shouldCloseOnCli,
      _ref$shouldCloseOnEsc = _ref.shouldCloseOnEscapePress,
      shouldCloseOnEscapePress = _ref$shouldCloseOnEsc === void 0 ? true : _ref$shouldCloseOnEsc,
      onBeforeClose = _ref.onBeforeClose,
      _ref$onExit = _ref.onExit,
      onExit = _ref$onExit === void 0 ? noop : _ref$onExit,
      _ref$onExiting = _ref.onExiting,
      onExiting = _ref$onExiting === void 0 ? noop : _ref$onExiting,
      _ref$onExited = _ref.onExited,
      onExited = _ref$onExited === void 0 ? noop : _ref$onExited,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? noop : _ref$onEnter,
      _ref$onEntering = _ref.onEntering,
      onEntering = _ref$onEntering === void 0 ? noop : _ref$onEntering,
      _ref$onEntered = _ref.onEntered,
      onEntered = _ref$onEntered === void 0 ? noop : _ref$onEntered,
      isShown = _ref.isShown,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();
  var colors = theme.colors;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      previousActiveElement = _useState2[0],
      setPreviousActiveElement = _useState2[1];

  var _useState3 = useState(isShown ? 'entering' : 'exited'),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var containerRef = useRef(null);
  useEffect(function () {
    if (isShown) {
      setStatus('entering');
    }
  }, [isShown]);

  var close = function close() {
    var shouldClose = safeInvoke(onBeforeClose);

    if (shouldClose !== false) {
      setStatus('exiting');
    }
  };

  var onEsc = function onEsc(event) {
    if (event.key === 'Escape' && shouldCloseOnEscapePress) {
      close();
    }
  };

  useEffect(function () {
    if (status === 'entered') {
      setPreviousActiveElement(document.activeElement);
      bringFocusInsideOverlay();
    }

    if (status === 'entering') {
      document.body.addEventListener('keydown', onEsc, false);
    }

    if (status === 'exiting') {
      document.body.removeEventListener('keydown', onEsc, false);
      bringFocusBackToTarget();
    } // These missing deps *should* be okay (adding them would require other changes)
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [status]); // ComponentWillUnmount

  useEffect(function () {
    return function () {
      handleBodyScroll(false);
      document.body.removeEventListener('keydown', onEsc, false);
    };
  }, // These missing deps *should* be okay (adding them would require other changes)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */

  var bringFocusInsideOverlay = function bringFocusInsideOverlay() {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(function () {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE
      if (!shouldAutoFocus || containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
      !isShown) {
        return;
      }

      var isFocusOutsideModal = !containerRef.current.contains(document.activeElement);

      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        var autofocusElement = containerRef.current.querySelector('[autofocus]');
        var wrapperElement = containerRef.current.querySelector('[tabindex]');
        var buttonElement = containerRef.current.querySelector('button');

        if (autofocusElement) {
          autofocusElement.focus();
        } else if (wrapperElement) {
          wrapperElement.focus();
        } else if (buttonElement) {
          buttonElement.focus();
        }
      }
    });
  };

  var bringFocusBackToTarget = function bringFocusBackToTarget() {
    return requestAnimationFrame(function () {
      if (previousActiveElement == null || // eslint-disable-line eqeqeq, no-eq-null
      containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
        return;
      } // Bring back focus on the target.


      var isFocusInsideModal = containerRef.current.contains(document.activeElement);

      if (document.activeElement === document.body || isFocusInsideModal) {
        previousActiveElement.focus();
      }
    });
  };

  var handleBodyScroll = function handleBodyScroll(preventScroll) {
    if (preventBodyScrolling) {
      preventBodyScroll(preventScroll);
    }
  };

  var handleEnter = function handleEnter(node, isAppearing) {
    handleBodyScroll(true);
    safeInvoke(onEnter, node, isAppearing);
  };

  var handleEntering = function handleEntering(node, isAppearing) {
    setStatus('entering');
    safeInvoke(onEntering, node, isAppearing);
  };

  var handleEntered = function handleEntered(node, isAppearing) {
    setStatus('entered');
    safeInvoke(onEntered, node, isAppearing);
  };

  var handleExit = function handleExit(node) {
    handleBodyScroll(false);
    safeInvoke(onExit, node);
  };

  var handleExiting = function handleExiting(node) {
    setStatus('exiting');
    safeInvoke(onExiting, node);
  };

  var handleExited = function handleExited(node) {
    setStatus('exited');
    safeInvoke(onExited, node);
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget || !shouldCloseOnClick) {
      return;
    }

    close();
  };

  if (status === 'exited') {
    return null;
  }

  return /*#__PURE__*/React.createElement(Stack, {
    value: StackingOrder.OVERLAY
  }, function (zIndex) {
    return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Transition, {
      nodeRef: containerRef,
      appear: true,
      unmountOnExit: true,
      timeout: ANIMATION_DURATION,
      "in": isShown && status !== 'exiting',
      onExit: handleExit,
      onExiting: handleExiting,
      onExited: handleExited,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered
    }, function (state) {
      return /*#__PURE__*/React.createElement(Box, _extends({
        onClick: handleBackdropClick,
        ref: containerRef,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: zIndex,
        "data-state": state
      }, containerProps, {
        className: containerProps.className
      }, animationStyles(colors.overlay)), typeof children === 'function' ? children({
        state: state,
        close: close
      }) : children);
    }));
  });
});
Overlay.propTypes = {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: PropTypes.bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: PropTypes.object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   * @default false
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Controls whether the overlay should automatically try to bring focus inside.
   * @default true
   */
  shouldAutoFocus: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   * @default true
   */
  shouldCloseOnClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * @default true
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: PropTypes.func
};
export default Overlay;