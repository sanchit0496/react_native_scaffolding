import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent){
                itemPresent.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        removeFromCart:(state,action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
        },
        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id);
            if (itemPresent) {
              itemPresent.quantity++;
            } else {
              // Handle the case when the item is not found
              console.log(`Item with id ${action.payload.id} not found in cart`);
            }
          },
          
          decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id);
            if (itemPresent) {
              if (itemPresent.quantity === 1) {
                const removeItem = state.cart.filter(item => item.id !== action.payload.id);
                state.cart = removeItem;
              } else {
                itemPresent.quantity--;
              }
            } else {
              // Handle the case when the item is not found
              console.log(`Item with id ${action.payload.id} not found in cart`);
            }
          }
          ,
        cleanCart:(state) => {
            state.cart = [];
        }
    }
});


export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity,cleanCart} = CartSlice.actions;

export default CartSlice.reducer;