import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "size"];
import React, { memo, forwardRef } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
var pseudoSelectors = {
  _child: '& > *',
  _firstChild: '& > :first-child:not(:last-child)',
  _middleChild: '& > :not(:first-child):not(:last-child)',
  _lastChild: '& > :last-child:not(:first-child)'
};
var internalStyles = {
  display: 'inline-flex'
};
/**
 * Accessible `Group` component to identify a set of inputs/elements. Implements the WAI-ARIA Group Role
 * @see {@link https://www.w3.org/TR/wai-aria-1.1/#group}
 */

var Group = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Group(props, ref) {
  var children = props.children,
      className = props.className,
      size = props.size,
      restProps = _objectWithoutProperties(props, _excluded);

  var themedProps = useStyleConfig('Group', {
    size: size
  }, pseudoSelectors, internalStyles);
  var enhancedChildren = React.Children.map(children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return child;
    }

    return /*#__PURE__*/React.cloneElement(child, {
      // Prefer more granularly defined props if present
      size: child.props.size || size
    });
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    className: className,
    role: "group",
    ref: ref
  }, themedProps, restProps), enhancedChildren);
}));
Group.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * The size passed down to children (for consistency)
   */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
export default Group;