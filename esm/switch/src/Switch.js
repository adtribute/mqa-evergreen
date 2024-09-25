import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fill", "size"],
  _excluded2 = ["id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout } from 'ui-box';
import { useStyleConfig } from '../../hooks';
var animationEasing = {
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
var iconContainerStyles = {
  transition: "all 500ms ".concat(animationEasing.spring),
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  selectors: {
    '&[data-checked="true"]': {
      opacity: 1,
      transform: 'scale(1)'
    },
    '> svg': {
      transition: "all 500ms ".concat(animationEasing.spring),
      transform: 'scale(0)'
    },
    '&[data-checked="true"] > svg': {
      transform: 'scale(1)'
    }
  }
};
var handleContainerStyles = {
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  selectors: {
    '&[data-checked="true"]': {
      transform: 'translateX(50%)'
    }
  }
};
var CheckIcon = /*#__PURE__*/memo(function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
});
CheckIcon.propTypes = {
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
  _checked: '&:checked + div',
  _checkedHover: '&:checked:hover + div',
  _checkedActive: '&:not([disabled]):checked:active + div',
  _checkedDisabled: '&[disabled]:checked + div'
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
  selectors: _defineProperty({
    '& + div > svg': {
      display: 'none'
    }
  }, pseudoSelectors._base, {
    transition: 'all 120ms ease-in-out'
  })
};
var Switch = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Switch(props, ref) {
  var id = props.id,
    name = props.name,
    _props$height = props.height,
    height = _props$height === void 0 ? 16 : _props$height,
    _props$checked = props.checked,
    checked = _props$checked === void 0 ? false : _props$checked,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noop : _props$onChange,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$appearance = props.appearance,
    appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
    _props$hasCheckIcon = props.hasCheckIcon,
    hasCheckIcon = _props$hasCheckIcon === void 0 ? false : _props$hasCheckIcon,
    defaultChecked = props.defaultChecked,
    rest = _objectWithoutProperties(props, _excluded2);
  var themedProps = useStyleConfig('Switch', {
    appearance: appearance
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "label",
    display: "block",
    width: height * 2,
    position: "relative",
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(Box, _extends({
    is: "input",
    id: id,
    name: name
  }, themedProps, {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    defaultChecked: defaultChecked,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(Box, {
    height: height,
    width: height * 2,
    borderRadius: 9999,
    cursor: "pointer"
  }, /*#__PURE__*/React.createElement(Box, _extends({
    height: height,
    width: height,
    "data-checked": checked
  }, iconContainerStyles), hasCheckIcon && /*#__PURE__*/React.createElement(CheckIcon, {
    display: checked ? 'block' : undefined,
    size: height / 2 - 3
  })), /*#__PURE__*/React.createElement(Box, _extends({
    width: height * 2,
    display: "flex",
    "data-checked": checked
  }, handleContainerStyles), /*#__PURE__*/React.createElement(Box, {
    flex: 1,
    padding: 2
  }, /*#__PURE__*/React.createElement(Box, {
    width: height - 4,
    height: height - 4,
    backgroundColor: "#fff",
    borderRadius: 9999
  })))));
}));
Switch.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,
  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,
  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,
  /**
   * The height of the switch.
   */
  height: PropTypes.number,
  /**
   * When true, the switch is checked (on).
   */
  checked: PropTypes.bool,
  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,
  /**
   * When true, the switch is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * When true, the switch is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string,
  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: PropTypes.bool,
  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: PropTypes.bool
});
export default Switch;