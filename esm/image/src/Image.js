import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
var Image = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Image(props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "img"
  }, props, {
    ref: ref
  }));
}));
Image.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  src: PropTypes.string
});
export default Image;