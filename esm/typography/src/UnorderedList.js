import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "icon", "iconColor", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useStyleConfig } from '../../hooks';
import removeUndefined from '../../lib/remove-undefined';
var emptyObject = {};
var internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
};
var UnorderedList = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function UnorderedList(props, ref) {
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