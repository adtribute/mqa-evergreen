import { Themer } from '../../../../themer';
import palette from '../foundational-styles/palette';
import scales from '../foundational-styles/scales';
import memoizeClassName from '../utils/memoizeClassName';
var InputAppearances = {};
InputAppearances["default"] = Themer.createInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(palette.red.base, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  placeholder: {
    color: scales.neutral.N6A
  },
  focus: {
    outline: 'none',
    boxShadow: "inset 0 0 2px ".concat(scales.neutral.N4A, ", inset 0 0 0 1px ").concat(scales.blue.B7, ", 0 0 0 3px ").concat(scales.blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A),
    backgroundColor: scales.neutral.N2
  }
});
InputAppearances.neutral = Themer.createInputAppearance({
  base: {
    backgroundColor: scales.neutral.N2A
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(palette.red.base)
  },
  placeholder: {
    color: scales.neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: "0 0 0 2px ".concat(scales.blue.B6A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A),
    backgroundColor: scales.neutral.N2
  }
});
InputAppearances.none = Themer.createInputAppearance({
  base: {
    backgroundColor: 'white'
  },
  invalid: {},
  placeholder: {
    color: scales.neutral.N6A
  },
  focus: {
    outline: 'none'
  },
  disabled: {
    backgroundColor: scales.neutral.N2
  }
});
/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance(appearance) {
  switch (appearance) {
    case 'neutral':
      return InputAppearances.neutral;

    case 'none':
      return InputAppearances.none;

    default:
      return InputAppearances["default"];
  }
};
/**
 * Get the className of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getTextInputAppearance);