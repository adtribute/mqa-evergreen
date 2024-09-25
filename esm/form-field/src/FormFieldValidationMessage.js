import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import { ErrorIcon } from '../../icons';
import { Pane } from '../../layers';
import { majorScale } from '../../scales';
import { Paragraph } from '../../typography';
var FormFieldValidationMessage = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function FormFieldValidationMessage(_ref, ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Pane, _extends({
    ref: ref,
    display: "flex"
  }, props), /*#__PURE__*/React.createElement(Pane, {
    display: "flex",
    marginRight: majorScale(1)
  }, /*#__PURE__*/React.createElement(ErrorIcon, {
    color: "danger",
    marginTop: 1,
    size: 14
  })), /*#__PURE__*/React.createElement(Paragraph, {
    marginTop: 0,
    size: 300,
    color: "danger",
    role: "alert"
  }, children));
}));
FormFieldValidationMessage.propTypes = _objectSpread({}, Pane.propTypes);
export default FormFieldValidationMessage;