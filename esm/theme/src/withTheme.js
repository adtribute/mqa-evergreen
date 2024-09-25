import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import React from 'react';
import { ThemeConsumer } from './ThemeContext';

/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
function withTheme(WrappedComponent) {
  var _Class;
  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _Class = /*#__PURE__*/function (_React$Component) {
    function _Class() {
      _classCallCheck(this, _Class);
      return _callSuper(this, _Class, arguments);
    }
    _inherits(_Class, _React$Component);
    return _createClass(_Class, [{
      key: "render",
      value: function render() {
        var _this = this;
        return /*#__PURE__*/React.createElement(ThemeConsumer, null, function (theme) {
          return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
            theme: theme
          }, _this.props));
        });
      }
    }]);
  }(React.Component), _defineProperty(_Class, "displayName", "withTheme(".concat(displayName, ")")), _Class;
}
export default withTheme;