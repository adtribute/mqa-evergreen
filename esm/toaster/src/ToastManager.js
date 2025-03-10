import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["description", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, useState } from 'react';
import Box from '@maestroqa/ui-box';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import Toast from './Toast';

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager = /*#__PURE__*/memo(function ToastManager(props) {
  var bindCloseAll = props.bindCloseAll,
      bindGetToasts = props.bindGetToasts,
      bindNotify = props.bindNotify,
      bindRemove = props.bindRemove;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      toasts = _useState2[0],
      setToasts = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      idCounter = _useState4[0],
      setIdCounter = _useState4[1];

  var getToasts = function getToasts() {
    return toasts;
  };

  var closeAll = function closeAll() {
    setToasts(toasts.map(function (toast) {
      return _objectSpread(_objectSpread({}, toast), {}, {
        isShown: false
      });
    }));
  };
  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */


  var closeToast = function closeToast(id) {
    setToasts(toasts.map(function (toast) {
      if (toast.id === id) {
        return _objectSpread(_objectSpread({}, toast), {}, {
          isShown: false
        });
      }

      return toast;
    }));
  };

  var safeCloseToast = function safeCloseToast(id) {
    var toastToRemove = toasts.find(function (toast) {
      return String(toast.id).startsWith(id);
    });

    if (toastToRemove) {
      closeToast(toastToRemove.id);
    }
  };

  var removeToast = function removeToast(id) {
    var updatedToasts = toasts.filter(function (toast) {
      return !String(toast.id).startsWith(id);
    });
    setToasts(updatedToasts);
    return updatedToasts;
  };

  var createToastInstance = function createToastInstance(title, settings) {
    var _settings$hasCloseBut;

    var uniqueId = idCounter;
    setIdCounter(idCounter + 1);
    var id = hasCustomId(settings) ? "".concat(settings.id, "-").concat(uniqueId) : uniqueId;
    return {
      id: id,
      title: title,
      description: settings.description,
      hasCloseButton: (_settings$hasCloseBut = settings.hasCloseButton) !== null && _settings$hasCloseBut !== void 0 ? _settings$hasCloseBut : true,
      duration: settings.duration || 5,
      close: function close() {
        return safeCloseToast(id);
      },
      intent: settings.intent
    };
  };

  var notify = function notify(title, settings) {
    var tempToasts = toasts;

    if (hasCustomId(settings)) {
      tempToasts = removeToast(settings.id);
    }

    var instance = createToastInstance(title, settings);
    setToasts([instance].concat(_toConsumableArray(tempToasts)));
  };

  bindNotify(notify);
  bindRemove(safeCloseToast);
  bindGetToasts(getToasts);
  bindCloseAll(closeAll);
  return /*#__PURE__*/React.createElement(Box, {
    is: "span",
    maxWidth: 560,
    marginY: 0,
    marginX: "auto",
    top: 0,
    left: 0,
    right: 0,
    position: "fixed",
    zIndex: StackingOrder.TOASTER,
    pointerEvents: "none"
  }, toasts.map(function (_ref) {
    var description = _ref.description,
        id = _ref.id,
        rest = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(Toast, _extends({
      key: id,
      onRemove: function onRemove() {
        return removeToast(id);
      }
    }, rest), description);
  }));
});
ToastManager.propTypes = {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: PropTypes.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: PropTypes.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: PropTypes.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: PropTypes.func.isRequired
};
export default ToastManager;