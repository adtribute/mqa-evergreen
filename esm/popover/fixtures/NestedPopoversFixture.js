import React from 'react';
import { Popover } from '../';
import { Button } from '../../buttons';
import { Pane } from '../../layers';
import { Text } from '../../typography';
/**
 * Fixture for testing nested popover behavior.
 * Structure:
 *   Parent Popover
 *     ├── Child Popover A (StringMenu)
 *     │     └── Grandchild Popover (SubMenu)
 *     └── Child Popover B (NumberMenu) - sibling to A
 */

function NestedPopoversFixture() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      onChildAClose = _ref.onChildAClose,
      onChildBClose = _ref.onChildBClose,
      onGrandchildClose = _ref.onGrandchildClose,
      onParentClose = _ref.onParentClose;

  return /*#__PURE__*/React.createElement(Popover, {
    onClose: onParentClose,
    content: /*#__PURE__*/React.createElement(Pane, {
      "data-testid": "parent-popover-content",
      padding: 16,
      width: 300
    }, /*#__PURE__*/React.createElement(Text, null, "Parent Popover Content"), /*#__PURE__*/React.createElement(Pane, {
      marginTop: 8,
      display: "flex",
      gap: 8
    }, /*#__PURE__*/React.createElement(Popover, {
      onClose: onChildAClose,
      content: /*#__PURE__*/React.createElement(Pane, {
        "data-testid": "child-a-popover-content",
        padding: 16,
        width: 200
      }, /*#__PURE__*/React.createElement(Text, null, "Child A Content"), /*#__PURE__*/React.createElement(Popover, {
        onClose: onGrandchildClose,
        content: /*#__PURE__*/React.createElement(Pane, {
          "data-testid": "grandchild-popover-content",
          padding: 16,
          width: 150
        }, /*#__PURE__*/React.createElement(Text, null, "Grandchild Content"), /*#__PURE__*/React.createElement(Button, {
          "data-testid": "grandchild-action"
        }, "Action"))
      }, /*#__PURE__*/React.createElement(Button, {
        "data-testid": "grandchild-trigger",
        marginTop: 8
      }, "Open Grandchild")))
    }, /*#__PURE__*/React.createElement(Button, {
      "data-testid": "child-a-trigger"
    }, "Open Child A")), /*#__PURE__*/React.createElement(Popover, {
      onClose: onChildBClose,
      content: /*#__PURE__*/React.createElement(Pane, {
        "data-testid": "child-b-popover-content",
        padding: 16,
        width: 200
      }, /*#__PURE__*/React.createElement(Text, null, "Child B Content"), /*#__PURE__*/React.createElement(Button, {
        "data-testid": "child-b-action"
      }, "Action B"))
    }, /*#__PURE__*/React.createElement(Button, {
      "data-testid": "child-b-trigger"
    }, "Open Child B"))))
  }, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "parent-trigger"
  }, "Open Parent"));
}

NestedPopoversFixture.displayName = "NestedPopoversFixture";
export default NestedPopoversFixture;