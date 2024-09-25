import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var baseStyle = {
  fontFamily: function fontFamily(theme, _ref) {
    var _ref$fontFamily = _ref.fontFamily,
      _fontFamily = _ref$fontFamily === void 0 ? 'ui' : _ref$fontFamily;
    return theme.fontFamilies[_fontFamily] ? "fontFamilies.".concat(_fontFamily) : _fontFamily;
  },
  color: function color(theme, _ref2) {
    var _ref2$color = _ref2.color,
      _color = _ref2$color === void 0 ? 'default' : _ref2$color;
    return theme.colors[_color] ? "colors.".concat(_color) : _color;
  },
  marginTop: 0,
  marginBottom: 0
};
var appearances = {};
var paragraphSizes = {
  300: {
    fontSize: 'fontSizes.1',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.1',
    letterSpacing: 'letterSpacings.normal'
  },
  400: {
    fontSize: 'fontSizes.2',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tight'
  },
  500: {
    fontSize: 'fontSizes.3',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tight'
  },
  600: {
    fontSize: 'fontSizes.4',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.4',
    letterSpacing: 'letterSpacings.tighter'
  }
};
var sizes = _objectSpread(_objectSpread({}, paragraphSizes), {}, {
  small: paragraphSizes['300'],
  medium: paragraphSizes['400'],
  large: paragraphSizes['500']
});
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};