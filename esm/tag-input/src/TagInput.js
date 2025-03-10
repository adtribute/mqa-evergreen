import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["addOnBlur", "disabled", "height", "separator", "values", "tagSubmitKey", "tagProps", "onAdd", "onChange", "onRemove", "onBlur", "onFocus", "onInputChange", "className", "inputProps", "inputRef", "isInvalid", "autocompleteItems"],
    _excluded2 = ["onBlur", "onChange", "onKeyDown"];

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React, { memo, forwardRef, useState } from 'react';
import Box from '@maestroqa/ui-box';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import { Autocomplete } from '../../autocomplete';
import { Button } from '../../buttons';
import { useId, useStyleConfig } from '../../hooks';
import { CaretDownIcon } from '../../icons';
import safeInvoke from '../../lib/safe-invoke';
import { majorScale, minorScale } from '../../scales';
import { TextInput } from '../../text-input';
import Tag from './Tag';
var GET_KEY_FOR_TAG_DELIMITER = {
  enter: 'Enter',
  space: ' '
};
var emptyProps = {};
var emptyArray = [];
var internalStyles = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap',
  position: 'relative'
};
var pseudoSelectors = {
  _focused: '&[aria-activedescendant]',
  _disabled: '&[aria-disabled="true"]',
  _invalid: '&[aria-invalid="true"]:not(:focus)'
};
var TagInput = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function TagInput(props, ref) {
  var _props$addOnBlur = props.addOnBlur,
      addOnBlur = _props$addOnBlur === void 0 ? false : _props$addOnBlur,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? /[,\n\r]/ : _props$separator,
      _props$values = props.values,
      values = _props$values === void 0 ? emptyArray : _props$values,
      _props$tagSubmitKey = props.tagSubmitKey,
      tagSubmitKey = _props$tagSubmitKey === void 0 ? 'enter' : _props$tagSubmitKey,
      _props$tagProps = props.tagProps,
      tagProps = _props$tagProps === void 0 ? emptyProps : _props$tagProps,
      onAdd = props.onAdd,
      onChange = props.onChange,
      onRemove = props.onRemove,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onInputChange = props.onInputChange,
      className = props.className,
      _props$inputProps = props.inputProps,
      inputProps = _props$inputProps === void 0 ? emptyProps : _props$inputProps,
      inputRef = props.inputRef,
      isInvalid = props.isInvalid,
      autocompleteItems = props.autocompleteItems,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var id = useId('TagInput');
  var autocompleteId = "TagInputAutocomplete-".concat(values.length);
  var inputId = inputProps && inputProps.id ? inputProps.id : id;
  var hasAutocomplete = Array.isArray(autocompleteItems) && autocompleteItems.length > 0;

  var getValues = function getValues() {
    var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    inputValue = inputValue || '';
    return separator ? inputValue.split(separator).map(function (v) {
      return v.trim();
    }).filter(function (v) {
      return v.length > 0;
    }) : [inputValue];
  };

  var addTags = function addTags() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var newValues = getValues(value);
    var shouldClearInput = safeInvoke(onAdd, newValues);

    if (typeof onChange === 'function') {
      shouldClearInput = shouldClearInput || onChange(values.concat(newValues));
    }

    if (shouldClearInput !== false) {
      setInputValue('');
    }
  };

  var removeTagAtIndex = function removeTagAtIndex(index) {
    safeInvoke(onRemove, values[index], index); // Remove item at index as a new array

    var newValues = values.filter(function (_, i) {
      return i !== index;
    });
    safeInvoke(onChange, newValues);
  };

  var handleBackspaceToRemove = function handleBackspaceToRemove() {
    removeTagAtIndex(values.length - 1);
  };

  var handleBlur = function handleBlur(event) {
    var container = event.target;
    requestAnimationFrame(function () {
      if (!container.contains(document.activeElement)) {
        if (addOnBlur && inputValue) {
          addTags(inputValue);
          setInputValue('');
        }

        setIsFocused(false);
      }
    });
    safeInvoke(onBlur, event);
  };

  var handleInputChange = function handleInputChange(event) {
    setInputValue(event.target.value);
    safeInvoke(onInputChange, event);
  };

  var handleInputFocus = function handleInputFocus(event) {
    setIsFocused(true);
    safeInvoke(onFocus, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    var _event$target = event.target,
        selectionEnd = _event$target.selectionEnd,
        value = _event$target.value;
    var key = GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey];

    if (event.key === key) {
      event.preventDefault();
      addTags(value);
    } else if (event.key === 'Backspace' && selectionEnd === 0) {
      handleBackspaceToRemove(event);
    }
  };

  var handleRemoveTag = function handleRemoveTag(event) {
    // Using data attribute to simplify callback logic -- one handler for all children
    var index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'));
    removeTagAtIndex(index);
  };

  var maybeRenderTag = function maybeRenderTag(tag, index) {
    if (!tag) {
      return null;
    }

    var propsForElement = safeInvoke(tagProps, tag, index) || tagProps;
    return /*#__PURE__*/React.createElement(Tag, _extends({
      key: "".concat(tag, ":").concat(index),
      "data-tag-index": index,
      marginX: majorScale(1),
      marginY: minorScale(1) * 1.5,
      onRemove: disabled ? null : handleRemoveTag,
      isRemovable: !disabled
    }, propsForElement), tag);
  };

  var themedProps = useStyleConfig('TagInput', {
    appearance: 'default',
    height: height
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Box, _extends({
    "aria-disabled": disabled || undefined,
    "aria-activedescendant": isFocused ? inputId : undefined,
    "aria-invalid": isInvalid,
    className: className,
    ref: ref,
    onBlur: handleBlur
  }, themedProps, rest, {
    paddingRight: hasAutocomplete ? majorScale(3) : undefined
  }), /*#__PURE__*/React.createElement(Box, {
    flexGrow: "1",
    display: "inline-block"
  }, /*#__PURE__*/React.createElement(Autocomplete, {
    onChange: function onChange(changedItem) {
      addTags(changedItem);
      setInputValue('');
    },
    items: hasAutocomplete ? autocompleteItems : [],
    id: autocompleteId,
    selectedItem: "",
    inputValue: inputValue
  }, function (autocompleteProps) {
    var closeMenu = autocompleteProps.closeMenu,
        getInputProps = autocompleteProps.getInputProps,
        autocompleteGetRef = autocompleteProps.getRef,
        getToggleButtonProps = autocompleteProps.getToggleButtonProps,
        highlightedIndex = autocompleteProps.highlightedIndex;

    var _getInputProps = getInputProps(),
        autocompleteOnBlur = _getInputProps.onBlur,
        autocompleteOnChange = _getInputProps.onChange,
        autocompleteKeyDown = _getInputProps.onKeyDown,
        autocompleteRestProps = _objectWithoutProperties(_getInputProps, _excluded2);

    var handleAutocompleteKeydown = function handleAutocompleteKeydown(e) {
      autocompleteKeyDown(e);

      if (e.key === 'Backspace' || !(highlightedIndex > -1)) {
        handleKeyDown(e);

        if (e.key === GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey]) {
          closeMenu();
          setInputValue('');
        }
      }

      if (e.key === 'Backspace' && e.target.selectionEnd === 0) {
        closeMenu();
      }
    };

    return /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      ref: function ref(boxInputRef) {
        autocompleteGetRef(boxInputRef);
      },
      flexWrap: "wrap",
      width: inputProps.width
    }, values.map(maybeRenderTag), /*#__PURE__*/React.createElement(TextInput, _extends({
      appearance: "none",
      disabled: disabled,
      height: height - 4,
      flexGrow: "1",
      type: "text"
    }, omit(inputProps, ['width']), autocompleteRestProps, {
      value: inputValue,
      id: inputId,
      ref: function ref(textInputRef) {
        if (inputRef instanceof Function) {
          inputRef(textInputRef);
        } else if (inputRef) {
          inputRef.current = textInputRef;
        }
      },
      onBlur: function onBlur(e) {
        autocompleteOnBlur(e);
        safeInvoke(inputProps.onBlur, e);
      },
      onFocus: function onFocus(e) {
        handleInputFocus(e);
        safeInvoke(inputProps.onFocus, e);
      },
      onChange: function onChange(e) {
        handleInputChange(e);
        autocompleteOnChange(e);
      },
      onKeyDown: handleAutocompleteKeydown
    })), hasAutocomplete && /*#__PURE__*/React.createElement(Button, _extends({
      appearance: "none",
      background: "gray100",
      position: "absolute",
      top: minorScale(1) * 1.5,
      right: minorScale(1),
      height: minorScale(5),
      padding: 0,
      width: minorScale(5),
      minWidth: minorScale(5),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: minorScale(1),
      cursor: disabled ? undefined : 'pointer',
      "data-testid": "TagInput-autocomplete-toggle"
    }, getToggleButtonProps()), /*#__PURE__*/React.createElement(CaretDownIcon, {
      color: "muted"
    })));
  })));
}));
TagInput.propTypes = {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: PropTypes.bool,

  /** Autocomplete options to show when typing in a new value */
  autocompleteItems: PropTypes.array,

  /** The class name to apply to the container component. */
  className: PropTypes.string,

  /** Whether or not the input should be disabled. */
  disabled: PropTypes.bool,

  /** Whether or not the input is invalid. */
  isInvalid: PropTypes.bool,

  /** The vertical size of the input */
  height: PropTypes.number,

  /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
  inputProps: PropTypes.object,

  /**
   * Ref handler for the input element.
   * (input: HTMLInputElement | null) => void
   */
  inputRef: PropTypes.func,

  /**
   * Callback invoked when new tags are added.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onAdd: PropTypes.func,

  /**
   * Callback invoked when focus on the input blurs.
   * (event) => void
   */
  onBlur: PropTypes.func,

  /**
   * Callback invoked when the tag values change.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onChange: PropTypes.func,

  /**
   * Callback invoked when the input receives focus.
   * (event) => void
   */
  onFocus: PropTypes.func,

  /**
   * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
   * (event) => void
   */
  onInputChange: PropTypes.func,

  /**
   * Callback invoked when a tag is removed.
   * Receives value and index of removed tag.
   * (value: string | node, index: number) => void
   */
  onRemove: PropTypes.func,

  /** Value or RegExp to split on pasted text or on enter keypress */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp), PropTypes.oneOf([false])]),

  /** Provide props to tag component (actually `Badge`, for now). */
  tagProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /** Key to press in order to submit a new tag while typing.  */
  tagSubmitKey: PropTypes.oneOf(['enter', 'space']),

  /** Controlled tag values. Each value is rendered inside a tag. */
  values: PropTypes.arrayOf(PropTypes.node)
};
export default TagInput;