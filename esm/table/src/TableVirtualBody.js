import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["allowAutoHeight", "children", "defaultHeight", "estimatedItemSize", "height", "onScroll", "overscanCount", "scrollOffset", "scrollToAlignment", "scrollToIndex", "useAverageAutoHeightEstimation"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState, useEffect, useRef } from 'react';
import VirtualList from '@segment/react-tiny-virtual-list';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { useForceUpdate } from '../../hooks';
import { Pane } from '../../layers';
var TableVirtualBody = /*#__PURE__*/memo(function TableVirtualBody(props) {
  var _props$allowAutoHeigh = props.allowAutoHeight,
      allowAutoHeight = _props$allowAutoHeigh === void 0 ? false : _props$allowAutoHeigh,
      inputChildren = props.children,
      _props$defaultHeight = props.defaultHeight,
      defaultHeight = _props$defaultHeight === void 0 ? 48 : _props$defaultHeight,
      estimatedItemSize = props.estimatedItemSize,
      paneHeight = props.height,
      onScroll = props.onScroll,
      _props$overscanCount = props.overscanCount,
      overscanCount = _props$overscanCount === void 0 ? 5 : _props$overscanCount,
      scrollOffset = props.scrollOffset,
      scrollToAlignment = props.scrollToAlignment,
      scrollToIndex = props.scrollToIndex,
      _props$useAverageAuto = props.useAverageAutoHeightEstimation,
      useAverageAutoHeightEstimation = _props$useAverageAuto === void 0 ? true : _props$useAverageAuto,
      rest = _objectWithoutProperties(props, _excluded);

  var forceUpdate = useForceUpdate();
  var autoHeights = [];
  var autoHeightRefs = [];
  var averageAutoHeight = defaultHeight;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      paneRef = _useState2[0],
      setPaneRef = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isIntegerHeight = _useState4[0],
      setIsIntegerHeight = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      calculatedHeight = _useState6[0],
      setCalculatedHeight = _useState6[1];

  var requestId = useRef(null);

  var updateOnResize = function updateOnResize() {
    autoHeights = [];
    autoHeightRefs = [];
    averageAutoHeight = defaultHeight; // Simply return when we now the height of the pane is fixed.

    if (isIntegerHeight) return; // Return if we are in a weird edge case in which the ref is no longer valid.

    if (paneRef && paneRef instanceof Node) {
      var tempCalculatedHeight = paneRef.offsetHeight;

      if (tempCalculatedHeight > 0) {
        // Save the calculated height which is needed for the VirtualList.
        setCalculatedHeight(tempCalculatedHeight); // Prevent updateOnResize being called recursively when there is a valid height.

        return;
      }
    } // When height is still 0 (or paneRef is not valid) try recursively until success.


    requestId.current = requestAnimationFrame(function () {
      updateOnResize();
    });
  };

  var onResize = debounce(updateOnResize, 200);
  useEffect(function () {
    if (props.height !== calculatedHeight) {
      setIsIntegerHeight(Number.isInteger(props.height));
    }
  }, [props.height]);
  useEffect(function () {
    if (paneRef && paneRef instanceof Node) {
      updateOnResize();
    }
  }, [paneRef]); // Mirrors functionality of componentDidMount and componentWillUnmount.
  // By passing an empty array, will only run on first render, the function returned
  // will be called on component unmount

  useEffect(function () {
    updateOnResize();
    window.addEventListener('resize', onResize, false);
    return function () {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(requestId.current);
    };
  }, []);
  /**
   * This function will process all items that have height="auto" set.
   * It will loop through all refs and get calculate the height.
   */

  var processAutoHeights = function processAutoHeights() {
    var isUpdated = false; // This will determine the averageAutoHeight.

    var total = 0;
    var totalAmount = 0; // Loop through all of the refs that have height="auto".

    autoHeightRefs.forEach(function (ref, index) {
      // If the height is already calculated, skip it,
      // but calculate the height for the total.
      if (autoHeights[index]) {
        total += autoHeights[index];
        totalAmount += 1;
        return;
      } // Make sure the ref has a child


      if (ref && ref.childNodes && ref.childNodes[0] && Number.isInteger(ref.childNodes[0].offsetHeight)) {
        var height = ref.childNodes[0].offsetHeight; // Add to the total to calculate the averageAutoHeight.

        total += height;
        totalAmount += 1; // Cache the height.

        autoHeights[index] = height; // Set the update flag to true.

        isUpdated = true;
      }
    }); // Save the average height.

    averageAutoHeight = total / totalAmount; // There are some new heights detected that had previously not been calculated.
    // Call forceUpdate to make sure the virtual list renders again.

    if (isUpdated) forceUpdate();
  };

  var onVirtualHelperRef = function onVirtualHelperRef(index, ref) {
    autoHeightRefs[index] = ref;
    requestAnimationFrame(function () {
      processAutoHeights();
    });
  };

  var getItemSize = function getItemSize(children) {
    // Prefer to return a array of all heights.
    if (!allowAutoHeight) {
      return children.map(function (child) {
        if (! /*#__PURE__*/React.isValidElement(child)) return defaultHeight;
        var height = child.props.height;

        if (Number.isInteger(height)) {
          return height;
        }

        return defaultHeight;
      });
    } // If allowAutoHeight is true, return a function instead.


    var itemSizeFn = function itemSizeFn(index) {
      if (! /*#__PURE__*/React.isValidElement(children[index])) return defaultHeight;
      var height = children[index].props.height; // When the height is number simply, simply return it.

      if (Number.isInteger(height)) {
        return height;
      } // When allowAutoHeight is set and  the height is set to "auto"...


      if (allowAutoHeight && children[index].props.height === 'auto') {
        // ... and the height is calculated, return the calculated height.
        if (autoHeights[index]) return autoHeights[index]; // ... if the height is not yet calculated, return the averge

        if (useAverageAutoHeightEstimation) return averageAutoHeight;
      } // Return the default height.


      return defaultHeight;
    };

    return itemSizeFn;
  }; // Children always needs to be an array.


  var children = Array.isArray(inputChildren) ? inputChildren : React.Children.toArray(inputChildren);
  var itemSize = getItemSize(children);
  return /*#__PURE__*/React.createElement(Pane, _extends({
    "data-evergreen-table-body": true,
    ref: setPaneRef,
    height: paneHeight,
    flex: "1",
    overflow: "hidden"
  }, rest), /*#__PURE__*/React.createElement(VirtualList, {
    height: isIntegerHeight ? paneHeight : calculatedHeight,
    width: "100%",
    estimatedItemSize: allowAutoHeight && useAverageAutoHeightEstimation ? averageAutoHeight : estimatedItemSize || null,
    itemSize: itemSize,
    overscanCount: overscanCount,
    itemCount: React.Children.count(children),
    scrollToIndex: scrollToIndex,
    scrollOffset: scrollOffset,
    scrollToAlignment: scrollToAlignment,
    onScroll: onScroll,
    renderItem: function renderItem(_ref) {
      var index = _ref.index,
          style = _ref.style;
      var child = children[index];
      var key = child.key || index;
      var props = {
        key: key,
        style: style
      }; // If some children are strings by accident, support this gracefully.

      if (! /*#__PURE__*/React.isValidElement(child)) {
        if (typeof child === 'string') {
          return /*#__PURE__*/React.createElement("div", props, child);
        }

        return /*#__PURE__*/React.createElement("div", props, "\xA0");
      } // When allowing height="auto" for rows, and a auto height item is
      // rendered for the first time...


      if (allowAutoHeight && /*#__PURE__*/React.isValidElement(child) && child.props.height === 'auto' && // ... and only when the height is not already been calculated.
      !autoHeights[index]) {
        // ... render the item in a helper div, the ref is used to calculate
        // the height of its children.
        return /*#__PURE__*/React.createElement("div", _extends({
          ref: function ref(_ref2) {
            return onVirtualHelperRef(index, _ref2);
          },
          "data-virtual-index": index
        }, props, {
          style: _objectSpread({
            opacity: 0
          }, props.style)
        }), child);
      } // When allowAutoHeight is false, or when the height is known.
      // Simply render the item.


      return /*#__PURE__*/React.cloneElement(child, props);
    }
  }));
});
TableVirtualBody.propTypes = _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * Children needs to be an array of a single node.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight: PropTypes.number,

  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight: PropTypes.bool,

  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount: PropTypes.number,

  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize: PropTypes.number,

  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation: PropTypes.bool,

  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex: PropTypes.number,

  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset: PropTypes.number,

  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment: PropTypes.oneOf(['start', 'center', 'end', 'auto']),

  /**
   * The onScroll callback passed to react-tiny-virtual-list
   */
  onScroll: PropTypes.func
});
export default TableVirtualBody;