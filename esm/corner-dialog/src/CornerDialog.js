import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["className"];
import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import { keyframes } from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Button, IconButton } from '../../buttons';
import absolutePositions from '../../constants/src/AbsolutePosition';
import positions from '../../constants/src/Position';
import { CrossIcon } from '../../icons';
import { Pane, Card } from '../../layers';
import { Portal } from '../../portal';
import { Paragraph, Heading } from '../../typography';
var animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
var ANIMATION_DURATION = 240;
var openAnimation = keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
var closeAnimation = keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});
var enterAnimationProps = {
  animationName: openAnimation,
  animationDuration: ANIMATION_DURATION,
  animationTimingFunction: animationEasing.spring,
  animationFillMode: 'both'
};
var animationStyles = {
  selectors: {
    '&[data-state="entering"]': enterAnimationProps,
    '&[data-state="entered"]': enterAnimationProps,
    '&[data-state="exiting"]': {
      animationName: closeAnimation,
      animationDuration: 120,
      animationTimingFunction: animationEasing.acceleration,
      animationFillMode: 'both'
    }
  }
};

var closeHandler = function closeHandler(close) {
  return close();
};

var noop = function noop() {};

var emptyProps = {};
var CornerDialog = /*#__PURE__*/memo(function CornerDialog(props) {
  var title = props.title,
      _props$width = props.width,
      width = _props$width === void 0 ? 448 : _props$width,
      children = props.children,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      isShown = props.isShown,
      _props$hasFooter = props.hasFooter,
      hasFooter = _props$hasFooter === void 0 ? true : _props$hasFooter,
      _props$hasCancel = props.hasCancel,
      hasCancel = _props$hasCancel === void 0 ? true : _props$hasCancel,
      _props$hasClose = props.hasClose,
      hasClose = _props$hasClose === void 0 ? true : _props$hasClose,
      _props$cancelLabel = props.cancelLabel,
      cancelLabel = _props$cancelLabel === void 0 ? 'Close' : _props$cancelLabel,
      _props$confirmLabel = props.confirmLabel,
      confirmLabel = _props$confirmLabel === void 0 ? 'Learn More' : _props$confirmLabel,
      onOpenComplete = props.onOpenComplete,
      _props$onCloseComplet = props.onCloseComplete,
      onCloseComplete = _props$onCloseComplet === void 0 ? noop : _props$onCloseComplet,
      _props$onCancel = props.onCancel,
      onCancel = _props$onCancel === void 0 ? closeHandler : _props$onCancel,
      _props$onConfirm = props.onConfirm,
      onConfirm = _props$onConfirm === void 0 ? closeHandler : _props$onConfirm,
      _props$containerProps = props.containerProps,
      containerProps = _props$containerProps === void 0 ? emptyProps : _props$containerProps,
      _props$position = props.position,
      position = _props$position === void 0 ? positions.BOTTOM_RIGHT : _props$position;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      exiting = _useState2[0],
      setExiting = _useState2[1];

  var _useState3 = useState(!props.isShown),
      _useState4 = _slicedToArray(_useState3, 2),
      exited = _useState4[0],
      setExited = _useState4[1];

  var transitionRef = useRef(null);
  useEffect(function () {
    if (isShown) {
      setExited(false);
    }
  }, [isShown]);
  var handleExited = useCallback(function () {
    setExiting(false);
    setExited(true);
    onCloseComplete();
  }, [onCloseComplete]);
  var handleClose = useCallback(function () {
    return setExiting(true);
  }, []);
  var handleCancel = useCallback(function () {
    onCancel(handleClose);
  }, [onCancel, handleClose]);
  var handleConfirm = useCallback(function () {
    onConfirm(handleClose);
  }, [onConfirm, handleClose]);
  var renderChildren = useCallback(function () {
    if (typeof children === 'function') {
      return children({
        close: handleClose
      });
    }

    if (typeof children === 'string') {
      return /*#__PURE__*/React.createElement(Paragraph, {
        size: 400,
        color: "muted"
      }, children);
    }

    return children;
  }, [children, handleClose]);

  if (exited) {
    return null;
  }

  var containerClassName = containerProps.className,
      remainingContainerProps = _objectWithoutProperties(containerProps, _excluded);

  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Transition, {
    nodeRef: transitionRef,
    appear: true,
    unmountOnExit: true,
    timeout: ANIMATION_DURATION,
    "in": isShown && !exiting,
    onExited: handleExited,
    onEntered: onOpenComplete
  }, function (state) {
    return /*#__PURE__*/React.createElement(Card, _extends({}, animationStyles, {
      ref: transitionRef,
      role: "dialog",
      backgroundColor: "white",
      elevation: 4,
      width: width,
      className: containerClassName,
      "data-state": state,
      padding: 32,
      position: "fixed"
    }, absolutePositions[Object.keys(absolutePositions).includes(position) ? position : positions.BOTTOM_RIGHT], remainingContainerProps), /*#__PURE__*/React.createElement(Pane, {
      display: "flex",
      alignItems: "center",
      marginBottom: 12
    }, /*#__PURE__*/React.createElement(Heading, {
      is: "h4",
      size: 600,
      flex: "1"
    }, title), hasClose && /*#__PURE__*/React.createElement(IconButton, {
      icon: CrossIcon,
      appearance: "minimal",
      onClick: handleClose
    })), /*#__PURE__*/React.createElement(Pane, {
      overflowY: "auto",
      "data-state": state
    }, renderChildren()), hasFooter && /*#__PURE__*/React.createElement(Pane, {
      marginTop: 24,
      flexShrink: 0,
      display: "flex",
      flexDirection: "row-reverse"
    }, /*#__PURE__*/React.createElement(Button, {
      appearance: "primary",
      intent: intent,
      marginLeft: 8,
      onClick: handleConfirm
    }, confirmLabel), hasCancel && /*#__PURE__*/React.createElement(Button, {
      onClick: handleCancel
    }, cancelLabel)));
  }));
});
CornerDialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
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
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

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
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: PropTypes.bool,

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
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that will set position of corner dialog
   */
  position: PropTypes.oneOf([positions.TOP_LEFT, positions.TOP_RIGHT, positions.BOTTOM_LEFT, positions.BOTTOM_RIGHT])
};
export default CornerDialog;