import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : JSON.parse(localStorage.getItem("selectedItems")) || [],
    reducers:{
        addToCart:(state,action)=>{
            const existing = state.find(p => p.id === action.payload.id)
            if(existing){
                existing.quantity+=1
            }
            else{
                state.push({...action.payload,quantity:1})
            }
        },
        removeFromCart:(state,action)=>{
            const existing = state.find(p => p.id === action.payload.id)
            if(!existing) return
            if(existing.quantity > 1){
                existing.quantity-=1
            }
            else{
                return state.filter(p => p.id !== action.payload.id)
            }
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer
