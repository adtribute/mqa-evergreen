import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "isRemovable", "onRemove"];

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../../badges';
import { CrossIcon } from '../../icons';
import { minorScale } from '../../scales';
var badgeStyles = {
  alignItems: 'center',
  display: 'inline-flex',
  fontWeight: 400,
  borderRadius: 4,
  paddingX: 8,
  paddingY: 6,
  marginTop: 0,
  marginBottom: 0,
  textTransform: 'none'
};
var Tag = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Tag(props, ref) {
  var children = props.children,
      isRemovable = props.isRemovable,
      onRemove = props.onRemove,
      restProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Badge, _extends({
    ref: ref,
    isInteractive: true
  }, badgeStyles, {
    paddingRight: isRemovable ? minorScale(1) : undefined
  }, restProps), children, isRemovable && /*#__PURE__*/React.createElement(CrossIcon, {
    marginLeft: minorScale(1),
    onClick: onRemove,
    size: minorScale(3)
  }));
}));
Tag.propTypes = {
  /** The tag content */
  children: PropTypes.node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: PropTypes.func,

  /** Whether or not the tag can be removed. */
  isRemovable: PropTypes.bool
};
export default Tag;