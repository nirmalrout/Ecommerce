import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../feature/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem("selectedItems",JSON.stringify(state.cart))
})