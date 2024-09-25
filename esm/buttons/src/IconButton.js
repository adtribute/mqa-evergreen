import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "icon", "iconSize"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { dimensions, spacing, position, layout } from 'ui-box';
import { useStyleConfig } from '../../hooks';
import { IconWrapper } from '../../icons/src/IconWrapper';
import Button, { getIconSizeForButton, internalStyles, pseudoSelectors } from './Button';
var IconButton = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function IconButton(props, ref) {
  var disabled = props.disabled,
    icon = props.icon,
    iconSize = props.iconSize,
    restProps = _objectWithoutProperties(props, _excluded);

  // modifiers
  var appearance = props.appearance,
    _props$intent = props.intent,
    intent = _props$intent === void 0 ? 'none' : _props$intent,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size;

  // Composes the exact same styles as button
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