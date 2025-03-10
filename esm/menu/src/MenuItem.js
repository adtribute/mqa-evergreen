import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["is", "children", "className", "appearance", "disabled", "secondaryText", "intent", "icon", "onSelect"];
import React, { memo, forwardRef, useMemo, useCallback } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useClickable, useStyleConfig } from '../../hooks';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { Pane } from '../../layers';
import { Text } from '../../typography';

var noop = function noop() {};

var pseudoSelectors = {
  _hover: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
  _focus: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):focus,&[aria-selected="true"]',
  _active: '&[aria-current="true"],&[data-isselectable="true"]:active',
  _current: '&[aria-current="true"],&[aria-checked="true"]',
  _isSelectable: '&[data-isselectable="true"]',
  _disabled: '&:disabled,&[aria-disabled="true"]'
};
var internalStyles = {
  display: 'flex',
  alignItems: 'center'
};
var MenuItem = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function MenuItem(props, ref) {
  var _props$is = props.is,
      is = _props$is === void 0 ? 'div' : _props$is,
      children = props.children,
      className = props.className,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      disabled = props.disabled,
      secondaryText = props.secondaryText,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      icon = props.icon,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      passthroughProps = _objectWithoutProperties(props, _excluded);

  var handleClick = useCallback(function (event) {
    if (disabled) return;
    onSelect(event);
  }, [disabled, onSelect]); // Pass all props, so the hook can handled `disabled`, `onKeyDown`, `tabIndex`
  // and any other explicit props that are passed through to the underlying component

  var _useClickable = useClickable(props),
      onKeyDown = _useClickable.onKeyDown,
      tabIndex = _useClickable.tabIndex;

  var themedProps = useStyleConfig('MenuItem', {
    appearance: appearance
  }, pseudoSelectors, internalStyles);
  var iconColor = intent === 'none' ? 'default' : intent;

  if (disabled) {
    iconColor = 'muted';
  }

  var textColor = disabled ? 'muted' : intent;
  var secondaryTextColor = 'muted';
  var disabledProps = useMemo(function () {
    return disabled ? {
      backgroundColor: 'tint1',
      cursor: 'not-allowed',
      disabled: true,
      onClick: null,
      onKeyPress: null,
      tabIndex: -1,
      'aria-disabled': 'true',
      'data-isselectable': 'false'
    } : {};
  }, [disabled]);
  return /*#__PURE__*/React.createElement(Pane, _extends({
    is: is,
    role: "menuitem",
    className: className,
    onClick: handleClick,
    "data-isselectable": !disabled || undefined,
    "aria-disabled": disabled,
    ref: ref,
    height: icon ? 40 : 32
  }, themedProps, passthroughProps, disabledProps, {
    tabIndex: tabIndex,
    onKeyDown: onKeyDown
  }), /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon,
    color: iconColor,
    marginLeft: 16,
    marginRight: -4,
    size: 16,
    flexShrink: 0
  }), /*#__PURE__*/React.createElement(Text, {
    color: textColor,
    marginLeft: 16,
    marginRight: 16,
    flex: 1
  }, children), secondaryText && /*#__PURE__*/React.createElement(Text, {
    marginRight: 16,
    color: secondaryTextColor
  }, secondaryText));
}));
MenuItem.propTypes = {
  /**
   * Element type to use for the menu item.
   * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
   */
  is: Box.propTypes.is,

  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * The children of the component.
   */
  children: PropTypes.node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: PropTypes.node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: PropTypes.string,

  /**
   * The intent of the menu item.
   */
  intent: PropTypes.string,

  /**
   * Flag to indicate whether the menu item is disabled or not
   */
  disabled: PropTypes.bool
};
export default MenuItem;