var baseStyle = {
  fontFamily: 'fontFamilies.ui',
  borderRadius: 'radii.1',
  border: 0
};
var appearances = {
  "default": {
    backgroundColor: 'white',
    border: function border(theme) {
      return "1px solid ".concat(theme.colors.gray400);
    },
    color: 'colors.gray800',
    selectors: {
      _disabled: {
        cursor: 'not-allowed',
        color: 'colors.gray500',
        borderColor: 'colors.gray300'
      },
      _hover: {
        borderColor: 'colors.gray600',
        backgroundColor: 'colors.gray50'
      },
      _invalid: {
        borderColor: 'colors.red500'
      },
      _focus: {
        borderColor: 'colors.blue200',
        boxShadow: 'shadows.focusRing'
      },
      _active: {
        backgroundColor: 'colors.gray100'
      }
    }
  }
};
var sizes = {
  small: {
    height: 24,
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0'
  },
  medium: {
    height: 32,
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0'
  },
  large: {
    height: 40,
    fontSize: 'fontSizes.2',
    lineHeight: 'lineHeights.2'
  }
};
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};