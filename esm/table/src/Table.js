import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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