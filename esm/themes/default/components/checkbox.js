var baseStyle = {};
var appearances = {
  "default": {
    selectors: {
      _base: {
        color: 'white',
        background: 'white',
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 1px ".concat(theme.colors.gray400);
        }
      },
      _disabled: {
        cursor: 'not-allowed',
        background: 'colors.gray100',
        color: 'colors.gray100',
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 1px ".concat(theme.colors.gray100);
        }
      },
      _hover: {
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 1px ".concat(theme.colors.gray600);
        }
      },
      _focus: {
        boxShadow: function boxShadow(theme) {
          return "0 0 0 2px ".concat(theme.colors.blue100);
        }
      },
      _active: {
        background: 'colors.gray100',
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 1px ".concat(theme.colors.gray500);
        }
      },
      _checked: {
        color: 'white',
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 -1px ".concat(theme.colors.blue700);
        },
        background: 'colors.blue500'
      },
      _checkedHover: {
        color: 'white',
        background: 'colors.blue600',
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 1px ".concat(theme.colors.blue600);
        }
      },
      _checkedActive: {
        color: 'white',
        boxShadow: function boxShadow(theme) {
          return "inset 0 0 0 -1px ".concat(theme.colors.blue700);
        },
        background: 'colors.blue700'
      },
      _checkedDisabled: {
        color: 'colors.gray600',
        background: 'colors.gray100'
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