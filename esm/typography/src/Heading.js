import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
var pseudoSelectors = {};
var internalStyles = {};
var Heading = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Heading(props, ref) {
  var className = props.className,
      _props$size = props.size,
      size = _props$size === void 0 ? 500 : _props$size,
      restProps = _objectWithoutProperties(props, _excluded);

  var themedProps = useStyleConfig('Heading', {
    size: size
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "h2",
    ref: ref,
    className: className,
    marginTop: 0,
    marginBottom: 0
  }, themedProps, restProps));
}));
Heading.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
});
export default Heading;