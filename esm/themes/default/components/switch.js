var baseStyle = {};
var appearances = {
  "default": {
    selectors: {
      _base: {
        color: 'white',
        backgroundColor: 'colors.gray400'
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5
      },
      _hover: {
        backgroundColor: 'colors.gray500'
      },
      _focus: {
        boxShadow: function boxShadow(theme) {
          return "0 0 0 3px ".concat(theme.colors.blue100);
        }
      },
      _active: {
        backgroundColor: 'colors.gray600'
      },
      _checked: {
        backgroundColor: 'colors.blue500',
        color: 'white'
      },
      _checkedHover: {
        backgroundColor: 'colors.blue600',
        color: 'white'
      },
      _checkedActive: {
        backgroundColor: 'colors.blue700',
        color: 'white'
      },
      _checkedDisabled: {}
    }
  }
};
var sizes = {};
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};