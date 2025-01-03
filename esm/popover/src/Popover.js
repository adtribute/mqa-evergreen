import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animationDuration", "bringFocusInside", "children", "content", "display", "minHeight", "minWidth", "onBodyClick", "onClose", "onCloseComplete", "onOpen", "onOpenComplete", "position", "shouldCloseOnExternalClick", "shouldCloseOnEscapePress", "statelessProps", "trigger"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useRef, useState, useEffect, useImperativeHandle, useCallback, useMemo } from 'react';
import merge from 'lodash.merge';
import PropTypes from 'prop-types';
import { Position } from '../../constants';
import { useMergedRef } from '../../hooks';
import { Positioner } from '../../positioner';
import { Tooltip } from '../../tooltip';
import PopoverStateless from './PopoverStateless';

var noop = function noop() {};

var emptyProps = {};
var Popover = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Popover(_ref, forwardedRef) {
  var _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === void 0 ? 300 : _ref$animationDuratio,
      _ref$bringFocusInside = _ref.bringFocusInside,
      shouldBringFocusInside = _ref$bringFocusInside === void 0 ? false : _ref$bringFocusInside,
      children = _ref.children,
      content = _ref.content,
      display = _ref.display,
      _ref$minHeight = _ref.minHeight,
      minHeight = _ref$minHeight === void 0 ? 40 : _ref$minHeight,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 200 : _ref$minWidth,
      _ref$onBodyClick = _ref.onBodyClick,
      onBodyClick = _ref$onBodyClick === void 0 ? noop : _ref$onBodyClick,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? noop : _ref$onClose,
      _ref$onCloseComplete = _ref.onCloseComplete,
      onCloseComplete = _ref$onCloseComplete === void 0 ? noop : _ref$onCloseComplete,
      _ref$onOpen = _ref.onOpen,
      onOpen = _ref$onOpen === void 0 ? noop : _ref$onOpen,
      _ref$onOpenComplete = _ref.onOpenComplete,
      onOpenComplete = _ref$onOpenComplete === void 0 ? noop : _ref$onOpenComplete,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? Position.BOTTOM : _ref$position,
      _ref$shouldCloseOnExt = _ref.shouldCloseOnExternalClick,
      shouldCloseOnExternalClick = _ref$shouldCloseOnExt === void 0 ? true : _ref$shouldCloseOnExt,
      _ref$shouldCloseOnEsc = _ref.shouldCloseOnEscapePress,
      shouldCloseOnEscapePress = _ref$shouldCloseOnEsc === void 0 ? true : _ref$shouldCloseOnEsc,
      _ref$statelessProps = _ref.statelessProps,
      statelessProps = _ref$statelessProps === void 0 ? emptyProps : _ref$statelessProps,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(props.isShown),
      _useState2 = _slicedToArray(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var popoverNode = useRef();
  var setPopoverNode = useMergedRef(popoverNode);
  var targetRef = useRef();
  var setTargetRef = useMergedRef(targetRef);
  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */

  var bringFocusInside = useCallback(function (e) {
    if (isShown && e) {
      e.preventDefault();
    } // Always delay focus manipulation to just before repaint to prevent scroll jumping


    return requestAnimationFrame(function () {
      // Container ref may be undefined between component mounting and Portal rendering
      // ActiveElement may be undefined in some rare cases in IE
      if (popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
      !isShown) {
        return;
      }

      var isFocusOutsideModal = !popoverNode.current.contains(document.activeElement);

      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other elements
        var autofocusElement = popoverNode.current.querySelector('[autofocus]:not([disabled])');

        if (autofocusElement) {
          // Return early to avoid unnecessary dom queries
          return autofocusElement.focus();
        }

        var wrapperElement = popoverNode.current.querySelector('[tabindex]:not([disabled])');

        if (wrapperElement) {
          return wrapperElement.focus();
        }

        var buttonElements = popoverNode.current.querySelectorAll('button:not([disabled]), a:not([disabled]), [role="menuitem"]:not([disabled]), [role="menuitemradio"]:not([disabled])');

        if (buttonElements.length > 0) {
          return buttonElements[0].focus();
        }
      }
    });
  }, [isShown, popoverNode.current]);
  var bringFocusBackToTarget = useCallback(function () {
    return requestAnimationFrame(function () {
      if (targetRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
      popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
      document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
        return;
      }

      var isFocusInsideModal = popoverNode.current.contains(document.activeElement); // Bring back focus on the target.

      if (document.activeElement === document.body || isFocusInsideModal) {
        targetRef.current.focus();
      }
    });
  }, [popoverNode.current, targetRef.current]);
  var open = useCallback(function () {
    if (isShown) {
      return;
    }

    setIsShown(true);
    onOpen();
  }, [setIsShown, onOpen, isShown]);
  var close = useCallback(function () {
    if (!isShown) {
      return;
    }

    setIsShown(false);
    bringFocusBackToTarget();
    onClose();
  }, [setIsShown, bringFocusBackToTarget, onClose, isShown]);
  useImperativeHandle(forwardedRef, function () {
    return {
      open: open,
      close: close
    };
  }, [open, close]); // If `props.isShown` is a boolean, treat as a controlled component
  // `open` and `close` should be applied when it changes

  useEffect(function () {
    if (typeof props.isShown !== 'boolean' || props.isShown === isShown) {
      return;
    }

    if (props.isShown) {
      open();
    } else {
      close();
    }
  }, [props.isShown, isShown]);
  var toggle = useCallback(function () {
    return isShown ? close() : open();
  }, [isShown, close, open]);
  var handleOpenHover = useMemo(function () {
    return trigger === 'hover' ? open : undefined;
  }, [trigger, open]);
  var handleCloseHover = useMemo(function () {
    return trigger === 'hover' ? close : undefined;
  }, [trigger, close]);
  var handleKeyDown = useCallback(function (event) {
    return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined;
  }, [bringFocusInside]);
  var onEsc = useCallback(function (event) {
    return event.key === 'Escape' && shouldCloseOnEscapePress ? close() : undefined;
  }, [shouldCloseOnEscapePress, close]);
  var handleBodyClick = useCallback(function (event) {
    // Ignore clicks on the popover or button
    if (targetRef.current && targetRef.current.contains(event.target)) {
      return;
    }

    if (popoverNode.current && popoverNode.current.contains(event.target)) {
      return;
    } // Notify body click


    onBodyClick(event);

    if (shouldCloseOnExternalClick !== false) {
      close();
    }
  }, [onBodyClick, shouldCloseOnExternalClick, close, targetRef.current, popoverNode.current]);
  var handleOpenComplete = useCallback(function () {
    if (shouldBringFocusInside) bringFocusInside();
    onOpenComplete();
  }, [shouldBringFocusInside, bringFocusInside, onOpenComplete]);
  useEffect(function () {
    if (isShown) {
      document.body.addEventListener('click', handleBodyClick, false);
      document.body.addEventListener('keydown', onEsc, false);
    } else {
      document.body.removeEventListener('click', handleBodyClick, false);
      document.body.removeEventListener('keydown', onEsc, false);
    }

    return function () {
      document.body.removeEventListener('click', handleBodyClick, false);
      document.body.removeEventListener('keydown', onEsc, false);
    };
  }, [isShown, handleBodyClick, onEsc]);
  var renderTarget = useCallback(function (_ref2) {
    var getRef = _ref2.getRef,
        isShown = _ref2.isShown;
    var isTooltipInside = children && children.type === Tooltip;

    var getTargetRef = function getTargetRef(ref) {
      setTargetRef(ref);
      getRef(ref);
    };
    /**
     * When a function is passed, you can control the Popover manually.
     */


    if (typeof children === 'function') {
      return children({
        getRef: getTargetRef,
        isShown: isShown,
        toggle: toggle
      });
    }

    var popoverTargetProps = {
      onClick: toggle,
      onMouseEnter: handleOpenHover,
      onKeyDown: handleKeyDown,
      role: 'button',
      'aria-expanded': isShown,
      'aria-haspopup': true
    };
    /**
     * Tooltips can be used within a Popover (not the other way around)
     * In this case the children is the Tooltip instead of a button.
     * Pass the properties to the Tooltip and let the Tooltip
     * add the properties to the target.
     */

    if (isTooltipInside) {
      return /*#__PURE__*/React.cloneElement(children, {
        popoverProps: _objectSpread({
          getTargetRef: getTargetRef,
          isShown: isShown
        }, popoverTargetProps)
      });
    }
    /**
     * With normal usage only popover props end up on the target.
     */


    return /*#__PURE__*/React.cloneElement(children, _objectSpread({
      ref: getTargetRef
    }, popoverTargetProps));
  }, [children, setTargetRef, toggle, handleOpenHover, handleKeyDown]); // If `props.isShown` is a boolean, popover is controlled manually, not via mouse events

  var shown = typeof props.isShown === 'boolean' ? props.isShown : isShown;
  var contentToRender = useMemo(function () {
    return typeof content === 'function' ? content({
      close: close
    }) : content;
  }, [content, close]);
  return /*#__PURE__*/React.createElement(Positioner, {
    target: renderTarget,
    isShown: shown,
    position: position,
    animationDuration: animationDuration,
    onOpenComplete: handleOpenComplete,
    onCloseComplete: onCloseComplete
  }, function (_ref3) {
    var css = _ref3.css,
        getRef = _ref3.getRef,
        state = _ref3.state,
        style = _ref3.style;
    return /*#__PURE__*/React.createElement(PopoverStateless, _extends({
      ref: function ref(_ref4) {
        setPopoverNode(_ref4);
        getRef(_ref4);
      },
      "data-state": state,
      display: display,
      minWidth: minWidth,
      minHeight: minHeight
    }, statelessProps, css, {
      style: merge({}, style, statelessProps.style),
      className: statelessProps.className,
      onMouseLeave: handleCloseHover
    }), contentToRender);
  });
}));
Popover.propTypes = {
  /**
   * The position the Popover is on. Smart positioning might override this.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * Controls whether the Popover is shown or not.
   * - When `true`, the component is always shown, regardless of the click or hover trigger.
   * - When `false`, the component is never shown, regardless of the click or hover trigger.
   * - When `undefined`, the component is uncontrolled and the isShown state is handled internally
   * (i.e. the Popover is shown based on the click or hover trigger)
   */
  isShown: PropTypes.bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: PropTypes.string,

  /**
   * The min width of the Popover card.
   */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: PropTypes.shape(PopoverStateless.propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: PropTypes.number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: PropTypes.func,

  /**
   * Function fired when Popover closes.
   */
  onClose: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: PropTypes.func,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: PropTypes.bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the dialog.
   */
  shouldCloseOnEscapePress: PropTypes.bool
};
export default Popover;