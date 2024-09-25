import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["activeElevation", "background", "border", "borderBottom", "borderLeft", "borderRight", "borderTop", "className", "elevation", "hoverElevation"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useStyleConfig } from '../../hooks';

// Temporary type alias to satisfy TS, may be extracted to a shared types directory later

var pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active'
};
var internalStyles = {};
var _Pane = function _Pane(props, ref) {
  var activeElevation = props.activeElevation,
    background = props.background,
    border = props.border,
    borderBottom = props.borderBottom,
    borderLeft = props.borderLeft,
    borderRight = props.borderRight,
    borderTop = props.borderTop,
    className = props.className,
    elevation = props.elevation,
    hoverElevation = props.hoverElevation,
    restProps = _objectWithoutProperties(props, _excluded);
  var themedProps = useStyleConfig('Pane', {
    // @ts-expect-error TS(2345): Argument of type '{ elevation: Elevation | undefin... Remove this comment to see the full error message
    elevation: elevation,
    hoverElevation: hoverElevation,
    activeElevation: activeElevation,
    background: background,
    border: border,
    borderTop: borderTop,
    borderRight: borderRight,
    borderBottom: borderBottom,
    borderLeft: borderLeft,
    className: className
  }, pseudoSelectors, internalStyles);

  // @ts-expect-error TS(2322): Type '{ selectors: SelectorMap | undefined; style:... Remove this comment to see the full error message
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    className: className
  }, themedProps, restProps));
};
_Pane.displayName = "_Pane";
var Pane = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(_Pane));

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
Pane.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors` are available.
   */
  background: PropTypes.string,
  /**
   * Elevation of the Pane.
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /**
   * Elevation of the Pane on hover. Might get deprecated.
   */
  hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /**
   * Elevation of the Pane on click. Might get deprecated.
   */
  activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /**
   * Can be an explicit border value or a boolean.
   */
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * Can be an explicit border value or a boolean.
   */
  borderTop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * Can be an explicit border value or a boolean.
   */
  borderRight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * Can be an explicit border value or a boolean.
   */
  borderBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * Can be an explicit border value or a boolean.
   */
  borderLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
});
export default Pane;