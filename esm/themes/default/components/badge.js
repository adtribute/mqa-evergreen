import { get } from '../../../theme/src/theme-tools';
var baseStyle = {
  height: 16,
  paddingY: 0,
  paddingX: 6,
  borderRadius: 'radii.1',
  fontSize: '11.5px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
};
var appearances = {
  subtle: function subtle(theme, props) {
    var scheme = get(theme, "fills.".concat(props.color), {
      backgroundColor: props.color,
      color: props.color
    });
    return {
      color: scheme.color,
      backgroundColor: scheme.backgroundColor
    };
  }
};
var sizes = {};
export default {
  baseStyle: baseStyle,
  appearances: appearances,
  sizes: sizes
};