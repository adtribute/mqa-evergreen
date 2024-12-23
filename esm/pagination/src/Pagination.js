import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["isSelected", "onPageChange", "page"],
    _excluded2 = ["onNextPage", "onPageChange", "onPreviousPage", "page", "totalPages"];
import React, { useState, useCallback, useMemo, memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton } from '../../buttons';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';
import { Pane } from '../../layers';
import { majorScale, minorScale } from '../../scales';
import { useTheme } from '../../theme';
import { Text } from '../../typography';
export var usePaginationBehavior = function usePaginationBehavior() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$page = _ref.page,
      inputPage = _ref$page === void 0 ? 1 : _ref$page;

  var _useState = useState(inputPage),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var onNextPage = useCallback(function () {
    setPage(function (page) {
      return page + 1;
    });
  }, []);
  var onPreviousPage = useCallback(function () {
    setPage(function (page) {
      return page - 1;
    });
  }, []);
  var onPageChange = useCallback(function (index) {
    setPage(index);
  }, []);
  return {
    page: page,
    onNextPage: onNextPage,
    onPageChange: onPageChange,
    onPreviousPage: onPreviousPage
  };
};
var MAX_HANDLES_TO_SHOW = 7;
/* eslint-disable react/prop-types */

var PaginationButton = function PaginationButton(_ref2) {
  var isSelected = _ref2.isSelected,
      onPageChange = _ref2.onPageChange,
      page = _ref2.page,
      rest = _objectWithoutProperties(_ref2, _excluded);

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var isEllipsis = typeof page === 'string' && page === '...';
  var selectedProps = useMemo(function () {
    if (isSelected) {
      return {
        backgroundColor: colors.blue50,
        color: colors.blue400
      };
    } else {
      return {};
    }
  }, [isSelected, colors]);
  var onClick = useCallback(function () {
    onPageChange(page);
  }, [page, onPageChange]);

  if (isEllipsis) {
    return /*#__PURE__*/React.createElement(Text, {
      paddingX: majorScale(1),
      paddingY: majorScale(1),
      minWidth: majorScale(4),
      textAlign: "center",
      "aria-label": "Pagination overflow"
    }, page);
  }

  return /*#__PURE__*/React.createElement(Button, _extends({
    "aria-current": isSelected,
    "aria-label": "Page ".concat(page),
    onClick: onClick,
    minWidth: majorScale(4),
    paddingX: majorScale(1)
  }, rest, selectedProps));
};

PaginationButton.displayName = "PaginationButton";

/* eslint-enable react/prop-types */
var range = function range(start, stop) {
  var output = [];

  for (var i = start; i <= stop; i++) {
    output.push(i);
  }

  return output;
};

var getPaginationButtonContent = function getPaginationButtonContent(_ref3) {
  var page = _ref3.page,
      totalPages = _ref3.totalPages;

  if (totalPages <= MAX_HANDLES_TO_SHOW) {
    return range(1, totalPages);
  }

  if (totalPages > MAX_HANDLES_TO_SHOW && page <= 4) {
    return [].concat(_toConsumableArray(range(1, 5)), ['...', totalPages]);
  }

  if (totalPages - page < 4) {
    return [1, '...'].concat(_toConsumableArray(range(totalPages - 4, totalPages)));
  }

  return [1, '...'].concat(_toConsumableArray(range(page - 1, page + 1)), ['...', totalPages]);
};

var noop = function noop() {};

var Pagination = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Pagination(_ref4, ref) {
  var _ref4$onNextPage = _ref4.onNextPage,
      onNextPage = _ref4$onNextPage === void 0 ? noop : _ref4$onNextPage,
      _ref4$onPageChange = _ref4.onPageChange,
      onPageChange = _ref4$onPageChange === void 0 ? noop : _ref4$onPageChange,
      _ref4$onPreviousPage = _ref4.onPreviousPage,
      onPreviousPage = _ref4$onPreviousPage === void 0 ? noop : _ref4$onPreviousPage,
      _ref4$page = _ref4.page,
      page = _ref4$page === void 0 ? 1 : _ref4$page,
      totalPages = _ref4.totalPages,
      rest = _objectWithoutProperties(_ref4, _excluded2);

  return /*#__PURE__*/React.createElement(Pane, _extends({
    is: "nav",
    role: "navigation",
    "aria-label": "Pagination"
  }, rest, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Pane, {
    is: "ul",
    display: "flex",
    alignItems: "center",
    padding: 0
  }, /*#__PURE__*/React.createElement(Pane, {
    is: "li",
    listStyle: "none"
  }, /*#__PURE__*/React.createElement(IconButton, {
    appearance: "minimal",
    icon: ChevronLeftIcon,
    disabled: page === 1,
    onClick: onPreviousPage,
    "aria-label": "Previous page"
  })), totalPages ? getPaginationButtonContent({
    totalPages: totalPages,
    page: page
  }).map(function (val, i) {
    var isSelected = val === page;
    return /*#__PURE__*/React.createElement(Pane, {
      is: "li",
      listStyle: "none",
      key: "".concat(val, "-").concat(i)
    }, /*#__PURE__*/React.createElement(PaginationButton, {
      appearance: "minimal",
      isSelected: isSelected,
      page: val,
      onPageChange: onPageChange,
      marginX: minorScale(1) / 2
    }, val));
  }) : null, /*#__PURE__*/React.createElement(Pane, {
    is: "li",
    listStyle: "none"
  }, /*#__PURE__*/React.createElement(IconButton, {
    appearance: "minimal",
    icon: ChevronRightIcon,
    disabled: totalPages ? page === totalPages : undefined,
    onClick: onNextPage,
    "aria-label": "Next page"
  }))));
}));
Pagination.propTypes = {
  /**
   * The current page that a user is on - defaults to 1.
   */
  page: PropTypes.number.isRequired,

  /**
   * The total number of pages to render. If ommitted, the page numbers will not be shown to the end user.
   */
  totalPages: PropTypes.number,

  /**
   * Callback handler when the next page button is clicked.
   */
  onNextPage: PropTypes.func,

  /**
   * Callback handler when the previous page button is clicked.
   */
  onPreviousPage: PropTypes.func,

  /**
   * Callback handler when a specific page # is clicked
   */
  onPageChange: PropTypes.func
};
export default Pagination;