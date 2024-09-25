import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "disabled", "fontFamily", "grammarly", "height", "isInvalid", "placeholder", "required", "spellCheck", "width"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, dimensions, position, layout } from 'ui-box';
import { useStyleConfig } from '../../hooks';
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
  WebkitFontSmoothing: 'antialiased',
  minHeight: 80,
  paddingX: 12,
  paddingY: 8,
  borderRadius: 4
};
var Textarea = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Textarea(props, ref) {
  var className = props.className,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$fontFamily = props.fontFamily,
    fontFamily = _props$fontFamily === void 0 ? 'ui' : _props$fontFamily,
    _props$grammarly = props.grammarly,
    grammarly = _props$grammarly === void 0 ? false : _props$grammarly,
    height = props.height,
    _props$isInvalid = props.isInvalid,
    isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
    placeholder = props.placeholder,
    required = props.required,
    _props$spellCheck = props.spellCheck,
    spellCheck = _props$spellCheck === void 0 ? true : _props$spellCheck,
    _props$width = props.width,
    width = _props$width === void 0 ? '100%' : _props$width,
    restProps = _objectWithoutProperties(props, _excluded);
  var theme = useTheme();
  var fontFamilies = theme.fontFamilies;
  var themedFontFamily = fontFamilies[fontFamily] || fontFamily;
  var themedProps = useStyleConfig('Input', {
    appearance: 'default'
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "textarea",
    ref: ref,
    className: className,
    width: width,
    height: height,
    required: required,
    disabled: disabled,
    placeholder: placeholder,
    spellCheck: spellCheck,
    "aria-invalid": isInvalid,
    "data-gramm_editor": grammarly,
    fontFamily: themedFontFamily
  }, themedProps, restProps));
}));
Textarea.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * Makes the textarea element required.
   */
  required: PropTypes.bool,
  /**
   * Makes the textarea element disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,
  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,
  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: PropTypes.bool,
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
export default Textarea;