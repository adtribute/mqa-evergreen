import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "icon", "iconColor", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import removeUndefined from '../../lib/remove-undefined';
var emptyObject = {};
var internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
};
var UnorderedList = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function UnorderedList(props, ref) {
  var children = props.children,
      className = props.className,
      icon = props.icon,
      iconColor = props.iconColor,
      _props$size = props.size,
      size = _props$size === void 0 ? 400 : _props$size,
      rest = _objectWithoutProperties(props, _excluded);

  var themedProps = useStyleConfig('List', {
    size: size
  }, emptyObject, internalStyles);
  var enrichedChildren = React.Children.map(children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return child;
    }

    return /*#__PURE__*/React.cloneElement(child, removeUndefined(_objectSpread({
      icon: icon,
      size: size,
      iconColor: iconColor
    }, child.props)));
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "ul",
    className: className
  }, themedProps, rest, {
    ref: ref
  }), enrichedChildren);
}));
UnorderedList.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]),

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: PropTypes.string
});
export default UnorderedList;