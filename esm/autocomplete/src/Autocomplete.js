import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["children", "itemSize", "position", "renderItem", "isFilterDisabled", "itemsFilter", "itemToString", "popoverMaxHeight", "popoverMinWidth", "allowOtherValues"],
    _excluded2 = ["getItemProps", "getMenuProps", "getRootProps", "highlightedIndex", "inputValue", "isOpen", "selectedItem"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useState, useEffect, useCallback } from 'react';
import VirtualList from '@segment/react-tiny-virtual-list';
import Downshift from 'downshift';
import fuzzaldrin from 'fuzzaldrin-plus';
import PropTypes from 'prop-types';
import { Position } from '../../constants';
import { Pane } from '../../layers';
import { Popover } from '../../popover';
import { Text } from '../../typography';
import AutocompleteItem from './AutocompleteItem';

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return fuzzaldrin.filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return fuzzaldrin.filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return /*#__PURE__*/React.createElement(AutocompleteItem, props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

/* eslint-disable react/prop-types */
var AutocompleteItems = function AutocompleteItems(_ref2) {
  var getItemProps = _ref2.getItemProps,
      getMenuProps = _ref2.getMenuProps,
      highlightedIndex = _ref2.highlightedIndex,
      inputValue = _ref2.inputValue,
      isFilterDisabled = _ref2.isFilterDisabled,
      itemSize = _ref2.itemSize,
      itemToString = _ref2.itemToString,
      itemsFilter = _ref2.itemsFilter,
      originalItems = _ref2.originalItems,
      popoverMaxHeight = _ref2.popoverMaxHeight,
      _renderItem = _ref2.renderItem,
      selectedItem = _ref2.selectedItem,
      title = _ref2.title,
      width = _ref2.width;
  itemsFilter = itemsFilter || fuzzyFilter(itemToString);
  var items = isFilterDisabled || inputValue.trim() === '' ? originalItems : itemsFilter(originalItems, inputValue);
  if (items.length <= 0) return null; // Pass the actual DOM ref to downshift, this fixes touch support

  var menuProps = getMenuProps();
  return /*#__PURE__*/React.createElement(Pane, _extends({
    width: width
  }, menuProps), title && /*#__PURE__*/React.createElement(Pane, {
    padding: 8,
    borderBottom: "muted"
  }, /*#__PURE__*/React.createElement(Text, {
    size: 300,
    textTransform: "uppercase"
  }, title)), /*#__PURE__*/React.createElement(VirtualList, {
    width: "100%",
    height: Math.min(items.length * itemSize, popoverMaxHeight),
    itemSize: itemSize,
    itemCount: items.length,
    scrollToIndex: highlightedIndex || 0,
    overscanCount: 3,
    scrollToAlignment: "auto",
    renderItem: function renderItem(_ref3) {
      var index = _ref3.index,
          style = _ref3.style;
      var item = items[index];
      var itemString = itemToString(item);
      return _renderItem(getItemProps({
        item: item,
        key: itemString,
        index: index,
        style: style,
        children: itemString,
        isSelected: itemToString(selectedItem) === itemString,
        isHighlighted: highlightedIndex === index
      }));
    }
  }));
};

AutocompleteItems.displayName = "AutocompleteItems";

/* eslint-enable react/prop-types */
var containerStyle = {
  width: '100%'
};
var Autocomplete = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Autocomplete(props, ref) {
  var children = props.children,
      _props$itemSize = props.itemSize,
      itemSize = _props$itemSize === void 0 ? 32 : _props$itemSize,
      position = props.position,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? autocompleteItemRenderer : _props$renderItem,
      _props$isFilterDisabl = props.isFilterDisabled,
      isFilterDisabled = _props$isFilterDisabl === void 0 ? false : _props$isFilterDisabl,
      itemsFilter = props.itemsFilter,
      _props$itemToString = props.itemToString,
      itemToString = _props$itemToString === void 0 ? function (i) {
    return i ? String(i) : '';
  } : _props$itemToString,
      _props$popoverMaxHeig = props.popoverMaxHeight,
      popoverMaxHeight = _props$popoverMaxHeig === void 0 ? 240 : _props$popoverMaxHeig,
      _props$popoverMinWidt = props.popoverMinWidth,
      popoverMinWidth = _props$popoverMinWidt === void 0 ? 240 : _props$popoverMinWidt,
      allowOtherValues = props.allowOtherValues,
      restProps = _objectWithoutProperties(props, _excluded);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      targetWidth = _useState2[0],
      setTargetWidth = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      targetRef = _useState4[0],
      setTargetRef = _useState4[1];

  useEffect(function () {
    var boundingWidth = targetRef === null || targetRef === void 0 ? void 0 : targetRef.getBoundingClientRect().width;
    setTargetWidth(boundingWidth);
  }, [targetRef, setTargetWidth, props.items.length, props.id]);
  var stateReducer = useCallback(function (state, changes) {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
      return _objectSpread(_objectSpread({}, changes), {}, {
        highlightedIndex: props.items.indexOf(state.selectedItem)
      });
    }

    if (props.allowOtherValues && state.isOpen && !changes.isOpen) {
      return _objectSpread(_objectSpread({}, changes), {}, {
        selectedItem: changes.selectedItem || state.inputValue,
        inputValue: changes.selectedItem || state.inputValue
      });
    }

    return changes;
  }, [props.items, props.allowOtherValues]);
  return /*#__PURE__*/React.createElement(Downshift, _extends({
    stateReducer: stateReducer,
    scrollIntoView: noop,
    itemToString: itemToString,
    ref: ref
  }, restProps), function (_ref4) {
    var getItemProps = _ref4.getItemProps,
        getMenuProps = _ref4.getMenuProps,
        getRootProps = _ref4.getRootProps,
        highlightedIndex = _ref4.highlightedIndex,
        inputValue = _ref4.inputValue,
        isShown = _ref4.isOpen,
        selectedItem = _ref4.selectedItem,
        restDownshiftProps = _objectWithoutProperties(_ref4, _excluded2);

    return /*#__PURE__*/React.createElement("div", {
      style: containerStyle
    }, /*#__PURE__*/React.createElement(Popover, {
      bringFocusInside: false,
      isShown: isShown,
      minWidth: popoverMinWidth,
      position: position || (targetWidth < popoverMinWidth ? Position.BOTTOM_LEFT : Position.BOTTOM),
      content: /*#__PURE__*/React.createElement(AutocompleteItems, {
        getItemProps: getItemProps,
        getMenuProps: getMenuProps,
        highlightedIndex: highlightedIndex,
        inputValue: inputValue,
        isFilterDisabled: isFilterDisabled,
        itemsFilter: itemsFilter,
        itemSize: itemSize,
        itemToString: itemToString,
        originalItems: props.items,
        popoverMaxHeight: popoverMaxHeight,
        renderItem: renderItem,
        selectedItem: selectedItem,
        title: props.title,
        width: Math.max(targetWidth, popoverMinWidth)
      }),
      minHeight: 0,
      animationDuration: 0
    }, function (_ref5) {
      var _getRef = _ref5.getRef,
          isShownPopover = _ref5.isShown,
          toggle = _ref5.toggle;
      return children(_objectSpread({
        isShown: isShownPopover,
        toggle: toggle,
        getRef: function getRef(ref) {
          // Use the ref internally to determine the width
          setTargetRef(ref);

          _getRef(ref);
        },
        inputValue: inputValue,
        selectedItem: selectedItem,
        highlightedIndex: highlightedIndex
      }, restDownshiftProps));
    }));
  });
}));
Autocomplete.propTypes = _objectSpread({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * An array of items to be used as options for the select
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: PropTypes.any,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Function that will render the 'filter' component.
   */
  children: PropTypes.func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: PropTypes.number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: PropTypes.func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: PropTypes.func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: PropTypes.bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: PropTypes.number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: PropTypes.number,

  /**
   * Whether or not the input accepts arbitrary user input beyond the provided items
   */
  allowOtherValues: PropTypes.bool
}, Downshift.propTypes);
export default Autocomplete;