import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "children", "className", "disabled", "icon", "is", "isActive", "isLoading", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { useStyleConfig } from '../../hooks';
import { CaretDownIcon } from '../../icons';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { Spinner } from '../../spinner';
import { internalStyles, pseudoSelectors } from './Button';
var TextDropdownButton = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function TextDropdownButton(props, ref) {
  var appearance = props.appearance,
    children = props.children,
    className = props.className,
    disabled = props.disabled,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? CaretDownIcon : _props$icon,
    _props$is = props.is,
    is = _props$is === void 0 ? 'button' : _props$is,
    _props$isActive = props.isActive,
    isActive = _props$isActive === void 0 ? false : _props$isActive,
    isLoading = props.isLoading,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    restProps = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('TextDropdownButton', {
    size: size
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: is,
    ref: ref,
    type: is === 'button' ? 'button' : undefined,
    className: className,
    "data-active": isActive || undefined
  }, themedProps, restProps, {
    disabled: disabled || isLoading
  }), isLoading && /*#__PURE__*/React.createElement(Spinner, {
    marginLeft: -2,
    marginRight: 4,
    size: 12
  }), children, /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon,
    marginLeft: 2,
    color: "default",
    size: 12
  }));
}));
TextDropdownButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,
  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default TextDropdownButton;