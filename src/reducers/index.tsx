import cartReducer from './cart';
import toggleItemReducer from './toggleItem';
import payReducer from './pay';
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    cart: cartReducer,
    toggle: toggleItemReducer,
    paid: payReducer
});

export type RootState = ReturnType<typeof allReducers>;