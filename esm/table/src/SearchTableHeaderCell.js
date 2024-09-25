import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { SearchIcon } from '../../icons';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { Text } from '../../typography';
import TableHeaderCell from './TableHeaderCell';
var noop = function noop() {};

/**
 * This prop is non-standard, macOS specific and unsupported by ui-box. We probably don't need it,
 * but retaining it for backwards compatibility
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
 */
var style = {
  '-webkit-font-smoothing': 'antialiased'
};
var SearchTableHeaderCell = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function SearchTableHeaderCell(props, ref) {
  var value = props.value,
    children = props.children,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noop : _props$onChange,
    autoFocus = props.autoFocus,
    _props$spellCheck = props.spellCheck,
    spellCheck = _props$spellCheck === void 0 ? true : _props$spellCheck,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Filter...' : _props$placeholder,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? SearchIcon : _props$icon,
    rest = _objectWithoutProperties(props, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(TableHeaderCell, rest, /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon,
    color: "muted",
    marginLeft: 2,
    marginRight: 10,
    size: 12
  }), /*#__PURE__*/React.createElement(Text, {
    is: "input",
    size: 300,
    flex: "1",
    border: "none",
    backgroundColor: "transparent",
    appearance: "none",
    style: style,
    selectors: {
      '&:focus': {
        outline: 'none'
      },
      '&::placeholder': {
        color: 'rgba(67, 90, 111, 0.7)'
      }
    },
    value: value,
    onChange: handleChange,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    fontWeight: 500,
    marginLeft: -2,
    paddingLeft: 0,
    placeholder: placeholder,
    ref: ref
  }));
}));
SearchTableHeaderCell.propTypes = _objectSpread(_objectSpread({}, TableHeaderCell.propTypes), {}, {
  /**
   * The value of the input.
   */
  value: PropTypes.string,
  /**
   * Handler to be called when the input changes.
   */
  onChange: PropTypes.func,
  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: PropTypes.bool,
  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: PropTypes.bool,
  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: PropTypes.string,
  /**
   * The Evergreen or custom icon before the label.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element])
});
export default SearchTableHeaderCell;