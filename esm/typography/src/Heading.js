import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useStyleConfig } from '../../hooks';
var pseudoSelectors = {};
var internalStyles = {};
var Heading = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Heading(props, ref) {
  var className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? 500 : _props$size,
    restProps = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('Heading', {
    size: size
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "h2",
    ref: ref,
    className: className,
    marginTop: 0,
    marginBottom: 0
  }, themedProps, restProps));
}));
Heading.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
});
export default Heading;