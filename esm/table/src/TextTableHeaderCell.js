import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "isSortable", "sortOrder", "textProps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import TableHeaderCell from './TableHeaderCell';
var TextTableHeaderCell = /*#__PURE__*/memo(function TextTableHeaderCell(props) {
  var children = props.children,
    isSortable = props.isSortable,
    sortOrder = props.sortOrder,
    textProps = props.textProps,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(TableHeaderCell, rest, /*#__PURE__*/React.createElement(Box, _extends({
    flex: "1"
  }, textProps), children, ' '));
});
TextTableHeaderCell.propTypes = _objectSpread(_objectSpread({}, TableHeaderCell.propTypes), {}, {
  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.objectOf(PropTypes.string)
});
export default TextTableHeaderCell;