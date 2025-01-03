import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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