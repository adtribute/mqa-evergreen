import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["options", "optionSize", "close", "closeOnSelect", "onSelect", "onDeselect", "onFilterChange", "hasFilter", "selected", "optionsFilter", "isMultiSelect", "height", "width", "renderItem", "filterPlaceholder", "filterIcon", "defaultSearchValue", "shouldAutoFocus"];
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import VirtualList from '@segment/react-tiny-virtual-list';
import fuzzaldrin from 'fuzzaldrin-plus';
import PropTypes from 'prop-types';
import { SearchIcon } from '../../icons';
import { Image } from '../../image';
import { Pane } from '../../layers';
import SearchTableHeaderCell from '../../table/src/SearchTableHeaderCell';
import TableHead from '../../table/src/TableHead';
import { useTheme } from '../../theme';
import Option from './Option';
import OptionShapePropType from './OptionShapePropType';
/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */

var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return fuzzaldrin.filter(options, input, {
    key: key
  });
};

var noop = function noop() {};

var defaultRenderItem = function defaultRenderItem(props) {
  return /*#__PURE__*/React.createElement(Option, props, props.icon && /*#__PURE__*/React.createElement(Image, {
    src: props.icon,
    width: 24,
    marginRight: 8
  }), props.label);
};

defaultRenderItem.displayName = "defaultRenderItem";
var OptionsList = /*#__PURE__*/memo(function OptionsList(props) {
  var _props$options = props.options,
      originalOptions = _props$options === void 0 ? [] : _props$options,
      _props$optionSize = props.optionSize,
      optionSize = _props$optionSize === void 0 ? 33 : _props$optionSize,
      close = props.close,
      closeOnSelect = props.closeOnSelect,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      _props$onDeselect = props.onDeselect,
      onDeselect = _props$onDeselect === void 0 ? noop : _props$onDeselect,
      _props$onFilterChange = props.onFilterChange,
      onFilterChange = _props$onFilterChange === void 0 ? noop : _props$onFilterChange,
      hasFilter = props.hasFilter,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? [] : _props$selected,
      optionsFilter = props.optionsFilter,
      isMultiSelect = props.isMultiSelect,
      height = props.height,
      width = props.width,
      _props$renderItem = props.renderItem,
      _renderItem = _props$renderItem === void 0 ? defaultRenderItem : _props$renderItem,
      _props$filterPlacehol = props.filterPlaceholder,
      filterPlaceholder = _props$filterPlacehol === void 0 ? 'Filter...' : _props$filterPlacehol,
      _props$filterIcon = props.filterIcon,
      filterIcon = _props$filterIcon === void 0 ? SearchIcon : _props$filterIcon,
      _props$defaultSearchV = props.defaultSearchValue,
      defaultSearchValue = _props$defaultSearchV === void 0 ? '' : _props$defaultSearchV,
      _props$shouldAutoFocu = props.shouldAutoFocus,
      shouldAutoFocus = _props$shouldAutoFocu === void 0 ? true : _props$shouldAutoFocu,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = useState(defaultSearchValue),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      searchRef = _useState4[0],
      setSearchRef = _useState4[1];

  var requestId = useRef();

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var isSelected = useCallback(function (item) {
    return Boolean(selected.find(function (selectedItem) {
      return selectedItem === item.value;
    }));
  }, [selected]);
  var optionLabels = useMemo(function () {
    return originalOptions.map(function (item) {
      return item.label;
    });
  }, [originalOptions]); // Gets filtered options any time the filter fn, value, or options change

  var options = useMemo(function () {
    if (searchValue.trim() === '') {
      return originalOptions;
    } // Preserve backwards compatibility with allowing custom filters, which accept array of strings


    if (typeof optionsFilter === 'function') {
      return optionsFilter(optionLabels, searchValue).map(function (name) {
        return originalOptions.find(function (item) {
          return item.label === name;
        });
      });
    }

    return fuzzyFilter(originalOptions, searchValue, {
      key: 'label'
    });
  }, [originalOptions, optionLabels, optionsFilter, searchValue]);
  var getCurrentIndex = useCallback(function () {
    return options.findIndex(function (option) {
      return option.value === selected[selected.length - 1];
    });
  }, [selected, options]);
  var handleArrowUp = useCallback(function () {
    var nextIndex = getCurrentIndex() - 1;

    if (nextIndex < 0) {
      nextIndex = options.length - 1;
    }

    if (isSelected(options[nextIndex])) {
      return;
    }

    onSelect(options[nextIndex]);
  }, [onSelect, options, getCurrentIndex, isSelected]);
  var handleArrowDown = useCallback(function () {
    var nextIndex = getCurrentIndex() + 1;

    if (nextIndex === options.length) {
      nextIndex = 0;
    }

    if (!isSelected(options[nextIndex])) {
      onSelect(options[nextIndex]);
    }
  }, [onSelect, options, getCurrentIndex, isSelected]);
  var handleChange = useCallback(function (searchValue) {
    setSearchValue(searchValue);
    onFilterChange(searchValue);
  }, [onFilterChange]);
  var handleSelect = useCallback(function (item) {
    if (isSelected(item) && isMultiSelect) {
      onDeselect(item);
    } else {
      onSelect(item);
    }

    if (!isMultiSelect && closeOnSelect) {
      close();
    }
  }, [onDeselect, isMultiSelect, closeOnSelect, onSelect, isSelected, close]);
  var handleEnter = useCallback(function () {
    var isSelected = getCurrentIndex() !== -1;

    if (isSelected) {
      if (!isMultiSelect && closeOnSelect) {
        close();
      }
    }
  }, [isMultiSelect, close, closeOnSelect, getCurrentIndex]);
  var handleDeselect = useCallback(function (item) {
    onDeselect(item);
  }, [onDeselect]);
  var handleKeyDown = useCallback(function (e) {
    if (e.key === 'ArrowUp') {
      handleArrowUp();
    }

    if (e.key === 'ArrowDown') {
      handleArrowDown();
    }

    if (e.key === 'Enter') {
      handleEnter();
    }

    if (e.key === 'Escape') {
      close();
    }
  }, [close, handleArrowUp, handleArrowDown, handleEnter]);
  useEffect(function () {
    if (hasFilter) {
      requestId.current = requestAnimationFrame(function () {
        if (searchRef && shouldAutoFocus) {
          searchRef.focus();
        }
      });
      window.addEventListener('keydown', handleKeyDown);
      return function () {
        cancelAnimationFrame(requestId.current);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [hasFilter, searchRef, handleKeyDown, shouldAutoFocus]);
  var listHeight = height - (hasFilter ? 32 : 0);
  var currentIndex = getCurrentIndex();
  var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
  return /*#__PURE__*/React.createElement(Pane, _extends({
    height: height,
    width: width,
    display: "flex",
    flexDirection: "column"
  }, rest), hasFilter && /*#__PURE__*/React.createElement(TableHead, {
    height: 32,
    backgroundColor: colors.gray50
  }, /*#__PURE__*/React.createElement(SearchTableHeaderCell, {
    onChange: handleChange,
    ref: setSearchRef,
    borderRight: null,
    placeholder: filterPlaceholder,
    icon: filterIcon
  })), /*#__PURE__*/React.createElement(Pane, {
    flex: 1
  }, options.length > 0 && /*#__PURE__*/React.createElement(VirtualList, {
    height: listHeight,
    width: "100%",
    itemSize: optionSize,
    itemCount: options.length,
    overscanCount: 20,
    scrollToAlignment: "auto",
    scrollToIndex: scrollToIndex || undefined,
    renderItem: function renderItem(_ref2) {
      var index = _ref2.index,
          style = _ref2.style;
      var item = options[index];
      var isItemSelected = isSelected(item);
      var itemProps = {
        key: item.value,
        label: item.label,
        icon: item.icon,
        item: item,
        style: style,
        height: optionSize,
        onSelect: function onSelect() {
          return handleSelect(item);
        },
        onDeselect: function onDeselect() {
          return handleDeselect(item);
        },
        isSelectable: !isItemSelected || isMultiSelect,
        isSelected: isItemSelected,
        disabled: item.disabled,
        tabIndex: 0
      };
      return _renderItem(itemProps);
    }
  })));
});
OptionsList.propTypes = {
  options: PropTypes.arrayOf(OptionShapePropType),
  close: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * This holds the values of the options
   */
  selected: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  /**
   * When true, menu auto focuses on the search/filter bar.
   */
  shouldAutoFocus: PropTypes.bool,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onFilterChange: PropTypes.func,
  hasFilter: PropTypes.bool,
  optionSize: PropTypes.number,
  renderItem: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
  optionsFilter: PropTypes.func,
  defaultSearchValue: PropTypes.string
};
export default OptionsList;