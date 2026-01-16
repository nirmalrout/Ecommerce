import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../feature/cart/cartSlice'
import productReducer from '../feature/product/productSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem("selectedItems",JSON.stringify(state.cart))
})