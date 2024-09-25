import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo } from 'react';
import { useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import EditableCell from './EditableCell';
import SearchTableHeaderCell from './SearchTableHeaderCell';
import SelectMenuCell from './SelectMenuCell';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';
import TableVirtualBody from './TableVirtualBody';
import TextTableCell from './TextTableCell';
import TextTableHeaderCell from './TextTableHeaderCell';
var emptyObject = {};
var Table = /*#__PURE__*/memo(function Table(props) {
  var children = props.children,
    rest = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('Table', emptyObject, emptyObject, emptyObject);
  return /*#__PURE__*/React.createElement(Pane, _extends({}, themedProps, rest), children);
});
Table.Body = TableBody;
Table.VirtualBody = TableVirtualBody;
Table.Head = TableHead;
Table.HeaderCell = TableHeaderCell;
Table.TextHeaderCell = TextTableHeaderCell;
Table.SearchHeaderCell = SearchTableHeaderCell;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.TextCell = TextTableCell;
Table.EditableCell = EditableCell;
Table.SelectMenuCell = SelectMenuCell;
Table.propTypes = _objectSpread({}, Pane.propTypes);
export default Table;