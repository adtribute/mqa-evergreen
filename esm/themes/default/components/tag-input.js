var baseStyle = {
  paddingY: '2px',
  backgroundColor: 'white',
  borderRadius: 'radii.1'
};
var appearances = {
  "default": {
    border: function border(theme) {
      return "1px solid ".concat(theme.colors.gray400);
    },
    selectors: {
      _focused: {
        outline: 'none',
        zIndex: 'zIndices.focused',
        border: function border(theme) {
          return "1px solid ".concat(theme.colors.blue200);
        },
        transition: 'box-shadow 80ms ease-in-out',
        boxShadow: 'shadows.focusRing'
      },
      _disabled: {
        cursor: 'not-allowed',
        backgroundColor: 'colors.gray100'
      },
      _invalid: {
        borderColor: 'colors.red600'
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