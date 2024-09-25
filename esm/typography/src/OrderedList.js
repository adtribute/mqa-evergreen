import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useStyleConfig } from '../../hooks';
var emptyObject = {};
var internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
};
var OrderedList = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function OrderedList(props, ref) {
  var children = props.children,
    className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? 400 : _props$size,
    rest = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('List', {
    size: size
  }, emptyObject, internalStyles);
  var finalChildren = React.Children.map(children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return child;
    }
    return /*#__PURE__*/React.cloneElement(child, {
      // Prefer more granularly defined icon if present
      size: child.props.size || size
    });
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "ol",
    className: className
  }, themedProps, rest, {
    ref: ref
  }), finalChildren);
}));
OrderedList.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600])
});
export default OrderedList;