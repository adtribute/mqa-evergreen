import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var baseStyle = {};
var appearances = {};
var textSizes = {
  300: {
    fontSize: 'fontSizes.1',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.normal'
  },
  400: {
    fontSize: 'fontSizes.2',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.2',
    letterSpacing: 'letterSpacings.tight'
  },
  500: {
    fontSize: 'fontSizes.3',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.2',
    letterSpacing: 'letterSpacings.tight'
  },
  600: {
    fontSize: 'fontSizes.4',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tighter'
  }
};
var sizes = _objectSpread(_objectSpread({}, textSizes), {}, {
  small: textSizes['300'],
  medium: textSizes['400'],
  large: textSizes['500']
});
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};