import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["title", "width", "height", "options", "onSelect", "onDeselect", "onFilterChange", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect", "itemRenderer", "itemHeight", "shouldAutoFocus"];
import React, { memo, useMemo } from 'react';
import arrify from 'arrify';
import PropTypes from 'prop-types';
import { Position } from '../../constants';
import { SearchIcon } from '../../icons';
import { Popover } from '../../popover';
import OptionShapePropType from './OptionShapePropType';
import SelectedPropType from './SelectedPropType';
import SelectMenuContent from './SelectMenuContent';

var noop = function noop() {};

var SelectMenu = /*#__PURE__*/memo(function SelectMenu(props) {
  var title = props.title,
      _props$width = props.width,
      width = _props$width === void 0 ? 240 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 248 : _props$height,
      options = props.options,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      _props$onDeselect = props.onDeselect,
      onDeselect = _props$onDeselect === void 0 ? noop : _props$onDeselect,
      onFilterChange = props.onFilterChange,
      selected = props.selected,
      _props$position = props.position,
      position = _props$position === void 0 ? Position.BOTTOM_LEFT : _props$position,
      hasTitle = props.hasTitle,
      hasFilter = props.hasFilter,
      _props$filterPlacehol = props.filterPlaceholder,
      filterPlaceholder = _props$filterPlacehol === void 0 ? 'Filter...' : _props$filterPlacehol,
      _props$filterIcon = props.filterIcon,
      filterIcon = _props$filterIcon === void 0 ? SearchIcon : _props$filterIcon,
      detailView = props.detailView,
      emptyView = props.emptyView,
      titleView = props.titleView,
      _props$isMultiSelect = props.isMultiSelect,
      isMultiSelect = _props$isMultiSelect === void 0 ? false : _props$isMultiSelect,
      _props$closeOnSelect = props.closeOnSelect,
      closeOnSelect = _props$closeOnSelect === void 0 ? false : _props$closeOnSelect,
      itemRenderer = props.itemRenderer,
      itemHeight = props.itemHeight,
      shouldAutoFocus = props.shouldAutoFocus,
      rest = _objectWithoutProperties(props, _excluded);

  var selectedArray = useMemo(function () {
    return arrify(selected);
  }, [selected]);
  return /*#__PURE__*/React.createElement(Popover, _extends({
    minWidth: width,
    position: position,
    minHeight: height,
    content: function content(_ref) {
      var close = _ref.close;
      return /*#__PURE__*/React.createElement(SelectMenuContent, {
        width: width,
        height: height,
        options: options,
        title: title,
        hasFilter: hasFilter,
        filterPlaceholder: filterPlaceholder,
        filterIcon: filterIcon,
        hasTitle: hasTitle,
        isMultiSelect: isMultiSelect,
        titleView: titleView,
        listProps: {
          onSelect: onSelect,
          onDeselect: onDeselect,
          onFilterChange: onFilterChange,
          selected: selectedArray,
          renderItem: itemRenderer,
          optionSize: itemHeight,
          shouldAutoFocus: shouldAutoFocus
        },
        close: close,
        detailView: typeof detailView === 'function' ? detailView({
          close: close
        }) : detailView,
        emptyView: typeof emptyView === 'function' ? emptyView({
          close: close
        }) : emptyView,
        closeOnSelect: closeOnSelect
      });
    }
  }, rest));
});
SelectMenu.propTypes = {
  /**
   * The title of the Select Menu.
   */
  title: PropTypes.string,

  /**
   * The width of the Select Menu.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The height of the Select Menu.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: PropTypes.arrayOf(OptionShapePropType),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: PropTypes.func,

  /**
   * The selected value/values.
   */
  selected: SelectedPropType,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, show the title.
   */
  hasTitle: PropTypes.bool,

  /**
   * When true, show the filter.
   */
  hasFilter: PropTypes.bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: PropTypes.string,

  /**
   * The icon of the search filter.
   */
  filterIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: PropTypes.func,

  /**
   * The position of the Select Menu.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * Can pass a method that can be used to render custom items in the
   * select menu
   */
  itemRenderer: PropTypes.func,

  /**
   * The height of the items in the select menu list
   */
  itemHeight: PropTypes.number,

  /**
   * When true, menu auto focuses on the search/filter bar.
   */
  shouldAutoFocus: PropTypes.bool
};
export default SelectMenu;