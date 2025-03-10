import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "children", "className", "disabled", "icon", "is", "isActive", "isLoading", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box, { dimensions, spacing, position, layout } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { CaretDownIcon } from '../../icons';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { Spinner } from '../../spinner';
import { internalStyles, pseudoSelectors } from './Button';
var TextDropdownButton = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function TextDropdownButton(props, ref) {
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