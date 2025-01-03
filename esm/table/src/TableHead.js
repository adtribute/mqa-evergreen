import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["accountForScrollbar", "children", "className"],
    _excluded2 = ["height"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import ScrollbarSize from './ScrollbarSize';
var emptyObject = {};
var pseudoSelectors = {
  _firstOfType: '&:first-of-type'
};
var internalStyles = {
  display: 'flex',
  flexShrink: 0
};
var TableHead = /*#__PURE__*/memo(function TableHead(props) {
  var _props$accountForScro = props.accountForScrollbar,
      accountForScrollbar = _props$accountForScro === void 0 ? true : _props$accountForScro,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      scrollbarWidth = _useState2[0],
      setScrollBarWidth = _useState2[1];

  var _useStyleConfig = useStyleConfig('TableHead', emptyObject, pseudoSelectors, internalStyles),
      themeHeight = _useStyleConfig.height,
      themedProps = _objectWithoutProperties(_useStyleConfig, _excluded2);

  var height = rest.height || themeHeight;
  return /*#__PURE__*/React.createElement(Pane, _extends({
    paddingRight: scrollbarWidth,
    className: className,
    height: height
  }, themedProps, rest), children, " ", accountForScrollbar && /*#__PURE__*/React.createElement(ScrollbarSize, {
    handleScrollbarSize: setScrollBarWidth
  }));
});
TableHead.propTypes = _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * The height of the table head.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: PropTypes.bool
});
export default TableHead;