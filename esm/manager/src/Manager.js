import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component is a utility component to manage state in stories and examples.
 */
var Manager = /*#__PURE__*/function (_React$Component) {
  function Manager(props) {
    var _this;
    _classCallCheck(this, Manager);
    _this = _callSuper(this, Manager, [props]);
    _defineProperty(_this, "_setState", function () {
      var _this2;
      (_this2 = _this).setState.apply(_this2, arguments);
    });
    _this.state = _objectSpread({}, props);
    return _this;
  }
  _inherits(Manager, _React$Component);
  return _createClass(Manager, [{
    key: "render",
    value: function render() {
      return this.props.children({
        setState: this._setState,
        state: this.state
      });
    }
  }]);
}(React.Component);
Manager.displayName = "Manager";
_defineProperty(Manager, "propTypes", {
  children: PropTypes.func
});
export { Manager as default };