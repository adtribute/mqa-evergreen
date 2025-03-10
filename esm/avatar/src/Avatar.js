import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "color", "forceShowInitials", "getInitials", "hashValue", "name", "shape", "size", "sizeLimitOneCharacter", "src"];
import React, { useState, memo, forwardRef, useCallback } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { Image } from '../../image';
import { Text } from '../../typography';
import globalGetInitials from './utils/getInitials';
import globalHash from './utils/hash';
var imageStyles = {
  objectFit: 'cover'
};
var pseudoSelectors = {};
var internalStyles = {
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center'
};
var isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style;

var getAvatarInitialsFontSize = function getAvatarInitialsFontSize(size, sizeLimitOneCharacter) {
  if (size <= sizeLimitOneCharacter) {
    return Math.floor(size / 2.2);
  }

  return Math.floor(size / 2.6);
};

var Avatar = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Avatar(props, ref) {
  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'automatic' : _props$color,
      _props$forceShowIniti = props.forceShowInitials,
      forceShowInitials = _props$forceShowIniti === void 0 ? false : _props$forceShowIniti,
      _props$getInitials = props.getInitials,
      getInitials = _props$getInitials === void 0 ? globalGetInitials : _props$getInitials,
      propsHashValue = props.hashValue,
      name = props.name,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      _props$sizeLimitOneCh = props.sizeLimitOneCharacter,
      sizeLimitOneCharacter = _props$sizeLimitOneCh === void 0 ? 20 : _props$sizeLimitOneCh,
      src = props.src,
      restProps = _objectWithoutProperties(props, _excluded);

  var hashValue = globalHash(propsHashValue || name);
  var themedProps = useStyleConfig('Avatar', {
    color: color,
    hashValue: hashValue,
    shape: shape
  }, pseudoSelectors, internalStyles);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      imageHasFailedLoading = _useState2[0],
      setImageHasFailedLoading = _useState2[1];

  var onError = useCallback(function () {
    return setImageHasFailedLoading(true);
  }, []);
  var imageUnavailable = !src || imageHasFailedLoading;
  var initialsFontSize = "".concat(getAvatarInitialsFontSize(size, sizeLimitOneCharacter), "px");
  var initials = getInitials(name);

  if (size <= sizeLimitOneCharacter) {
    initials = initials.slice(0, 1);
  }

  return /*#__PURE__*/React.createElement(Box, _extends({
    width: size,
    height: size,
    title: name,
    ref: ref,
    className: className
  }, themedProps, restProps), (imageUnavailable || forceShowInitials) && /*#__PURE__*/React.createElement(Text, {
    top: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: initialsFontSize,
    lineHeight: initialsFontSize,
    width: size,
    height: size,
    color: "inherit"
  }, initials), !imageUnavailable && /*#__PURE__*/React.createElement(Image, {
    style: imageStyles // Unsupported by ui-box directly
    ,
    width: isObjectFitSupported ? '100%' : 'auto' // Fallback to old behaviour on IE
    ,
    height: "100%",
    src: src,
    onError: onError
  }));
}));
Avatar.propTypes = {
  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src: PropTypes.string,

  /**
   * The size of the avatar.
   */
  size: PropTypes.number,

  /**
   * The name used for the initials and title attribute.
   */
  name: PropTypes.string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: PropTypes.string,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: PropTypes.string,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: PropTypes.func,

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials: PropTypes.bool,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: PropTypes.number,

  /**
   * Allows for the shape of the avatar component to either be round or square
   */
  shape: PropTypes.oneOf(['round', 'square'])
};
export default Avatar;