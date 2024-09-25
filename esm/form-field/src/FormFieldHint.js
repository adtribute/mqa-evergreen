import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import { Paragraph } from '../../typography';
var FormFieldHint = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function FormFieldHint(props, ref) {
  return /*#__PURE__*/React.createElement(Paragraph, _extends({
    marginTop: 0,
    size: 300,
    color: "muted"
  }, props, {
    ref: ref
  }));
}));
FormFieldHint.propTypes = _objectSpread({}, Paragraph.propTypes);
export default FormFieldHint;