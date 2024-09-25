import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "children", "className", "hasIcon", "intent", "isRemoveable", "onRemove", "title"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { spacing, dimensions, position, layout } from 'ui-box';
import { IconButton } from '../../buttons';
import { useStyleConfig } from '../../hooks';
import { CrossIcon } from '../../icons';
import { Pane } from '../../layers';
import { Heading, Paragraph } from '../../typography';
import { getIconForIntent } from './getIconForIntent';
var pseudoSelectors = {};
var internalStyles = {
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  // 15 instead of 16 in order to maintain height with 1px border
  padding: '15px'
};
var Alert = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Alert(props, ref) {
  var _props$appearance = props.appearance,
    appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
    children = props.children,
    className = props.className,
    _props$hasIcon = props.hasIcon,
    hasIcon = _props$hasIcon === void 0 ? true : _props$hasIcon,
    _props$intent = props.intent,
    intent = _props$intent === void 0 ? 'info' : _props$intent,
    _props$isRemoveable = props.isRemoveable,
    isRemoveable = _props$isRemoveable === void 0 ? false : _props$isRemoveable,
    onRemove = props.onRemove,
    title = props.title,
    restProps = _objectWithoutProperties(props, _excluded);
  var intentToken = intent === 'none' ? 'info' : intent;
  var themedProps = useStyleConfig('Alert', {
    appearance: appearance,
    intent: intentToken
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Pane, _extends({
    ref: ref,
    className: className,
    role: "alert"
  }, themedProps, restProps), hasIcon && /*#__PURE__*/React.createElement(Pane, {
    marginRight: 16,
    marginLeft: 2,
    marginTop: -1,
    display: "flex",
    alignItems: "flex-start"
  }, getIconForIntent(intentToken, {
    size: 16
  })), /*#__PURE__*/React.createElement(Pane, {
    flex: 1
  }, title && /*#__PURE__*/React.createElement(Heading, {
    is: "h4",
    size: 400,
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 500,
    lineHeight: 1
    // Get this from the theme / props on the Alert
    ,
    color: "inherit"
  }, title), typeof children === 'string' ? /*#__PURE__*/React.createElement(Paragraph, {
    size: 400,
    color: "muted",
    marginTop: title ? 8 : 0,
    lineHeight: 1
  }, children) : /*#__PURE__*/React.createElement(Pane, null, children)), isRemoveable && /*#__PURE__*/React.createElement(Pane, {
    marginLeft: 24,
    flexShrink: 0,
    marginBottom: -4,
    marginTop: -5,
    marginRight: -4
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: CrossIcon,
    appearance: "minimal",
    height: 24,
    onClick: onRemove,
    intent: intentToken
  })));
}));
Alert.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The intent of the alert.
   */
  intent: PropTypes.string,
  /**
   * The title of the alert.
   */
  title: PropTypes.node,
  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: PropTypes.bool,
  /**
   * When true, show a remove icon button.
   */
  isRemoveable: PropTypes.bool,
  /**
   * Function called when the remove button is clicked.
   */
  onRemove: PropTypes.func,
  /**
   * The appearance of the alert.
   */
  appearance: PropTypes.oneOf(['default', 'card'])
});
export default Alert;