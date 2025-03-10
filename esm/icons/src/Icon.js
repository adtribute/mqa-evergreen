import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "color", "name", "size", "svgPaths16", "svgPaths20", "title"];
import React, { forwardRef } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
var pseudoSelectors = {};
var internalStyles = {};
var Icon = /*#__PURE__*/forwardRef(function Icon(_ref, ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      svgPaths16 = _ref.svgPaths16,
      svgPaths20 = _ref.svgPaths20,
      title = _ref.title,
      svgProps = _objectWithoutProperties(_ref, _excluded);

  var themedProps = useStyleConfig('Icon', {
    color: color
  }, pseudoSelectors, internalStyles);
  var SIZE_STANDARD = 16;
  var SIZE_LARGE = 20; // Choose which pixel grid is most appropriate for given icon size

  var pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD;
  var pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20;
  var paths = pathStrings.map(function (d, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("path", {
        key: i,
        d: d,
        fillRule: "evenodd"
      })
    );
  });
  var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "svg",
    ref: ref,
    className: className
  }, themedProps, svgProps, {
    "data-icon": name,
    width: size,
    height: size,
    viewBox: viewBox
  }), title && /*#__PURE__*/React.createElement("title", null, title), paths);
});
Icon.propTypes = {
  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number,

  /**
   * Name of the icon
   */
  name: PropTypes.string,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string,
  svgPaths16: PropTypes.arrayOf(PropTypes.string).isRequired,
  svgPaths20: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Icon;