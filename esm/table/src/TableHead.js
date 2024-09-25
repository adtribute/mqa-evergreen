import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["accountForScrollbar", "children", "className"],
  _excluded2 = ["height"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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