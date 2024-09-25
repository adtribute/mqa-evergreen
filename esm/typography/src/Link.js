import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "color"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import Text from './Text';
var internalStyles = {
  textDecoration: 'underline'
};
var pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus'
};
var Link = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Link(props, ref) {
  var className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    restProps = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('Link', {
    color: color
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Text, _extends({
    is: "a",
    ref: ref,
    className: className
  }, themedProps, restProps));
}));
Link.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: PropTypes.string,
  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: PropTypes.string,
  /**
   * Target attribute, common use case is target="_blank."
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: PropTypes.string,
  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default Link;