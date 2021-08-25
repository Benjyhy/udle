import cartReducer from './cart';
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    cart: cartReducer
});

export type RootState = ReturnType<typeof allReducers>;