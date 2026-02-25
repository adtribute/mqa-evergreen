export default NestedPopoversFixture;
/**
 * Fixture for testing nested popover behavior.
 * Structure:
 *   Parent Popover
 *     ├── Child Popover A (StringMenu)
 *     │     └── Grandchild Popover (SubMenu)
 *     └── Child Popover B (NumberMenu) - sibling to A
 */
declare function NestedPopoversFixture({ onChildAClose, onChildBClose, onGrandchildClose, onParentClose }?: {
    onChildAClose: any;
    onChildBClose: any;
    onGrandchildClose: any;
    onParentClose: any;
}): JSX.Element;
