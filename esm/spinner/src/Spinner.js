import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["delay", "size"],
    _excluded2 = ["height", "width"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, useEffect, forwardRef, memo } from 'react';
import Box, { keyframes } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
var loadingKeyframes = keyframes('loading', {
  0: {
    transform: 'rotate(0)'
  },
  100: {
    transform: 'rotate(360deg)'
  }
});
var loadingCircleKeyframes = keyframes('loading-circle', {
  0: {
    strokeDashoffset: 600
  },
  100: {
    strokeDashoffset: 0
  }
});

var innerStyle = function innerStyle(color) {
  return {
    animation: "".concat(loadingCircleKeyframes, " 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite"),
    fill: 'transparent',
    stroke: color,
    strokeDasharray: 300,
    strokeDashoffset: 600,
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 12
  };
};

var emptyObject = {};
var Spinner = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Spinner(_ref, ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(delay === 0),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var themedProps = useStyleConfig('Spinner', {
    size: size
  }, emptyObject, emptyObject);

  var _ref2 = typeof size === 'string' ? themedProps : {
    width: size,
    height: size
  },
      height = _ref2.height,
      width = _ref2.width,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  useEffect(function () {
    var delayTimer = null;

    if (delay > 0) {
      delayTimer = setTimeout(function () {
        setIsVisible(true);
      }, delay);
    }

    return function () {
      clearTimeout(delayTimer);
    };
  }, [delay]);

  if (!isVisible) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Box, _extends({
    width: width,
    height: height,
    lineHeight: 0
  }, props, rest, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Box, {
    is: "svg",
    animation: "".concat(loadingKeyframes, " 2s linear infinite"),
    x: "0px",
    y: "0px",
    viewBox: "0 0 150 150"
  }, /*#__PURE__*/React.createElement(Box, _extends({
    is: "circle"
  }, innerStyle(themedProps.color), {
    cx: "75",
    cy: "75",
    r: "60"
  }))));
}));
Spinner.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: PropTypes.number,

  /**
   * The size of the spinner.
   */
  size: PropTypes.number
});
export default Spinner;