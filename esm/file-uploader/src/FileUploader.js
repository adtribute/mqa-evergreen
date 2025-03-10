import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["acceptedMimeTypes", "browseOrDragText", "dragMaxFilesMessage", "description", "disabled", "hint", "isRequired", "label", "labelFor", "maxFiles", "maxSizeInBytes", "onAccepted", "onChange", "onRejected", "onRemove", "renderFile", "validationMessage", "values"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef, useState, useRef, useCallback } from 'react';
import Box from '@maestroqa/ui-box';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import { Key } from '../../constants';
import { FormField } from '../../form-field';
import { useStyleConfig } from '../../hooks';
import { UploadIcon } from '../../icons';
import arrayToCsv from '../../lib/array-to-csv';
import isFunction from '../../lib/is-function';
import safeInvoke from '../../lib/safe-invoke';
import { majorScale } from '../../scales';
import { useTheme } from '../../theme';
import BrowseOrDragText from './BrowseOrDragText';
import FileCard from './FileCard';
import getFileDataTransferItems from './utils/get-file-data-transfer-items';
import { getMaxFilesMessage } from './utils/messages';
import splitFiles from './utils/split-files';
var UploaderState = {
  Initial: 'initial',
  Dragging: 'dragging',
  Error: 'error'
};
var disabledPseudoSelector = "&[aria-disabled='true']";
var dragHoverPseudoSelector = "&[data-state='".concat(UploaderState.Dragging, "']");
var invalidPseudoSelector = "&[aria-invalid='true']";
var hoverPseudoSelector = "&:hover:not(".concat(disabledPseudoSelector, "):not(").concat(dragHoverPseudoSelector, "):not(").concat(invalidPseudoSelector, ")");
var hoverBrowseCopyPseudoSelector = "".concat(hoverPseudoSelector, " span:first-of-type");
var styleModifiers = {};
var pseudoSelectors = {
  _focus: '&:focus',
  _hover: hoverPseudoSelector,
  _hoverBrowseCopy: hoverBrowseCopyPseudoSelector,
  _hoverOrDragCopy: "".concat(hoverPseudoSelector, " span:last-of-type:not(").concat(hoverBrowseCopyPseudoSelector, ")"),
  _dragHover: dragHoverPseudoSelector,
  _disabled: disabledPseudoSelector,
  _invalid: invalidPseudoSelector
};
var internalStyles = {};
var FileUploader = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (props, ref) {
  var acceptedMimeTypes = props.acceptedMimeTypes,
      browseOrDragText = props.browseOrDragText,
      _props$dragMaxFilesMe = props.dragMaxFilesMessage,
      dragMaxFilesMessage = _props$dragMaxFilesMe === void 0 ? getMaxFilesMessage : _props$dragMaxFilesMe,
      description = props.description,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      hint = props.hint,
      isRequired = props.isRequired,
      label = props.label,
      labelFor = props.labelFor,
      maxFiles = props.maxFiles,
      maxSizeInBytes = props.maxSizeInBytes,
      onAccepted = props.onAccepted,
      onChange = props.onChange,
      onRejected = props.onRejected,
      onRemove = props.onRemove,
      renderFile = props.renderFile,
      validationMessageProp = props.validationMessage,
      values = props.values,
      rest = _objectWithoutProperties(props, _excluded);

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var themedProps = useStyleConfig('FileUploader', styleModifiers, pseudoSelectors, internalStyles);

  var _useState = useState(UploaderState.Initial),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      validationMessage = _useState4[0],
      setValidationMessage = _useState4[1];
  /**
   * The underlying <input type="file" /> DOM element won't accept the same file after it has been
   * picked unless it is rerendered manually - if a user selects and removes a file, they should
   * still be able to pick it again without refreshing the page.
   * https://stackoverflow.com/a/45846251
   */


  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      fileInputKey = _useState6[0],
      setFileInputKey = _useState6[1];

  var fileInputRef = useRef(null); // If the dropzone is meant to be a single file input and we already have a file, don't render
  // the dropzone which will always result in rejected files/errors.

  var renderDropzone = maxFiles !== 1 || isEmpty(values);
  var resetState = useCallback(function () {
    setState(UploaderState.Initial);
    setValidationMessage('');
  }, []);
  var handleChange = useCallback(
  /**
   * @param {FileList} fileList
   */
  function (fileList) {
    setFileInputKey(function (prev) {
      return prev + 1;
    });

    if (isEmpty(fileList)) {
      safeInvoke(onChange, []);
      return;
    }

    var files = _toConsumableArray(fileList);

    safeInvoke(onChange, files);

    var _splitFiles = splitFiles(files, {
      maxSizeInBytes: maxSizeInBytes,
      acceptedMimeTypes: acceptedMimeTypes,
      currentFileCount: values === null || values === void 0 ? void 0 : values.length,
      maxFiles: maxFiles
    }),
        accepted = _splitFiles.accepted,
        rejected = _splitFiles.rejected;

    if (!isEmpty(accepted)) {
      safeInvoke(onAccepted, accepted);
    }

    if (!isEmpty(rejected)) {
      safeInvoke(onRejected, rejected);
    }
  }, [acceptedMimeTypes, maxFiles, maxSizeInBytes, onAccepted, onChange, onRejected, values === null || values === void 0 ? void 0 : values.length]);
  var handleClick = useCallback(function () {
    if (disabled) {
      return;
    }

    if (fileInputRef.current == null) {
      return;
    }

    fileInputRef.current.click();
  }, [disabled]);
  var handleDragOver = useCallback(
  /**
   * @param {React.DragEvent<HTMLDivElement>} event
   */
  function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';

    if (disabled) {
      return;
    }

    var dragItems = getFileDataTransferItems(event.dataTransfer.items);
    var draggingCount = dragItems.length;

    var _ref = values !== null && values !== void 0 ? values : [],
        currentCount = _ref.length;

    if (maxFiles == null || maxFiles < 0) {
      setState(UploaderState.Dragging);
      return;
    }

    if (draggingCount > maxFiles || draggingCount + currentCount > maxFiles) {
      setValidationMessage(dragMaxFilesMessage(maxFiles));
      setState(UploaderState.Error);
      return;
    }

    setState(UploaderState.Dragging);
  }, [disabled, dragMaxFilesMessage, maxFiles, values]);
  var handleDragLeave = useCallback(function () {
    return resetState();
  }, [resetState]);
  var handleDrop = useCallback(
  /**
   * @param {React.DragEvent<HTMLDivElement>} event
   */
  function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (disabled) {
      return;
    }

    resetState();
    handleChange(event.dataTransfer.files);
  }, [disabled, handleChange, resetState]);
  var handleInputChange = useCallback(
  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  function (event) {
    // Theoretically the input should not be accessible at all when disabled,
    // but this should act as a safeguard
    if (disabled) {
      return;
    }

    handleChange(event.target.files);
  }, [disabled, handleChange]);
  var handleKeyDown = useCallback(
  /**
   * @param {React.KeyboardEvent<HTMLDivElement>} event
   */
  function (event) {
    if (event.key !== Key.Enter && event.key !== Key.Space) {
      return;
    }

    event.preventDefault();
    handleClick();
  }, [handleClick]);
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref
  }, /*#__PURE__*/React.createElement(FormField, {
    label: label,
    labelFor: labelFor,
    description: description,
    hint: hint,
    isRequired: isRequired // Always override the validationMessage from prop if we have a message to display from dragging
    ,
    validationMessage: !isEmpty(validationMessage) ? validationMessage : validationMessageProp
  }, renderDropzone && /*#__PURE__*/React.createElement(Box, _extends({
    "aria-disabled": disabled,
    "aria-invalid": state === UploaderState.Error,
    "data-state": state,
    onClick: handleClick,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onKeyDown: handleKeyDown,
    tabIndex: disabled ? undefined : 0
  }, themedProps, rest), /*#__PURE__*/React.createElement(Box, {
    accept: arrayToCsv(acceptedMimeTypes),
    display: "none",
    is: "input",
    tabIndex: -1,
    key: fileInputKey,
    multiple: maxFiles !== 1,
    onChange: handleInputChange,
    ref: fileInputRef,
    type: "file"
  }), /*#__PURE__*/React.createElement(Box, {
    alignItems: "center",
    backgroundColor: disabled ? colors.gray90 : colors.gray200,
    borderRadius: "50%",
    display: "flex",
    height: majorScale(7),
    justifyContent: "center",
    pointerEvents: "none",
    width: majorScale(7)
  }, /*#__PURE__*/React.createElement(UploadIcon, {
    color: disabled ? colors.gray400 : colors.gray500,
    size: majorScale(3)
  })), /*#__PURE__*/React.createElement(BrowseOrDragText, {
    disabled: disabled,
    maxFiles: maxFiles,
    browseOrDragText: browseOrDragText
  }))), /*#__PURE__*/React.createElement(Box, {
    marginTop: majorScale(2)
  }, values === null || values === void 0 ? void 0 : values.map(
  /**
   * @param {File} file
   * @param {number} index
   */
  function (file, index) {
    return isFunction(renderFile) ? renderFile(file, index) : /*#__PURE__*/React.createElement(FileCard, {
      key: "".concat(file.name, "-").concat(index),
      name: file.name,
      onRemove: isFunction(onRemove) ? function () {
        return onRemove(file);
      } : undefined,
      sizeInBytes: file.size,
      type: file.type
    });
  })));
}));
FileUploader.propTypes = _objectSpread(_objectSpread({}, FormField.propTypes), {}, {
  /**
   * MIME types (not file extensions) to accept
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
   */
  acceptedMimeTypes: PropTypes.array,

  /**
   * Function to return a string or component for the 'Browse or drag' text
   * @type {(maxFiles: number) => React.ReactNode}
   */
  browseOrDragText: PropTypes.func,

  /**
   * When true, displays a disabled state where drops don't fire and the native browser picker doesn't open
   */
  disabled: PropTypes.bool,

  /**
   * Function to return a string when the max file limit has been hit while dragging
   * @default You can upload up to {count} {file|files}.
   * @type {(maxFiles: number) => string}
   */
  dragMaxFilesMessage: PropTypes.func,

  /**
   * Maximum number of files to accept
   */
  maxFiles: PropTypes.number,

  /**
   * Maximum size of an **individual** file to accept
   */
  maxSizeInBytes: PropTypes.number,

  /**
   * Callback for when files are accepted via drop or the native browser picker
   * @type {(files: File[]) => void}
   */
  onAccepted: PropTypes.func,

  /**
   * Callback for when files are added via drop or the native browser picker, which includes both
   * the accepted and rejected files
   * @type {(files: File[]) => void}
   */
  onChange: PropTypes.func,

  /**
   * Callback for when files are rejected via drop or the native browser picker
   * @type {(fileRejections: FileRejection[]) => void}
   */
  onRejected: PropTypes.func,

  /**
   * Callback to fire when a file should be removed
   * @type {(file: File) => void}
   */
  onRemove: PropTypes.func,

  /**
   * Custom render function for displaying the file underneath the uploader
   * @type {(file: File, index: number) => React.ReactNode}
   */
  renderFile: PropTypes.func,

  /**
   * File values to render underneath the uploader
   * @type {File}
   */
  values: PropTypes.array
});
export default FileUploader;