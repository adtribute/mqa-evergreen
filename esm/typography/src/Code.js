import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import Text from './Text';
var pseudoSelectors = {};
var internalStyles = {};
var Code = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Code(props, ref) {
  var _props$appearance = props.appearance,
    appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
    className = props.className,
    restProps = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('Code', {
    appearance: appearance
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Text, _extends({
    is: "code",
    ref: ref
  }, themedProps, {
    fontFamily: "mono",
    className: className
  }, restProps));
}));
Code.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']),
  /**
   * Class name passed to the Code component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default Code;