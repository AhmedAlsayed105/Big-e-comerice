import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProductToCart : (state,actionPayload)=>{
            const find = state.find(product => product.id === actionPayload.payload.id)
                if (find)
                {
                    find.qty += 1
                }else {
                     state.push({... actionPayload.payload,qty : 1})
                }
                // window.localStorage.setItem("product", JSON.stringify(state));
        },
        delateProduct : (state,actionPayload)=>{
            const newState =  state.filter(product => product.id !== actionPayload.payload.id )
            // window.localStorage.setItem("product", JSON.stringify(newState))
            console.log(state)
            return  newState;
        },
    
    }
})


export const {addProductToCart,delateProduct} = cartSlice.actions

export default cartSlice.reducer
