import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "isAstrixShown"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../../typography';
var FormFieldLabel = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function FormFieldLabel(props, ref) {
  var children = props.children,
    isAstrixShown = props.isAstrixShown,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Label, _extends({
    display: "block",
    marginBottom: 0
  }, rest, {
    ref: ref
  }), children, isAstrixShown && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    title: "This field is required."
  }, "*")));
}));
FormFieldLabel.propTypes = _objectSpread(_objectSpread({}, Label.propTypes), {}, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: PropTypes.bool
});
export default FormFieldLabel;