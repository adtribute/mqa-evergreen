import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "aria-describedby", "autoFocus", "children", "defaultValue", "disabled", "height", "id", "isInvalid", "name", "onChange", "required", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box, { dimensions, spacing, position, layout } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { CaretDownIcon } from '../../icons';
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers';
var internalStyles = {
  textTransform: 'default',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  flex: 1,
  background: 'none',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer'
};
var pseudoSelectors = {
  _disabled: '[disabled]',
  _invalid: '&[aria-invalid="true"]',
  _hover: '&:not([disabled]):hover',
  _focus: '&:not([disabled]):focus',
  _active: '&:not([disabled]):active'
};

var getIconSizeForSelect = function getIconSizeForSelect(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 14; // Slightly bigger than getIconSizeForButton

  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};

var Select = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Select(props, ref) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      ariaDescribedby = props['aria-describedby'],
      autoFocus = props.autoFocus,
      children = props.children,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      heightProp = props.height,
      id = props.id,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      name = props.name,
      onChange = props.onChange,
      required = props.required,
      value = props.value,
      restProps = _objectWithoutProperties(props, _excluded);

  var themedProps = useStyleConfig('Select', {
    appearance: appearance,
    size: restProps.size || 'medium'
  }, pseudoSelectors, internalStyles);
  var height = heightProp || themedProps.height;
  var textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {};
  var iconSize = getIconSizeForSelect(height);
  var iconMargin = height >= 36 ? 12 : 8;
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "inline-flex",
    flex: 1,
    position: "relative",
    width: "auto",
    height: height
  }, restProps, textProps), /*#__PURE__*/React.createElement(Box, _extends({
    is: "select",
    ref: ref,
    id: id,
    name: name,
    onChange: onChange,
    defaultValue: defaultValue,
    value: value,
    required: required,
    autoFocus: autoFocus,
    disabled: disabled,
    "aria-invalid": String(isInvalid),
    paddingLeft: Math.round(height / 3.2),
    paddingRight: iconMargin * 2 + iconSize
  }, themedProps, {
    height: "100%",
    "aria-describedby": ariaDescribedby
  }), children), /*#__PURE__*/React.createElement(CaretDownIcon, {
    color: "default",
    size: iconSize,
    position: "absolute",
    top: "50%",
    marginTop: -iconSize / 2,
    right: iconMargin,
    pointerEvents: "none"
  }));
}));
Select.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The id attribute for the select.
   */
  id: PropTypes.string,

  /**
   * The name attribute for the select.
   */
  name: PropTypes.string,

  /**
   * The options that are passed to the select.
   */
  children: PropTypes.node,

  /**
   * The initial value of an uncontrolled select
   */
  defaultValue: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * The value of the select.
   */
  value: PropTypes.any,

  /**
   * When true, the select is required.
   */
  required: PropTypes.bool,

  /**
   * When true, the select should auto focus.
   */
  autoFocus: PropTypes.bool,

  /**
   * When true, the select is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance: PropTypes.string
});
export default Select;