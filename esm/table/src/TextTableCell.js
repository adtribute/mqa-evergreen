import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "isNumber", "placeholder", "textProps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import TableCell from './TableCell';
var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
var TextTableCell = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function TextTableCell(props, ref) {
  var children = props.children,
    _props$isNumber = props.isNumber,
    isNumber = _props$isNumber === void 0 ? false : _props$isNumber,
    placeholder = props.placeholder,
    textProps = props.textProps,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(TableCell, _extends({
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(Text, _extends({
    size: 300,
    flex: "1",
    title: typeof children === 'string' ? children : undefined
  }, ellipsis, isNumber ? {
    fontFamily: 'mono'
  } : {}, textProps), children));
}));
TextTableCell.propTypes = _objectSpread(_objectSpread({}, TableCell.propTypes), {}, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: PropTypes.bool,
  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.object
});
export default TextTableCell;