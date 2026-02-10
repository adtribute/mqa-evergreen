"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const prop_types_1 = __importDefault(require("prop-types"));
const constants_1 = require("../../constants");
const hooks_1 = require("../../hooks");
const positioner_1 = require("../../positioner");
const tooltip_1 = require("../../tooltip");
const PopoverStateless_1 = __importDefault(require("./PopoverStateless"));
const noop = () => { };
const emptyProps = {};
// Module-level registry for tracking open popovers and their parent-child relationships
const popoverRegistry = new Map(); // id -> { node, parentId }
let popoverIdCounter = 0;
function generatePopoverId() {
    return `popover-${++popoverIdCounter}`;
}
function registerPopover(id, node, parentId) {
    popoverRegistry.set(id, { node, parentId });
}
function unregisterPopover(id) {
    popoverRegistry.delete(id);
}
function isDescendantOf(childId, ancestorId) {
    let currentId = childId;
    while (currentId) {
        const popover = popoverRegistry.get(currentId);
        if (!popover)
            return false;
        if (popover.parentId === ancestorId)
            return true;
        currentId = popover.parentId;
    }
    return false;
}
function isClickInsideDescendant(myId, target) {
    for (const [id, { node }] of popoverRegistry) {
        if (isDescendantOf(id, myId) && (node === null || node === void 0 ? void 0 : node.contains(target))) {
            return true;
        }
    }
    return false;
}
// React context for parent-child relationship tracking (flows through portals)
const PopoverParentContext = (0, react_1.createContext)(null);
PopoverParentContext.displayName = 'PopoverParentContext';
const Popover = (0, react_1.memo)((0, react_1.forwardRef)(function Popover(_a, forwardedRef) {
    var { animationDuration = 300, bringFocusInside: shouldBringFocusInside = false, children, content, display, minHeight = 40, minWidth = 200, onBodyClick = noop, onClose = noop, onCloseComplete = noop, onOpen = noop, onOpenComplete = noop, position = constants_1.Position.BOTTOM, shouldCloseOnExternalClick = true, shouldCloseOnEscapePress = true, statelessProps = emptyProps, trigger = 'click' } = _a, props = __rest(_a, ["animationDuration", "bringFocusInside", "children", "content", "display", "minHeight", "minWidth", "onBodyClick", "onClose", "onCloseComplete", "onOpen", "onOpenComplete", "position", "shouldCloseOnExternalClick", "shouldCloseOnEscapePress", "statelessProps", "trigger"]);
    const [isShown, setIsShown] = (0, react_1.useState)(props.isShown);
    const popoverNode = (0, react_1.useRef)();
    const setPopoverNode = (0, hooks_1.useMergedRef)(popoverNode);
    const targetRef = (0, react_1.useRef)();
    const setTargetRef = (0, hooks_1.useMergedRef)(targetRef);
    const pointerDownTarget = (0, react_1.useRef)(null);
    // Popover hierarchy tracking
    const parentPopoverId = (0, react_1.useContext)(PopoverParentContext);
    const popoverIdRef = (0, react_1.useRef)(null);
    if (!popoverIdRef.current) {
        popoverIdRef.current = generatePopoverId();
    }
    const popoverId = popoverIdRef.current;
    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */
    const bringFocusInside = (0, react_1.useCallback)(e => {
        if (isShown && e) {
            e.preventDefault();
        }
        // Always delay focus manipulation to just before repaint to prevent scroll jumping
        return requestAnimationFrame(() => {
            // Container ref may be undefined between component mounting and Portal rendering
            // ActiveElement may be undefined in some rare cases in IE
            if (popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
                document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
                !isShown) {
                return;
            }
            const isFocusOutsideModal = !popoverNode.current.contains(document.activeElement);
            if (isFocusOutsideModal) {
                // Element marked autofocus has higher priority than the other elements
                const autofocusElement = popoverNode.current.querySelector('[autofocus]:not([disabled])');
                if (autofocusElement) {
                    // Return early to avoid unnecessary dom queries
                    return autofocusElement.focus();
                }
                const wrapperElement = popoverNode.current.querySelector('[tabindex]:not([disabled])');
                if (wrapperElement) {
                    return wrapperElement.focus();
                }
                const buttonElements = popoverNode.current.querySelectorAll('button:not([disabled]), a:not([disabled]), [role="menuitem"]:not([disabled]), [role="menuitemradio"]:not([disabled])');
                if (buttonElements.length > 0) {
                    return buttonElements[0].focus();
                }
            }
        });
    }, [isShown, popoverNode.current]);
    const bringFocusBackToTarget = (0, react_1.useCallback)(() => {
        return requestAnimationFrame(() => {
            if (targetRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
                popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
                document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
            ) {
                return;
            }
            const isFocusInsideModal = popoverNode.current.contains(document.activeElement);
            // Bring back focus on the target.
            if (document.activeElement === document.body || isFocusInsideModal) {
                targetRef.current.focus();
            }
        });
    }, [popoverNode.current, targetRef.current]);
    const open = (0, react_1.useCallback)(() => {
        if (isShown) {
            return;
        }
        setIsShown(true);
        onOpen();
    }, [setIsShown, onOpen, isShown]);
    const close = (0, react_1.useCallback)(() => {
        if (!isShown) {
            return;
        }
        setIsShown(false);
        bringFocusBackToTarget();
        onClose();
    }, [setIsShown, bringFocusBackToTarget, onClose, isShown]);
    (0, react_1.useImperativeHandle)(forwardedRef, () => ({
        open,
        close
    }), [open, close]);
    // If `props.isShown` is a boolean, treat as a controlled component
    // `open` and `close` should be applied when it changes
    (0, react_1.useEffect)(() => {
        if (typeof props.isShown !== 'boolean' || props.isShown === isShown) {
            return;
        }
        if (props.isShown) {
            open();
        }
        else {
            close();
        }
    }, [props.isShown, isShown]);
    const toggle = (0, react_1.useCallback)(() => {
        return isShown ? close() : open();
    }, [isShown, close, open]);
    const handleOpenHover = (0, react_1.useMemo)(() => {
        return trigger === 'hover' ? open : undefined;
    }, [trigger, open]);
    const handleCloseHover = (0, react_1.useMemo)(() => {
        return trigger === 'hover' ? close : undefined;
    }, [trigger, close]);
    const handleKeyDown = (0, react_1.useCallback)(event => {
        return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined;
    }, [bringFocusInside]);
    const onEsc = (0, react_1.useCallback)(event => {
        return event.key === 'Escape' && shouldCloseOnEscapePress ? close() : undefined;
    }, [shouldCloseOnEscapePress, close]);
    const handleBodyClick = (0, react_1.useCallback)(event => {
        // Use the pointerdown target (captured before React re-renders) instead of event.target
        const clickTarget = pointerDownTarget.current || event.target;
        pointerDownTarget.current = null;
        // Ignore clicks on the popover or button
        if (targetRef.current && targetRef.current.contains(clickTarget)) {
            return;
        }
        if (popoverNode.current && popoverNode.current.contains(clickTarget)) {
            return;
        }
        // Ignore clicks inside any descendant popover (child popovers opened from within this one)
        if (isClickInsideDescendant(popoverId, clickTarget)) {
            return;
        }
        // Notify body click
        onBodyClick(event);
        if (shouldCloseOnExternalClick !== false) {
            close();
        }
    }, [onBodyClick, shouldCloseOnExternalClick, close, popoverId]);
    const handleOpenComplete = (0, react_1.useCallback)(() => {
        if (shouldBringFocusInside)
            bringFocusInside();
        onOpenComplete();
    }, [shouldBringFocusInside, bringFocusInside, onOpenComplete]);
    (0, react_1.useEffect)(() => {
        if (isShown) {
            const onPointerDown = e => {
                pointerDownTarget.current = e.target;
            };
            document.addEventListener('pointerdown', onPointerDown, true);
            document.addEventListener('click', handleBodyClick, true);
            document.addEventListener('keydown', onEsc, true);
            return () => {
                document.removeEventListener('pointerdown', onPointerDown, true);
                document.removeEventListener('click', handleBodyClick, true);
                document.removeEventListener('keydown', onEsc, true);
            };
        }
    }, [isShown, handleBodyClick, onEsc, popoverId]);
    // Handle popover node ref and registration
    // We register in the ref callback (not useEffect) because the Positioner
    // uses react-transition-group which delays DOM mounting
    const handlePopoverRef = (0, react_1.useCallback)(ref => {
        setPopoverNode(ref);
        if (ref) {
            // Node is mounting - register in hierarchy
            registerPopover(popoverId, ref, parentPopoverId);
        }
        else {
            // Node is unmounting - unregister
            unregisterPopover(popoverId);
        }
    }, [popoverId, parentPopoverId, setPopoverNode]);
    const renderTarget = (0, react_1.useCallback)(({ getRef, isShown }) => {
        const isTooltipInside = children && children.type === tooltip_1.Tooltip;
        const getTargetRef = ref => {
            setTargetRef(ref);
            getRef(ref);
        };
        /**
         * When a function is passed, you can control the Popover manually.
         */
        if (typeof children === 'function') {
            return children({
                getRef: getTargetRef,
                isShown,
                toggle
            });
        }
        const popoverTargetProps = {
            onClick: toggle,
            onMouseEnter: handleOpenHover,
            onKeyDown: handleKeyDown,
            role: 'button',
            'aria-expanded': isShown,
            'aria-haspopup': true
        };
        /**
         * Tooltips can be used within a Popover (not the other way around)
         * In this case the children is the Tooltip instead of a button.
         * Pass the properties to the Tooltip and let the Tooltip
         * add the properties to the target.
         */
        if (isTooltipInside) {
            return react_1.default.cloneElement(children, {
                popoverProps: Object.assign({ getTargetRef,
                    isShown }, popoverTargetProps)
            });
        }
        /**
         * With normal usage only popover props end up on the target.
         */
        return react_1.default.cloneElement(children, Object.assign({ ref: getTargetRef }, popoverTargetProps));
    }, [children, setTargetRef, toggle, handleOpenHover, handleKeyDown]);
    // If `props.isShown` is a boolean, popover is controlled manually, not via mouse events
    const shown = typeof props.isShown === 'boolean' ? props.isShown : isShown;
    const contentToRender = (0, react_1.useMemo)(() => {
        const resolvedContent = typeof content === 'function' ? content({ close }) : content;
        // Wrap content with context so child popovers know their parent
        return react_1.default.createElement(PopoverParentContext.Provider, { value: popoverId }, resolvedContent);
    }, [content, close, popoverId]);
    return (react_1.default.createElement(positioner_1.Positioner, { target: renderTarget, isShown: shown, position: position, animationDuration: animationDuration, onOpenComplete: handleOpenComplete, onCloseComplete: onCloseComplete }, ({ css, getRef, state, style }) => (react_1.default.createElement(PopoverStateless_1.default, Object.assign({ ref: ref => {
            handlePopoverRef(ref);
            getRef(ref);
        }, "data-state": state, display: display, minWidth: minWidth, minHeight: minHeight }, statelessProps, css, { style: (0, lodash_merge_1.default)({}, style, statelessProps.style), className: statelessProps.className, onMouseLeave: handleCloseHover }), contentToRender))));
}));
Popover.propTypes = {
    /**
     * The position the Popover is on. Smart positioning might override this.
     */
    position: prop_types_1.default.oneOf([
        constants_1.Position.TOP,
        constants_1.Position.TOP_LEFT,
        constants_1.Position.TOP_RIGHT,
        constants_1.Position.BOTTOM,
        constants_1.Position.BOTTOM_LEFT,
        constants_1.Position.BOTTOM_RIGHT,
        constants_1.Position.LEFT,
        constants_1.Position.RIGHT
    ]),
    /**
     * Controls whether the Popover is shown or not.
     * - When `true`, the component is always shown, regardless of the click or hover trigger.
     * - When `false`, the component is never shown, regardless of the click or hover trigger.
     * - When `undefined`, the component is uncontrolled and the isShown state is handled internally
     * (i.e. the Popover is shown based on the click or hover trigger)
     */
    isShown: prop_types_1.default.bool,
    /**
     * Open the Popover based on click or hover. Default is click.
     */
    trigger: prop_types_1.default.oneOf(['click', 'hover']),
    /**
     * The content of the Popover.
     */
    content: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]).isRequired,
    /**
     * The target button of the Popover.
     * When a function the following arguments are passed:
     * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.func]).isRequired,
    /**
     * The display property passed to the Popover card.
     */
    display: prop_types_1.default.string,
    /**
     * The min width of the Popover card.
     */
    minWidth: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    /**
     * The min height of the Popover card.
     */
    minHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    /**
     * Properties passed through to the Popover card.
     */
    statelessProps: prop_types_1.default.shape(PopoverStateless_1.default.propTypes),
    /**
     * Duration of the animation.
     */
    animationDuration: prop_types_1.default.number,
    /**
     * Function called when the Popover opens.
     */
    onOpen: prop_types_1.default.func,
    /**
     * Function fired when Popover closes.
     */
    onClose: prop_types_1.default.func,
    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: prop_types_1.default.func,
    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: prop_types_1.default.func,
    /**
     * Function that will be called when the body is clicked.
     */
    onBodyClick: prop_types_1.default.func,
    /**
     * When true, bring focus inside of the Popover on open.
     */
    bringFocusInside: prop_types_1.default.bool,
    /**
     * Boolean indicating if clicking outside the dialog should close the dialog.
     */
    shouldCloseOnExternalClick: prop_types_1.default.bool,
    /**
     * Boolean indicating if pressing the esc key should close the dialog.
     */
    shouldCloseOnEscapePress: prop_types_1.default.bool
};
exports.default = Popover;
