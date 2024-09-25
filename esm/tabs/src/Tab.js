import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "direction", "disabled", "is", "isSelected", "onKeyDown", "onSelect", "height", "className", "tabIndex"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { forwardRef, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useClickable, useLatest, useStyleConfig } from '../../hooks';
import safeInvoke from '../../lib/safe-invoke';
import warning from '../../lib/warning';
import { Text } from '../../typography';
var noop = function noop() {};
var getInternalStyles = function getInternalStyles(direction) {
  return {
    alignItems: 'center',
    justifyContent: direction === 'horizontal' ? 'center' : 'flex-start',
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 'none',
    WebkitFontSmoothing: 'antialiased',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    display: direction === 'horizontal' ? 'inline-flex' : 'flex',
    width: direction === 'horizontal' ? 'auto' : '100%'
  };
};
var pseudoSelectors = {
  _active: '&:active',
  _after: '&:after',
  _before: '&:before',
  _current: '&[aria-current="page"],&[aria-selected="true"]',
  _disabled: '&[aria-disabled="true"]',
  _focus: '&:focus',
  _hover: '&:hover'
};
var Tab = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Tab(props, ref) {
  var _props$appearance = props.appearance,
    appearance = _props$appearance === void 0 ? 'secondary' : _props$appearance,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$is = props.is,
    is = _props$is === void 0 ? 'span' : _props$is,
    isSelected = props.isSelected,
    _props$onKeyDown = props.onKeyDown,
    onKeyDown = _props$onKeyDown === void 0 ? noop : _props$onKeyDown,
    _props$onSelect = props.onSelect,
    onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
    _props$height = props.height,
    height = _props$height === void 0 ? 28 : _props$height,
    className = props.className,
    tabIndex = props.tabIndex,
    rest = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('Tab', {
    appearance: appearance,
    direction: direction
  }, pseudoSelectors, getInternalStyles(direction));
  var onClickRef = useLatest(props.onClick);
  var handleClick = useCallback(function (event) {
    safeInvoke(onClickRef.current, event);
    if (!disabled) {
      onSelect();
    }
  },
  // onClickRef is a ref, but eslint can't figure that out
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [disabled, onSelect]);
  var clickableProps = useClickable({
    disabled: disabled,
    onKeyDown: onKeyDown,
    tabIndex: tabIndex
  });
  if (process.env.NODE_ENV !== 'production') {
    warning(typeof props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.');
  }
  var elementBasedProps;
  if (disabled) {
    elementBasedProps = {
      'aria-disabled': true
    };
  }
  if (is === 'a') {
    // Use aria-current when it's a link
    // https://tink.uk/using-the-aria-current-attribute/
    elementBasedProps = isSelected ? _objectSpread(_objectSpread({}, elementBasedProps), {}, {
      'aria-current': 'page'
    }) : {};
  } else {
    // Use a role="tablist" around the tabs
    // Also pass down a aria-controls="panelId"
    // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
    elementBasedProps = _objectSpread(_objectSpread({}, elementBasedProps), {}, {
      'aria-selected': isSelected,
      role: 'tab'
    });
  }
  return /*#__PURE__*/React.createElement(Text, _extends({
    className: className,
    is: is,
    size: 300,
    height: height,
    ref: ref,
    tabIndex: 0
  }, themedProps, rest, {
    onClick: handleClick
  }, clickableProps, elementBasedProps));
}));
Tab.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * Function triggered when tab is selected.
   */
  onSelect: PropTypes.func,
  /**
   * When true, the tab is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * The appearance of the tab.
   * The default theme has primary, and secondary. The default is secondary
   */
  appearance: PropTypes.string,
  /**
   * The directionality of the tab.
   * If the tab is apart of a vertical or horizontal list
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Class name passed to the Tab.
   * Only use this if you know what you are doing.
   */
  className: PropTypes.string
});
export default Tab;