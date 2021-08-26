import cartReducer from './cart';
import toggleItemReducer from './toggleItem';
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    cart: cartReducer,
    toggle: toggleItemReducer
});

export type RootState = ReturnType<typeof allReducers>;