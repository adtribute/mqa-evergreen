import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired", "name"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { spacing, position, layout, dimensions } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useId } from '../../hooks';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import Radio from './Radio';

var noop = function noop() {};

var emptyArray = [];
var emptyString = '';
var RadioGroup = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function RadioGroup(props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 12 : _props$size,
      label = props.label,
      defaultValue = props.defaultValue,
      value = props.value,
      _props$options = props.options,
      options = _props$options === void 0 ? emptyArray : _props$options,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      _props$isRequired = props.isRequired,
      isRequired = _props$isRequired === void 0 ? false : _props$isRequired,
      _props$name = props.name,
      name = _props$name === void 0 ? emptyString : _props$name,
      rest = _objectWithoutProperties(props, _excluded);

  var autoNameAttribute = useId('RadioGroup');
  var nameAttribute = name || autoNameAttribute;
  var selected = value || defaultValue || props.options[0].value;
  return /*#__PURE__*/React.createElement(Pane, _extends({
    role: "group",
    "aria-label": label
  }, rest, {
    ref: ref
  }), label && /*#__PURE__*/React.createElement(Text, {
    color: "muted",
    fontWeight: 500
  }, label), options.map(function (item) {
    return /*#__PURE__*/React.createElement(Radio, {
      key: item.value,
      size: size,
      name: nameAttribute,
      value: item.value,
      label: item.label,
      checked: selected === item.value,
      disabled: item.isDisabled,
      onChange: onChange,
      isRequired: isRequired
    });
  }));
}));
RadioGroup.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The options for the radios of the Radio Group.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool
  })).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: PropTypes.string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: PropTypes.string,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * Label to display above the radio button options.
   */
  label: PropTypes.string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool,

  /**
   * The name attribute for HTML radio button. Default to auto-generated string with 'RadioGroup' prefix
   */
  name: PropTypes.string
});
export default RadioGroup;