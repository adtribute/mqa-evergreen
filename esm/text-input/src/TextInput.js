import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "className", "disabled", "fontFamily", "isInvalid", "placeholder", "required", "spellCheck", "width"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import Box, { spacing, dimensions, position, layout } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers';
import { useTheme } from '../../theme';
var pseudoSelectors = {
  _focus: '&:focus',
  _disabled: '&:disabled',
  _invalid: '&[aria-invalid="true"]:not(:focus)',
  _placeholder: '&::placeholder',
  _placeholderHover: '&:hover::placeholder',
  _placeholderFocus: '&:focus::placeholder'
};
var internalStyles = {
  MozAppearance: 'none',
  outline: 'none',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  WebkitFontSmoothing: 'antialiased'
};
var TextInput = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function TextInput(props, ref) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'ui' : _props$fontFamily,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      placeholder = props.placeholder,
      required = props.required,
      _props$spellCheck = props.spellCheck,
      spellCheck = _props$spellCheck === void 0 ? true : _props$spellCheck,
      _props$width = props.width,
      width = _props$width === void 0 ? 280 : _props$width,
      restProps = _objectWithoutProperties(props, _excluded);

  var theme = useTheme();
  var fontFamilies = theme.fontFamilies;
  var themedFontFamily = fontFamilies[fontFamily] || fontFamily;
  var themedProps = useStyleConfig('Input', {
    appearance: appearance,
    size: restProps.size || 'medium'
  }, pseudoSelectors, internalStyles);
  var height = restProps.height || themedProps.height;
  var textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {};
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "input",
    className: className,
    type: "text",
    width: width,
    required: required,
    disabled: disabled,
    placeholder: placeholder,
    spellCheck: spellCheck,
    "aria-invalid": isInvalid,
    ref: ref,
    fontFamily: themedFontFamily
  }, themedProps, restProps, textProps, {
    height: height
  }));
}));
TextInput.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * Makes the input element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * The appearance of the TextInput.
   */
  appearance: PropTypes.string,

  /**
   * The width of the TextInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default TextInput;