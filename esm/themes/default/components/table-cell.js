var baseStyle = {
  paddingX: 12
};
var appearances = {
  "default": {
    selectors: {
      _focus: {
        outline: 'none',
        background: 'colors.blue50',
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 1px ".concat(theme.colors.blue500);
        }
      }
    }
  }
};
var sizes = {};
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};