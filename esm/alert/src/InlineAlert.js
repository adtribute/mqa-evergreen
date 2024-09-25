import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "hasIcon", "intent", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { spacing, dimensions, position, layout } from 'ui-box';
import { useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { getIconForIntent } from './getIconForIntent';
var pseudoSelectors = {};
var internalStyles = {
  display: 'flex',
  alignItems: 'center'
};
var InlineAlert = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function InlineAlert(props, ref) {
  var children = props.children,
    className = props.className,
    _props$hasIcon = props.hasIcon,
    hasIcon = _props$hasIcon === void 0 ? true : _props$hasIcon,
    _props$intent = props.intent,
    intent = _props$intent === void 0 ? 'info' : _props$intent,
    _props$size = props.size,
    size = _props$size === void 0 ? 400 : _props$size,
    restProps = _objectWithoutProperties(props, _excluded);
  var intentToken = intent === 'none' ? 'info' : intent;
  var themedProps = useStyleConfig('InlineAlert', {
    intent: intentToken
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Pane, _extends({
    ref: ref,
    className: className
  }, themedProps, restProps), hasIcon && /*#__PURE__*/React.createElement(Pane, {
    display: "flex",
    marginRight: 16
  }, getIconForIntent(intent, {
    size: 16
  })), /*#__PURE__*/React.createElement(Text, {
    size: size,
    lineHeight: 1,
    fontWeight: 500,
    color: "inherit"
  }, children));
}));
InlineAlert.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The content of the alert.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: PropTypes.string,
  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: PropTypes.bool,
  /**
   * The size of the Text.
   */
  size: PropTypes.number
});
export default InlineAlert;