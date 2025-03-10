import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["description", "disabled", "isInvalid", "isLoading", "name", "onRemove", "sizeInBytes", "src", "type", "validationMessage"];
import React, { memo, forwardRef } from 'react';
import Box from '@maestroqa/ui-box';
import humanize from 'humanize-plus';
import PropTypes from 'prop-types';
import { IconButton } from '../../buttons';
import { useStyleConfig } from '../../hooks';
import { InfoSignIcon, TrashIcon } from '../../icons';
import { Image } from '../../image';
import { Card } from '../../layers';
import hasValue from '../../lib/has-value';
import isFunction from '../../lib/is-function';
import { majorScale } from '../../scales';
import { Spinner } from '../../spinner';
import { useTheme } from '../../theme';
import { Paragraph } from '../../typography';
import getIconFromType from './utils/get-icon-from-type';
import isImage from './utils/is-image';
var imageSize = majorScale(5);
var styleModifiers = {};
var pseudoSelectors = {
  _invalid: "&[aria-invalid='true']"
};
var internalStyles = {};
var FileCard = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (props, ref) {
  var description = props.description,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$isInvalid = props.isInvalid,
      isInvalid = _props$isInvalid === void 0 ? false : _props$isInvalid,
      _props$isLoading = props.isLoading,
      isLoading = _props$isLoading === void 0 ? false : _props$isLoading,
      name = props.name,
      onRemove = props.onRemove,
      sizeInBytes = props.sizeInBytes,
      src = props.src,
      type = props.type,
      validationMessage = props.validationMessage,
      rest = _objectWithoutProperties(props, _excluded);

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var themedProps = useStyleConfig('FileCard', styleModifiers, pseudoSelectors, internalStyles);
  var FileTypeIcon = getIconFromType(type);
  var renderImage = hasValue(src) && isImage(type);
  var renderInvalidIcon = !isLoading && isInvalid;
  var renderDefaultIcon = !isLoading && !isInvalid;
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref,
    display: "flex",
    flexDirection: "column",
    marginBottom: isInvalid ? majorScale(1) : majorScale(2)
  }, /*#__PURE__*/React.createElement(Box, _extends({
    "aria-invalid": isInvalid
  }, themedProps, rest), /*#__PURE__*/React.createElement(Box, {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%"
  }, /*#__PURE__*/React.createElement(Box, {
    marginLeft: majorScale(2),
    marginRight: majorScale(1)
  }, renderImage ? /*#__PURE__*/React.createElement(Image, {
    height: imageSize,
    src: src,
    width: imageSize
  }) : /*#__PURE__*/React.createElement(Card, {
    alignItems: "center",
    backgroundColor: isInvalid || isLoading ? undefined : colors.gray90,
    display: "flex",
    height: majorScale(5),
    justifyContent: "center",
    width: majorScale(5)
  }, isLoading && /*#__PURE__*/React.createElement(Spinner, {
    size: majorScale(2)
  }), renderInvalidIcon && /*#__PURE__*/React.createElement(InfoSignIcon, {
    color: colors.red500,
    size: majorScale(2)
  }), renderDefaultIcon && /*#__PURE__*/React.createElement(FileTypeIcon, {
    color: colors.gray600,
    size: majorScale(2)
  }))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  }, /*#__PURE__*/React.createElement(Paragraph, {
    color: colors.gray800,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }, name), /*#__PURE__*/React.createElement(Paragraph, {
    color: colors.gray700,
    size: 300
  }, hasValue(description) ? description : humanize.fileSize(sizeInBytes, 0))), isFunction(onRemove) && /*#__PURE__*/React.createElement(IconButton, {
    appearance: "minimal",
    disabled: disabled || isLoading,
    icon: TrashIcon,
    onClick: onRemove,
    marginLeft: "auto",
    marginRight: majorScale(2),
    type: "button"
  }))), hasValue(validationMessage) && /*#__PURE__*/React.createElement(Paragraph, {
    color: colors.red500,
    size: "small"
  }, validationMessage));
}));
FileCard.propTypes = {
  /**
   * Description to display under the file name. If not provided, defaults to the file size
   */
  description: PropTypes.string,

  /**
   * Disables the button to remove the file
   */
  disabled: PropTypes.bool,

  /**
   * When true, displays the card in an error state
   */
  isInvalid: PropTypes.bool,

  /**
   * Sets a loading state on the card. If the remove button is rendered, it will be disabled
   */
  isLoading: PropTypes.bool,

  /**
   * Name of the file to display
   */
  name: PropTypes.string,

  /**
   * Callback to be fired when the remove button is clicked. If not provided, the button will not
   * render
   */
  onRemove: PropTypes.func,

  /**
   * Size of the file
   */
  sizeInBytes: PropTypes.number,

  /**
   * Url of the uploaded image
   */
  src: PropTypes.string,

  /**
   * MimeType of the file to display, which controls what type of icon is rendered
   */
  type: PropTypes.string,

  /**
   * Message to display underneath the card
   */
  validationMessage: PropTypes.string
};
export default FileCard;