"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const __1 = require("../");
const buttons_1 = require("../../buttons");
const layers_1 = require("../../layers");
const typography_1 = require("../../typography");
/**
 * Fixture for testing nested popover behavior.
 * Structure:
 *   Parent Popover
 *     ├── Child Popover A (StringMenu)
 *     │     └── Grandchild Popover (SubMenu)
 *     └── Child Popover B (NumberMenu) - sibling to A
 */
function NestedPopoversFixture({ onChildAClose, onChildBClose, onGrandchildClose, onParentClose } = {}) {
    return (react_1.default.createElement(__1.Popover, { onClose: onParentClose, content: react_1.default.createElement(layers_1.Pane, { "data-testid": "parent-popover-content", padding: 16, width: 300 },
            react_1.default.createElement(typography_1.Text, null, "Parent Popover Content"),
            react_1.default.createElement(layers_1.Pane, { marginTop: 8, display: "flex", gap: 8 },
                react_1.default.createElement(__1.Popover, { onClose: onChildAClose, content: react_1.default.createElement(layers_1.Pane, { "data-testid": "child-a-popover-content", padding: 16, width: 200 },
                        react_1.default.createElement(typography_1.Text, null, "Child A Content"),
                        react_1.default.createElement(__1.Popover, { onClose: onGrandchildClose, content: react_1.default.createElement(layers_1.Pane, { "data-testid": "grandchild-popover-content", padding: 16, width: 150 },
                                react_1.default.createElement(typography_1.Text, null, "Grandchild Content"),
                                react_1.default.createElement(buttons_1.Button, { "data-testid": "grandchild-action" }, "Action")) },
                            react_1.default.createElement(buttons_1.Button, { "data-testid": "grandchild-trigger", marginTop: 8 }, "Open Grandchild"))) },
                    react_1.default.createElement(buttons_1.Button, { "data-testid": "child-a-trigger" }, "Open Child A")),
                react_1.default.createElement(__1.Popover, { onClose: onChildBClose, content: react_1.default.createElement(layers_1.Pane, { "data-testid": "child-b-popover-content", padding: 16, width: 200 },
                        react_1.default.createElement(typography_1.Text, null, "Child B Content"),
                        react_1.default.createElement(buttons_1.Button, { "data-testid": "child-b-action" }, "Action B")) },
                    react_1.default.createElement(buttons_1.Button, { "data-testid": "child-b-trigger" }, "Open Child B")))) },
        react_1.default.createElement(buttons_1.Button, { "data-testid": "parent-trigger" }, "Open Parent")));
}
exports.default = NestedPopoversFixture;
