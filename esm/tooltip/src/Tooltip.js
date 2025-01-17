import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["getTargetRef", "isShown"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { Position } from '../../constants';
import { useId } from '../../hooks';
import { Positioner } from '../../positioner';
import TooltipStateless from './TooltipStateless';
var emptyProps = {};
var Tooltip = /*#__PURE__*/memo(function Tooltip(props) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$position = props.position,
      position = _props$position === void 0 ? Position.BOTTOM : _props$position,
      content = props.content,
      _props$hideDelay = props.hideDelay,
      hideDelay = _props$hideDelay === void 0 ? 120 : _props$hideDelay,
      _props$showDelay = props.showDelay,
      showDelay = _props$showDelay === void 0 ? 0 : _props$showDelay,
      propIsShown = props.isShown,
      children = props.children,
      _props$statelessProps = props.statelessProps,
      statelessProps = _props$statelessProps === void 0 ? emptyProps : _props$statelessProps;
  var id = useId('evergreen-tooltip', props.id);

  var _useState = useState(propIsShown || false),
      _useState2 = _slicedToArray(_useState, 2),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShownByTarget = _useState4[0],
      setIsShownByTarget = _useState4[1];

  var closeTimer = useRef(undefined);

  var mouseLeftTarget = function mouseLeftTarget() {
    setIsShownByTarget(false);
  };

  var handleMouseLeaveTarget = debounce(mouseLeftTarget, hideDelay);

  var hide = function hide() {
    setIsShown(false); // Clean up any timeouts that may have been triggered from `showDelay`

    clearTimeout(closeTimer.current);
  };

  var handleHide = debounce(hide, hideDelay); // Component will unmount

  useEffect(function () {
    return function () {
      clearTimeout(closeTimer.current);
    };
  }, []);

  var show = function show() {
    if (isShown) return;

    if (!showDelay) {
      setIsShown(true);
      return;
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function () {
      setIsShown(true);
    }, showDelay);
  };

  var renderTarget = function renderTarget(_ref) {
    var getRef = _ref.getRef;
    var tooltipTargetProps = {
      onMouseEnter: show,
      onMouseLeave: handleHide,
      'aria-describedby': id
    };
    /**
     * Tooltips can be used within a Popover (not the other way around)
     * When a Tooltip is used within a Popover, the Popover passes
     * its props to the Tooltip in a `popoverProps` object.
     */
    // eslint-disable-next-line react/prop-types

    if (props.popoverProps) {
      var _props$popoverProps = props.popoverProps,
          getTargetRef = _props$popoverProps.getTargetRef,
          _isShown = _props$popoverProps.isShown,
          popoverTargetProps = _objectWithoutProperties(_props$popoverProps, _excluded);

      return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread(_objectSpread({}, popoverTargetProps), tooltipTargetProps), {}, {
        ref: function ref(_ref2) {
          // Get the ref for the Tooltip.
          getRef(_ref2); // Pass the ref to the Popover.

          getTargetRef(_ref2);
        }
      }));
    }
    /**
     * With normal usage only the props for a Tooltip are passed to the target.
     */


    return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, tooltipTargetProps), {}, {
      ref: function ref(_ref3) {
        getRef(_ref3);
      }
    }));
  }; // eslint-disable-next-line react/prop-types


  var isPopoverShown = function isPopoverShown() {
    return props.popoverProps && props.popoverProps.isShown;
  };

  var handleMouseEnterTarget = function handleMouseEnterTarget() {
    setIsShownByTarget(true);
  };

  var shown = (propIsShown || isShown || isShownByTarget) && !isPopoverShown(); // Tooltip was explicitly set to not be shown

  if (propIsShown === false) {
    shown = false;
  }

  return /*#__PURE__*/React.createElement(Positioner, {
    target: renderTarget,
    isShown: shown,
    position: position,
    animationDuration: 160
  }, function (_ref4) {
    var css = _ref4.css,
        getRef = _ref4.getRef,
        state = _ref4.state,
        style = _ref4.style;
    return /*#__PURE__*/React.createElement(TooltipStateless, _extends({
      id: id,
      appearance: appearance,
      ref: getRef,
      "data-state": state,
      style: style,
      onMouseEnter: handleMouseEnterTarget,
      onMouseLeave: handleMouseLeaveTarget
    }, statelessProps, css, {
      className: statelessProps.className
    }), content);
  });
});
Tooltip.propTypes = {
  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']),

  /**
   * The id of the tooltip.
   */
  id: PropTypes.string,

  /**
   * The position the Popover is on.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: PropTypes.node,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: PropTypes.number,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: PropTypes.number,

  /**
   * Controls whether the Tooltip is shown or not.
   * - When `true`, the component is always shown, regardless of the whether the target is hovered.
   * - When `false`, the component is never shown, regardless of the whether the target is hovered.
   * - When `undefined`, the component is uncontrolled and the isShown state is handled internally
   * (i.e. the Tooltip is shown when the target is hovered)
   */
  isShown: PropTypes.bool,

  /**
   * The target button of the Tooltip.
   */
  children: PropTypes.node,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
};
export default Tooltip;