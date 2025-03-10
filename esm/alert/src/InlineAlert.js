import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "hasIcon", "intent", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import { spacing, dimensions, position, layout } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { getIconForIntent } from './getIconForIntent';
var pseudoSelectors = {};
var internalStyles = {
  display: 'flex',
  alignItems: 'center'
};
var InlineAlert = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function InlineAlert(props, ref) {
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