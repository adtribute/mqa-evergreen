import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "children", "className", "color", "disabled", "iconAfter", "iconBefore", "intent", "is", "isActive", "isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box, { spacing, dimensions, position, layout } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers';
import { Spinner } from '../../spinner';
/* eslint-disable react/prop-types */

var ButtonIcon = /*#__PURE__*/memo(function ButtonIcon(_ref) {
  var edge = _ref.edge,
      icon = _ref.icon,
      size = _ref.size,
      spacing = _ref.spacing;
  if (!icon) return null;
  var relativeSpace = typeof spacing === 'number' ? spacing : size;
  var edgeMargin = -Math.round(relativeSpace * 0.25);
  var innerMargin = Math.round(size * 0.7);
  var marginLeft = edge === 'start' ? edgeMargin : innerMargin;
  var marginRight = edge === 'end' ? edgeMargin : innerMargin;
  return /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon,
    size: size,
    marginLeft: marginLeft,
    marginRight: marginRight
  });
});
/* eslint-enable react/prop-types */

export var internalStyles = {
  position: 'relative',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  textDecoration: 'none',
  verticalAlign: 'middle',
  border: 'none',
  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none'
};
export var pseudoSelectors = {
  _active: '&:not([disabled]):active,&:not([disabled])[aria-expanded="true"],&:not([disabled])[data-active]',
  _disabled: '&[disabled]',
  _focus: '&:not([disabled]):focus',
  _focusAndActive: '&:not([disabled]):focus:active,&:not([disabled])[aria-expanded="true"]:focus,&:not([disabled])[data-active]:focus',
  _hover: '&:not([disabled]):hover'
};
export var getIconSizeForButton = function getIconSizeForButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 14;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};
var Button = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Button(props, ref) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      iconAfter = props.iconAfter,
      iconBefore = props.iconBefore,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$is = props.is,
      is = _props$is === void 0 ? 'button' : _props$is,
      _props$isActive = props.isActive,
      isActive = _props$isActive === void 0 ? false : _props$isActive,
      isLoading = props.isLoading,
      restProps = _objectWithoutProperties(props, _excluded);

  var themedProps = useStyleConfig('Button', {
    appearance: appearance,
    color: color,
    intent: intent,
    size: restProps.size || 'medium'
  }, pseudoSelectors, internalStyles);
  var height = restProps.height || themedProps.height; // Keep backwards compat font sizing if an explicit height was passed in.

  var textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {};
  var iconSize = getIconSizeForButton(height);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: is,
    ref: ref,
    className: className,
    "data-active": isActive || undefined
  }, themedProps, restProps, textProps, {
    disabled: disabled || isLoading
  }), isLoading && /*#__PURE__*/React.createElement(Spinner, {
    marginLeft: -Math.round(height / 8),
    marginRight: Math.round(height / 4),
    size: Math.round(height / 2)
  }), /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: iconBefore,
    size: iconSize,
    spacing: restProps.paddingLeft,
    edge: "start"
  }), children, /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: iconAfter,
    size: iconSize,
    spacing: restProps.paddingRight,
    edge: "end"
  }));
}));
Button.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The intent of the button.
   */
  intent: PropTypes.string,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.string,

  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: PropTypes.bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjunction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default Button;