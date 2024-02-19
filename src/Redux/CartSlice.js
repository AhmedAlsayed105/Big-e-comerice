import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addProductToCart : (state,actionPayload)=>{
            const find = state.find(product => product.id === actionPayload.payload.id)
                if (find)
                {
                    find.qty += 1
                }else {
                    state.push({... actionPayload.payload,qty : 1})
                }
        }
    }
})

export const {addProductToCart} = cartSlice.actions

export default cartSlice.reducer
