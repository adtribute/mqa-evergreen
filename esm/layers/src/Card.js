import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import { useStyleConfig } from '../../hooks';
import Pane from './Pane';
var emptyObject = {};
var Card = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function Card(_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var themedProps = useStyleConfig('Card', emptyObject, emptyObject, emptyObject);
  return /*#__PURE__*/React.createElement(Pane, _extends({
    className: className
  }, themedProps, props, {
    ref: ref
  }));
}));
Card.propTypes = _objectSpread({}, Pane.propTypes);
export default Card;