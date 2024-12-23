var baseStyle = {
  borderRadius: 'radii.1',
  transition: '120ms all ease-in-out',
  color: function color(_, _ref) {
    var _color = _ref.color;

    switch (_color) {
      case 'neutral':
        return 'gray700';

      case 'default':
      default:
        return 'blue500';
    }
  },
  textDecoration: 'none',
  selectors: {
    _hover: {
      color: function color(theme, _ref2) {
        var _color2 = _ref2.color;

        switch (_color2) {
          case 'neutral':
            return theme.colors.gray800;

          case 'default':
          default:
            return theme.colors.blue600;
        }
      }
    },
    _active: {
      color: function color(theme, _ref3) {
        var _color3 = _ref3.color;

        switch (_color3) {
          case 'neutral':
            return theme.colors.gray900;

          case 'default':
          default:
            return theme.colors.blue700;
        }
      }
    },
    _focus: {
      boxShadow: function boxShadow(theme, _ref4) {
        var color = _ref4.color;

        switch (color) {
          case 'neutral':
            return "0 0 0 2px ".concat(theme.colors.gray300);

          case 'default':
          default:
            return "0 0 0 2px ".concat(theme.colors.blue200);
        }
      }
    }
  }
};
var appearances = {};
var sizes = {};
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};