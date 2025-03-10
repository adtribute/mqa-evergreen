import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "appearance", "onClick", "onKeyPress", "onKeyDown", "isSelectable", "tabIndex", "className", "rightView", "arrowKeysOverrides"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLatest, useMergedRef, useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import safeInvoke from '../../lib/safe-invoke';
import { toaster } from '../../toaster';
import manageTableCellFocusInteraction from './manageTableCellFocusInteraction';

function executeArrowKeyOverride(override) {
  if (!override) {
    return;
  }

  if (typeof override === 'function') {
    override();
    return;
  }

  if (typeof override === 'string') {
    document.querySelector(override).focus();
    return;
  } // This needs to be the node, not a React ref.


  override.focus();
}

var pseudoSelectors = {
  _focus: '&[data-isselectable="true"]:focus,&[aria-expanded="true"][aria-haspopup="true"]'
};
var internalStyles = {
  boxSizing: 'border-box',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  overflow: 'hidden'
};
var TableCell = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function TableCell(props, forwardedRef) {
  var children = props.children,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      onClick = props.onClick,
      onKeyPress = props.onKeyPress,
      onKeyDown = props.onKeyDown,
      isSelectable = props.isSelectable,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? -1 : _props$tabIndex,
      className = props.className,
      rightView = props.rightView,
      arrowKeysOverrides = props.arrowKeysOverrides,
      rest = _objectWithoutProperties(props, _excluded);

  var cellRef = useRef(null);
  var handleRef = useMergedRef(cellRef, forwardedRef);
  var onKeyDownRef = useLatest(onKeyDown);
  var handleKeyDown = useCallback(function (e) {
    var arrowKeysOverrides = props.arrowKeysOverrides || {};

    if (isSelectable) {
      var key = e.key;

      if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
        e.preventDefault();

        try {
          // Support arrow key overrides.
          var override = arrowKeysOverrides[key.slice('Arrow'.length).toLowerCase()];
          if (override === false) return;
          if (override) return executeArrowKeyOverride(override);
          manageTableCellFocusInteraction(key, cellRef.current);
        } catch (error) {
          toaster.danger('Keyboard interaction not possible');
          console.error('Keyboard interaction not possible', error);
        }
      } else if (key === 'Escape') {
        if (cellRef.current instanceof Node) cellRef.current.blur();
      }
    }

    safeInvoke(onKeyDownRef.current, e);
  }, // onKeyDownRef.current is a ref
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isSelectable, props.arrowKeysOverrides]);
  var themedProps = useStyleConfig('TableCell', {
    appearance: appearance
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Pane, _extends({
    ref: handleRef,
    className: className,
    tabIndex: isSelectable ? tabIndex : undefined,
    "data-isselectable": isSelectable,
    onClick: onClick,
    onKeyDown: handleKeyDown
  }, themedProps, rest), children, rightView || null);
}));
TableCell.propTypes = _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /*
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string,

  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView: PropTypes.node,

  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides: PropTypes.shape({
    up: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    down: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default TableCell;