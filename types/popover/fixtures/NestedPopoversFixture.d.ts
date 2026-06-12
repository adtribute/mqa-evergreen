export default NestedPopoversFixture;
/**
 * Fixture for testing nested popover behavior.
 * Structure:
 *   Parent Popover
 *     ├── Child Popover A (StringMenu)
 *     │     └── Grandchild Popover (SubMenu)
 *     └── Child Popover B (NumberMenu) - sibling to A
 * @returns {React.ReactElement}
 */
declare function NestedPopoversFixture({ onChildAClose, onChildBClose, onGrandchildClose, onParentClose }?: {
    onChildAClose: any;
    onChildBClose: any;
    onGrandchildClose: any;
    onParentClose: any;
}): React.ReactElement;
import React from "react";
