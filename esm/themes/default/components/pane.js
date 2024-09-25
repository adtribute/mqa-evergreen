import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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