import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyDown", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"],
    _excluded2 = ["height"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useClickable, useLatest, useMergedRef, useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import safeInvoke from '../../lib/safe-invoke';
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction';

var noop = function noop() {};

export var pseudoSelectors = {
  _hover: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
  _focus: '&[data-isselectable="true"]:not([aria-checked="true"]):not([aria-current="true"]):focus,&[aria-selected="true"]',
  _active: '&[aria-current="true"],&[data-isselectable="true"]:active',
  _current: '&[aria-current="true"],&[aria-checked="true"]',
  _lastOfType: '&:last-of-type',
  _isSelectable: '&[data-isselectable="true"]'
};
var internalStyles = {
  display: 'flex'
};
var TableRow = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function TableRow(props, forwardedRef) {
  var className = props.className,
      children = props.children,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? -1 : _props$tabIndex,
      onClick = props.onClick,
      _props$onKeyDown = props.onKeyDown,
      onKeyDown = _props$onKeyDown === void 0 ? noop : _props$onKeyDown,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      _props$onDeselect = props.onDeselect,
      onDeselect = _props$onDeselect === void 0 ? noop : _props$onDeselect,
      isHighlighted = props.isHighlighted,
      isSelectable = props.isSelectable,
      isSelected = props.isSelected,
      rest = _objectWithoutProperties(props, _excluded);

  var mainRef = useRef();
  var onRef = useMergedRef(mainRef, forwardedRef);
  var onClickRef = useLatest(onClick);
  var onKeyDownRef = useLatest(onKeyDown);
  var onDeselectRef = useLatest(onDeselect);
  var onSelectRef = useLatest(onSelect);
  var handleClick = useCallback(function (event) {
    safeInvoke(onClickRef.current, event);

    if (isSelectable) {
      if (isSelected) {
        safeInvoke(onDeselectRef.current);
      } else {
        safeInvoke(onSelectRef.current);
      }
    }
  }, // These "missing" deps are all refs
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isSelected, isSelectable]);
  var handleKeyDown = useCallback(function (event) {
    safeInvoke(onKeyDownRef.current, event);

    if (isSelectable) {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        try {
          manageTableRowFocusInteraction(event.key, mainRef.current);
        } catch (_) {}
      } else if (event.key === 'Escape') {
        if (mainRef.current && mainRef.current instanceof Node) mainRef.current.blur();
      }
    }
  }, // These "missing" deps are all refs
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isSelectable]);
  var clickable = useClickable({
    onKeyDown: handleKeyDown,
    tabIndex: tabIndex
  });

  var _useStyleConfig = useStyleConfig('TableRow', {
    appearance: appearance,
    intent: intent
  }, pseudoSelectors, internalStyles),
      themeHeight = _useStyleConfig.height,
      themedProps = _objectWithoutProperties(_useStyleConfig, _excluded2);

  var height = rest.height || themeHeight;
  return /*#__PURE__*/React.createElement(Pane, _extends({
    ref: onRef,
    className: className,
    "aria-selected": isHighlighted,
    "aria-current": isSelected,
    "data-isselectable": isSelectable,
    tabIndex: isSelectable ? clickable.tabIndex : undefined,
    onClick: handleClick,
    onKeyDown: clickable.onKeyDown,
    borderBottom: "muted",
    height: height
  }, themedProps, rest), children);
}));
TableRow.propTypes = _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: PropTypes.func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * The intent of the alert.
   */
  intent: PropTypes.string,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default TableRow;