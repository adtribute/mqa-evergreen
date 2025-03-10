import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fill", "size"],
    _excluded2 = ["id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box, { spacing, position, layout, dimensions } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { Text } from '../../typography';
var CircleIcon = /*#__PURE__*/memo(function CircleIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement("circle", {
    fill: fill,
    cx: "5",
    cy: "5",
    r: "5"
  }));
});
CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var noop = function noop() {};

var pseudoSelectors = {
  _base: '& + div',
  _disabled: '&[disabled] + div',
  _hover: '&:not([disabled]):hover + div',
  _focus: '&:not([disabled]):focus + div',
  _active: '&:not([disabled]):active + div',
  _checked: '&:checked + div,&[type=checkbox]:indeterminate + div',
  _checkedHover: '&:not([disabled]):checked:hover + div,&[type=checkbox]:not([disabled]):indeterminate:hover + div',
  _checkedActive: '&:not([disabled]):checked:active + div,&[type=checkbox]:not([disabled]):indeterminate:active + div',
  _checkedDisabled: '&[disabled]:checked + div,&[type=checkbox][disabled]:indeterminate + div'
};
var internalStyles = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
  opacity: '0',
  selectors: _defineProperty({}, pseudoSelectors._base, {
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  })
};
var Radio = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Radio(props, ref) {
  var id = props.id,
      name = props.name,
      label = props.label,
      disabled = props.disabled,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      checked = props.checked,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      value = props.value,
      _props$size = props.size,
      size = _props$size === void 0 ? 12 : _props$size,
      _props$isRequired = props.isRequired,
      isRequired = _props$isRequired === void 0 ? false : _props$isRequired,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      rest = _objectWithoutProperties(props, _excluded2);

  var themedProps = useStyleConfig('Radio', {
    appearance: appearance
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "label",
    ref: ref,
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: "relative",
    display: "flex",
    marginY: size === 12 ? 8 : 12
  }, rest), /*#__PURE__*/React.createElement(Box, _extends({
    is: "input",
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": isInvalid
  }, themedProps, {
    required: isRequired
  })), /*#__PURE__*/React.createElement(Box, {
    boxSizing: "border-box",
    borderRadius: 9999,
    display: "flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement(CircleIcon, {
    size: size / 2
  })), label && /*#__PURE__*/React.createElement(Text, {
    marginLeft: size === 12 ? 8 : 10,
    size: size === 12 ? 300 : 400,
    color: disabled ? 'muted' : 'default'
  }, label));
}));
Radio.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * Label of the radio.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: PropTypes.func,

  /**
   * When true, the radio is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the radio is checked.
   */
  checked: PropTypes.bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string
});
export default Radio;