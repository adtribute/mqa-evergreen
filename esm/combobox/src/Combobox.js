import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["autocompleteProps", "buttonProps", "height", "initialSelectedItem", "inputProps", "isLoading", "itemToString", "items", "onChange", "openOnFocus", "placeholder", "selectedItem", "size", "width"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { dimensions, spacing, position, layout } from 'ui-box';
import { Autocomplete } from '../../autocomplete';
import { IconButton } from '../../buttons';
import { Group } from '../../group';
import { CaretDownIcon } from '../../icons';
import { TextInput } from '../../text-input';
var Combobox = /*#__PURE__*/memo(function Combobox(props) {
  var autocompleteProps = props.autocompleteProps,
    buttonProps = props.buttonProps,
    height = props.height,
    initialSelectedItem = props.initialSelectedItem,
    inputProps = props.inputProps,
    _props$isLoading = props.isLoading,
    isLoading = _props$isLoading === void 0 ? false : _props$isLoading,
    itemToString = props.itemToString,
    items = props.items,
    onChange = props.onChange,
    _props$openOnFocus = props.openOnFocus,
    openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
    placeholder = props.placeholder,
    selectedItem = props.selectedItem,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$width = props.width,
    width = _props$width === void 0 ? 240 : _props$width,
    rest = _objectWithoutProperties(props, _excluded);
  var disabled = props.disabled || isLoading;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenedByButton = _useState2[0],
    setIsOpenedByButton = _useState2[1];
  var handleStateChange = useCallback(function (changes, stateAndHelpers) {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      if (!changes.isOpen) {
        setIsOpenedByButton(false);
      }
    }
    if (autocompleteProps && typeof autocompleteProps.onStateChange === 'function') {
      autocompleteProps.onStateChange(changes, stateAndHelpers);
    }
  }, [autocompleteProps]);
  return /*#__PURE__*/React.createElement(Autocomplete, _extends({
    items: items,
    selectedItem: selectedItem,
    initialSelectedItem: initialSelectedItem,
    itemToString: itemToString,
    onChange: onChange,
    isFilterDisabled: isOpenedByButton
  }, autocompleteProps, {
    onStateChange: handleStateChange
  }), function (_ref) {
    var clearSelection = _ref.clearSelection,
      getInputProps = _ref.getInputProps,
      getRef = _ref.getRef,
      getToggleButtonProps = _ref.getToggleButtonProps,
      inputValue = _ref.inputValue,
      isShown = _ref.isShown,
      openMenu = _ref.openMenu;
    return /*#__PURE__*/React.createElement(Group, _extends({
      ref: getRef,
      size: size,
      width: width
    }, rest), /*#__PURE__*/React.createElement(TextInput, _extends({
      width: 0,
      flex: 1,
      height: height,
      value: inputValue,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      disabled: disabled
    }, getInputProps(_objectSpread(_objectSpread({}, inputProps), {}, {
      placeholder: placeholder,
      onFocus: function onFocus() {
        if (openOnFocus) openMenu();
      },
      onChange: function onChange(e) {
        if (isOpenedByButton) {
          setIsOpenedByButton(false);
        }
        if (e.target.value.trim() === '') {
          // Prevent the selected item from sticking around
          clearSelection();
        }
      }
    })))), /*#__PURE__*/React.createElement(IconButton, _extends({
      color: "muted",
      icon: isLoading ? undefined : CaretDownIcon,
      appearance: "default",
      height: height,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: -1,
      paddingLeft: isLoading ? 12 : 0,
      paddingRight: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      disabled: disabled,
      isLoading: isLoading
    }, getToggleButtonProps(_objectSpread(_objectSpread({}, buttonProps), {}, {
      onClick: function onClick() {
        if (!isShown) {
          setIsOpenedByButton(true);
        }
      }
    })))));
  });
});
Combobox.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The options to show in the menu.
   */
  items: PropTypes.array.isRequired,
  /**
   * The selected item when controlled.
   */
  selectedItem: PropTypes.any,
  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,
  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: PropTypes.bool,
  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: PropTypes.any,
  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,
  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,
  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: PropTypes.object,
  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: PropTypes.object,
  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: PropTypes.object,
  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,
  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
});
export default Combobox;