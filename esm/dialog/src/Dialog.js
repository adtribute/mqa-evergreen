import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo } from 'react';
import { keyframes } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { Button, IconButton } from '../../buttons';
import { useStyleConfig } from '../../hooks';
import { CrossIcon } from '../../icons';
import { Pane } from '../../layers';
import { Overlay } from '../../overlay';
import { Paragraph, Heading } from '../../typography';
var animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
};
var ANIMATION_DURATION = 200;
var openAnimation = keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
});
var closeAnimation = keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
});
var enterAnimationProps = {
  animationName: openAnimation,
  animationDuration: ANIMATION_DURATION,
  animationTimingFunction: animationEasing.deceleration,
  animationFillMode: 'both'
};
var animationStyles = {
  selectors: {
    '&[data-state="entering"]': enterAnimationProps,
    '&[data-state="entered"]': enterAnimationProps,
    '&[data-state="exiting"]': {
      animationName: closeAnimation,
      animationDuration: ANIMATION_DURATION,
      animationTimingFunction: animationEasing.acceleration,
      animationFillMode: 'both'
    }
  }
};

var closeHandler = function closeHandler(close) {
  return close();
};

var emptyProps = {};
var Dialog = /*#__PURE__*/memo(function Dialog(_ref) {
  var children = _ref.children,
      _ref$cancelLabel = _ref.cancelLabel,
      cancelLabel = _ref$cancelLabel === void 0 ? 'Cancel' : _ref$cancelLabel,
      _ref$confirmLabel = _ref.confirmLabel,
      confirmLabel = _ref$confirmLabel === void 0 ? 'Confirm' : _ref$confirmLabel,
      _ref$containerProps = _ref.containerProps,
      containerProps = _ref$containerProps === void 0 ? emptyProps : _ref$containerProps,
      contentContainerProps = _ref.contentContainerProps,
      footer = _ref.footer,
      _ref$hasCancel = _ref.hasCancel,
      hasCancel = _ref$hasCancel === void 0 ? true : _ref$hasCancel,
      _ref$hasClose = _ref.hasClose,
      hasClose = _ref$hasClose === void 0 ? true : _ref$hasClose,
      _ref$hasFooter = _ref.hasFooter,
      hasFooter = _ref$hasFooter === void 0 ? true : _ref$hasFooter,
      _ref$hasHeader = _ref.hasHeader,
      hasHeader = _ref$hasHeader === void 0 ? true : _ref$hasHeader,
      header = _ref.header,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? 'none' : _ref$intent,
      _ref$isConfirmDisable = _ref.isConfirmDisabled,
      isConfirmDisabled = _ref$isConfirmDisable === void 0 ? false : _ref$isConfirmDisable,
      _ref$isConfirmLoading = _ref.isConfirmLoading,
      isConfirmLoading = _ref$isConfirmLoading === void 0 ? false : _ref$isConfirmLoading,
      _ref$isShown = _ref.isShown,
      isShown = _ref$isShown === void 0 ? false : _ref$isShown,
      _ref$minHeightContent = _ref.minHeightContent,
      minHeightContent = _ref$minHeightContent === void 0 ? 80 : _ref$minHeightContent,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? closeHandler : _ref$onCancel,
      onCloseComplete = _ref.onCloseComplete,
      _ref$onConfirm = _ref.onConfirm,
      onConfirm = _ref$onConfirm === void 0 ? closeHandler : _ref$onConfirm,
      onOpenComplete = _ref.onOpenComplete,
      _ref$overlayProps = _ref.overlayProps,
      overlayProps = _ref$overlayProps === void 0 ? emptyProps : _ref$overlayProps,
      _ref$preventBodyScrol = _ref.preventBodyScrolling,
      preventBodyScrolling = _ref$preventBodyScrol === void 0 ? false : _ref$preventBodyScrol,
      _ref$shouldAutoFocus = _ref.shouldAutoFocus,
      shouldAutoFocus = _ref$shouldAutoFocus === void 0 ? true : _ref$shouldAutoFocus,
      _ref$shouldCloseOnEsc = _ref.shouldCloseOnEscapePress,
      shouldCloseOnEscapePress = _ref$shouldCloseOnEsc === void 0 ? true : _ref$shouldCloseOnEsc,
      _ref$shouldCloseOnOve = _ref.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _ref$shouldCloseOnOve === void 0 ? true : _ref$shouldCloseOnOve,
      _ref$sideOffset = _ref.sideOffset,
      sideOffset = _ref$sideOffset === void 0 ? '16px' : _ref$sideOffset,
      title = _ref.title,
      _ref$topOffset = _ref.topOffset,
      topOffset = _ref$topOffset === void 0 ? '12vmin' : _ref$topOffset,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 560 : _ref$width;
  var sideOffsetWithUnit = Number.isInteger(sideOffset) ? "".concat(sideOffset, "px") : sideOffset;
  var maxWidth = "calc(100% - ".concat(sideOffsetWithUnit, " * 2)");
  var topOffsetWithUnit = Number.isInteger(topOffset) ? "".concat(topOffset, "px") : topOffset;
  var maxHeight = "calc(100% - ".concat(topOffsetWithUnit, " * 2)");

  var renderChildren = function renderChildren(close) {
    if (typeof children === 'function') {
      return children({
        close: close
      });
    }

    if (typeof children === 'string') {
      return /*#__PURE__*/React.createElement(Paragraph, null, children);
    }

    return children;
  };

  var renderNode = function renderNode(node, close) {
    if (typeof node === 'function') {
      return node({
        close: close
      });
    }

    return node;
  };

  var themedHeaderProps = useStyleConfig('DialogHeader', emptyProps, emptyProps, emptyProps);
  var themedBodyProps = useStyleConfig('DialogBody', emptyProps, emptyProps, emptyProps);
  var themedFooterProps = useStyleConfig('DialogFooter', emptyProps, emptyProps, emptyProps);

  var renderHeader = function renderHeader(close) {
    if (!header && !hasHeader) {
      return undefined;
    }

    return /*#__PURE__*/React.createElement(Pane, _extends({
      flexShrink: 0,
      display: "flex",
      alignItems: "center"
    }, themedHeaderProps), header ? renderNode(header, close) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Heading, {
      is: "h4",
      size: 600,
      flex: "1"
    }, title), hasClose && /*#__PURE__*/React.createElement(IconButton, {
      appearance: "minimal",
      icon: CrossIcon,
      onClick: function onClick() {
        return onCancel(close);
      }
    })));
  };

  var renderFooter = function renderFooter(close) {
    if (!footer && !hasFooter) {
      return undefined;
    }

    return /*#__PURE__*/React.createElement(Pane, _extends({
      display: "flex",
      justifyContent: "flex-end"
    }, themedFooterProps), /*#__PURE__*/React.createElement(Pane, null, footer ? renderNode(footer, close) : /*#__PURE__*/React.createElement(React.Fragment, null, hasCancel && /*#__PURE__*/React.createElement(Button, {
      tabIndex: 0,
      onClick: function onClick() {
        return onCancel(close);
      }
    }, cancelLabel), /*#__PURE__*/React.createElement(Button, {
      tabIndex: 0,
      marginLeft: 8,
      appearance: "primary",
      intent: intent,
      isLoading: isConfirmLoading,
      disabled: isConfirmDisabled,
      onClick: function onClick() {
        return onConfirm(close);
      }
    }, confirmLabel))));
  };

  var containerClassName = containerProps.className,
      remainingContainerProps = _objectWithoutProperties(containerProps, _excluded);

  return /*#__PURE__*/React.createElement(Overlay, {
    isShown: isShown,
    shouldAutoFocus: shouldAutoFocus,
    shouldCloseOnClick: shouldCloseOnOverlayClick,
    shouldCloseOnEscapePress: shouldCloseOnEscapePress,
    onExited: onCloseComplete,
    onEntered: onOpenComplete,
    containerProps: _objectSpread({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }, overlayProps),
    preventBodyScrolling: preventBodyScrolling
  }, function (_ref2) {
    var close = _ref2.close,
        state = _ref2.state;
    return /*#__PURE__*/React.createElement(Pane, _extends({}, animationStyles, {
      role: "dialog",
      backgroundColor: "white",
      elevation: 4,
      borderRadius: 8,
      width: width,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      marginX: sideOffsetWithUnit,
      marginY: topOffsetWithUnit,
      display: "flex",
      flexDirection: "column",
      className: containerClassName,
      "data-state": state
    }, remainingContainerProps), renderHeader(close), /*#__PURE__*/React.createElement(Pane, _extends({
      "data-state": state,
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      minHeight: minHeightContent
    }, themedBodyProps, contentContainerProps), /*#__PURE__*/React.createElement(Pane, null, renderChildren(close))), renderFooter(close));
  });
});
Dialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: PropTypes.string,

  /**
   * When true, the dialog is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: PropTypes.bool,

  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: PropTypes.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: PropTypes.string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: PropTypes.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Controls whether the overlay should automatically try to bring focus inside.
   * @default true
   */
  shouldAutoFocus: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   * @default true
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * @default true
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   * @default false
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: PropTypes.object
};
export default Dialog;