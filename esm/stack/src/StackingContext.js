import React from 'react';
import { StackingOrder } from '../../constants';
/**
 * Context used to manage the layering of z-indexes of components.
 */

var StackingContext = /*#__PURE__*/React.createContext(StackingOrder.STACKING_CONTEXT);
export default StackingContext;