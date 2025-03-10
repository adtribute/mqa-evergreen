import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "icon", "iconSize"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { dimensions, spacing, position, layout } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { IconWrapper } from '../../icons/src/IconWrapper';
import Button, { getIconSizeForButton, internalStyles, pseudoSelectors } from './Button';
var IconButton = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function IconButton(props, ref) {
  var disabled = props.disabled,
      icon = props.icon,
      iconSize = props.iconSize,
      restProps = _objectWithoutProperties(props, _excluded); // modifiers


  var appearance = props.appearance,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size; // Composes the exact same styles as button

  var themedProps = useStyleConfig('Button', {
    appearance: appearance,
    intent: intent,
    size: size
  }, pseudoSelectors, internalStyles);
  var height = restProps.height || themedProps.height;
  var relativeIconSize = getIconSizeForButton(height);
  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref,
    paddingLeft: 0,
    paddingRight: 0,
    flex: "none",
    height: height,
    width: height,
    minWidth: height,
    disabled: disabled
  }, restProps), /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon,
    color: intent === 'none' && !disabled ? 'default' : 'currentColor',
    size: iconSize || relativeIconSize
  }));
}));
IconButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The Evergreen icon or custom icon to render
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.string,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']),

  /**
   * Forcefully set the active state of a button.
   * Useful in conjunction with a Popover.
   */
  isActive: PropTypes.bool,

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
export default IconButton;