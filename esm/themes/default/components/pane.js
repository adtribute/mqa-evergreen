import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function borderProperty(theme, _ref) {
  var border = _ref.border,
      value = _ref.value;

  if (Object.prototype.hasOwnProperty.call(theme.colors.border, value)) {
    return "1px solid ".concat(theme.colors.border[value]);
  }

  if (value === true) {
    return "1px solid ".concat(theme.colors.border["default"]);
  }

  if (value === false) {
    return null;
  }

  if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
    return "1px solid ".concat(theme.colors.border[border]);
  }

  if (border === true) {
    return "1px solid ".concat(theme.colors.border["default"]);
  }

  return value || border;
}

var baseStyle = function baseStyle(theme, props) {
  var transitionStyles = {};

  if (theme.shadows[props.hoverElevation] || theme.shadows[props.activeElevation]) {
    Object.assign(transitionStyles, {
      transitionDuration: '150ms',
      transitionProperty: 'box-shadow, transform',
      transitionTimingFunction: 'cubic-bezier(0.0, 0.0, 0.2, 1)'
    });
  }

  var hoverStyles;

  if (theme.shadows[props.hoverElevation]) {
    hoverStyles = {
      transform: 'translateY(-2px)',
      boxShadow: "shadows.".concat(props.hoverElevation)
    };
  }

  var activeStyles;

  if (theme.shadows[props.activeElevation]) {
    activeStyles = {
      transform: 'translateY(-1px)',
      boxShadow: "shadows.".concat(props.activeElevation)
    };
  }

  return _objectSpread(_objectSpread({
    background: theme.colors[props.background] || props.background,
    boxShadow: theme.shadows[props.elevation],
    borderTop: borderProperty(theme, {
      border: props.border,
      value: props.borderTop
    }),
    borderRight: borderProperty(theme, {
      border: props.border,
      value: props.borderRight
    }),
    borderBottom: borderProperty(theme, {
      border: props.border,
      value: props.borderBottom
    }),
    borderLeft: borderProperty(theme, {
      border: props.border,
      value: props.borderLeft
    })
  }, transitionStyles), {}, {
    selectors: {
      _hover: hoverStyles,
      _active: activeStyles
    }
  });
};

var appearances = {};
var sizes = {};
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};