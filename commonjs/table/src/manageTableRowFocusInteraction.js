"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function to help with focus management for selectable table rows.
 * @param {Object} key - React `event.key`.
 * @param {Element} ref - the cell to manage focus interaction for.
 */
function manageTableRowFocusInteraction(key, ref) {
    let nextItemToFocus;
    const tableBodyChildren = Array.from(ref.parentElement.children);
    const rowIndex = tableBodyChildren.indexOf(ref);
    if (key === 'ArrowUp' && rowIndex - 1 >= 0) {
        nextItemToFocus = tableBodyChildren[rowIndex - 1];
    }
    else if (key === 'ArrowDown' && rowIndex + 1 < tableBodyChildren.length) {
        nextItemToFocus = tableBodyChildren[rowIndex + 1];
    }
    if (nextItemToFocus && nextItemToFocus.hasAttribute('tabindex')) {
        nextItemToFocus.focus();
    }
}
exports.default = manageTableRowFocusInteraction;
