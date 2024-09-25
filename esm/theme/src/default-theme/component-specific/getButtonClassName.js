import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Themer } from '../../../../themer';
import scales from '../foundational-styles/scales';
import { getTextColorForIntent, getPrimaryButtonStylesForIntent } from '../helpers';
import { defaultControlStyles } from '../shared';
import memoizeClassName from '../utils/memoizeClassName';

/**
 * Disabled styles are all the same for all buttons.
 */
var disabled = defaultControlStyles.disabled;

/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */
var getButtonAppearance = function getButtonAppearance(appearance, intent) {
  switch (appearance) {
    case 'primary':
      {
        var _getPrimaryButtonStyl = getPrimaryButtonStylesForIntent(intent),
          focusColor = _getPrimaryButtonStyl.focusColor,
          linearGradient = _getPrimaryButtonStyl.linearGradient;
        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            backgroundImage: linearGradient.base,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
          },
          hover: {
            backgroundImage: linearGradient.hover
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N5A)
          },
          active: {
            backgroundImage: linearGradient.active,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          },
          focusAndActive: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          }
        });
      }
    case 'minimal':
      {
        var intentTextColor = getTextColorForIntent(intent, scales.blue.B9);
        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: scales.neutral.N2A
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(scales.blue.B5A)
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: scales.blue.B3A
          },
          focusAndActive: {}
        });
      }
    case 'default':
    default:
      {
        var _intentTextColor = getTextColorForIntent(intent);
        return Themer.createButtonAppearance({
          disabled: disabled,
          base: _objectSpread({
            color: _intentTextColor
          }, defaultControlStyles.base),
          hover: defaultControlStyles.hover,
          focus: defaultControlStyles.focus,
          active: defaultControlStyles.active,
          focusAndActive: defaultControlStyles.focusAndActive
        });
      }
  }
};

/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getButtonAppearance);