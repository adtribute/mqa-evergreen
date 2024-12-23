import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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