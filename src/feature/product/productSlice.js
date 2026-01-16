import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const productFetch = createAsyncThunk('products/fetchProducts',async()=>{
    const response = await fetch('https://dummyjson.com/products');
    const jsonResponse = await response.json()
    return jsonResponse.products
})

const initialState = {
    items : [],
    status: "pending",
    error: null
}
const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    extraReducers: builder =>{
        builder
            .addCase(productFetch.fulfilled, (state,action)=>{
                state.items = action.payload;
                state.status = "success"
            })
            .addCase(productFetch.pending, (state,action)=>{
                state.status = "pending"
            })
            .addCase(productFetch.rejected, (state,action)=>{
                state.status = "failed";
                state.error = action.error.message || "Unknown Error"
            })
    }
})

export default productSlice.reducer