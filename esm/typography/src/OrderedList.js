import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
var emptyObject = {};
var internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
};
var OrderedList = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function OrderedList(props, ref) {
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