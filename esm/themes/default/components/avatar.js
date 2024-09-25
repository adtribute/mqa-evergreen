import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function getColor(theme, _ref) {
  var color = _ref.color,
    hashValue = _ref.hashValue;
  if (color === 'automatic') {
    var keys = Object.keys(theme.fills);
    if (hashValue) {
      return theme.fills[keys[hashValue % keys.length]];
    } else {
      return theme.fills[keys[Math.floor(Math.random() * keys.length)]];
    }
  }
  return theme.fills[color];
}
var baseStyle = function baseStyle(theme, props) {
  return _objectSpread({
    borderRadius: props.shape === 'round' ? '100%' : 'radii.1'
  }, getColor(theme, props));
};
var appearances = {};
var sizes = {};
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};