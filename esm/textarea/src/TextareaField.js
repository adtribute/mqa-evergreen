import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "description", "disabled", "hint", "id", "inputHeight", "inputWidth", "isInvalid", "label", "placeholder", "required", "resize", "spellCheck", "validationMessage"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import { useId } from '../../hooks';
import { generateAriaDescribedBy } from '../../lib/generate-aria-describedby';
import Textarea from './Textarea';
var TextareaField = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function TextareaField(props, ref) {
  var id = useId('TextareaField', props.id);
  var appearance = props.appearance,
    description = props.description,
    disabled = props.disabled,
    hint = props.hint,
    unusedId = props.id,
    _props$inputHeight = props.inputHeight,
    inputHeight = _props$inputHeight === void 0 ? 80 : _props$inputHeight,
    _props$inputWidth = props.inputWidth,
    inputWidth = _props$inputWidth === void 0 ? '100%' : _props$inputWidth,
    isInvalid = props.isInvalid,
    label = props.label,
    placeholder = props.placeholder,
    required = props.required,
    resize = props.resize,
    spellCheck = props.spellCheck,
    validationMessage = props.validationMessage,
    rest = _objectWithoutProperties(props, _excluded);

  /**
   * Split the wrapper props from the input props.
   */
  var _splitBoxProps = splitBoxProps(rest),
    matchedProps = _splitBoxProps.matchedProps,
    remainingProps = _splitBoxProps.remainingProps;
  return /*#__PURE__*/React.createElement(FormField, _extends({
    marginBottom: 24,
    label: label,
    isRequired: required,
    hint: hint,
    description: description,
    validationMessage: validationMessage,
    labelFor: id
  }, matchedProps), /*#__PURE__*/React.createElement(Textarea, _extends({
    id: id,
    ref: ref,
    width: inputWidth,
    height: inputHeight,
    disabled: disabled,
    required: required,
    isInvalid: isInvalid,
    appearance: appearance,
    placeholder: placeholder,
    spellCheck: spellCheck,
    resize: resize,
    "aria-describedby": generateAriaDescribedBy(id, {
      description: description,
      hint: hint,
      validationMessage: validationMessage
    })
  }, remainingProps)));
}));
TextareaField.propTypes = _objectSpread(_objectSpread(_objectSpread({}, Textarea.propTypes), FormField.propTypes), {}, {
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,
  /**
   * Whether or not to show an asterix after the label.
   */
  required: PropTypes.bool,
  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,
  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,
  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node,
  /**
   * The height of the input element.
   */
  inputHeight: PropTypes.number,
  /**
   * The width of the input width.
   */
  inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
});
export default TextareaField;