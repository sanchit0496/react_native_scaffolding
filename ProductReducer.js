import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"product",
    initialState:{
        product: [
            {
                "id": "16",
                "image": "https://cdn-icons-png.flaticon.com/128/5628/5628803.png",
                "name": "Plantation",
                "price": 750,
                "quantity": 0
            },
            {
                "id": "13",
                "image": "https://cdn-icons-png.flaticon.com/128/814/814400.png",
                "name": "Car Repair",
                "price": 500,
                "quantity": 0
            },
            {
                "id": "0",
                "image": "https://cdn-icons-png.flaticon.com/128/2482/2482566.png",
                "name": "Electric",
                "price": 250,
                "quantity": 0
            },
            {
                "id": "11",
                "image": "https://cdn-icons-png.flaticon.com/128/2954/2954870.png",
                "name": "Cleaning",
                "price": 1000,
                "quantity": 0
            },
            {
                "id": "12",
                "image": "https://cdn-icons-png.flaticon.com/128/3186/3186150.png",
                "name": "Pest",
                "price": 1500,
                "quantity": 0
            },
            {
                "id": "14",
                "image": "https://cdn-icons-png.flaticon.com/128/5361/5361406.png",
                "name": "Servicing",
                "price": 850,
                "quantity": 0
            }
        ]
    },
    reducers:{
        getProducts:(state,action) => {
            state.product.push({...action.payload});
        },
        incrementQty: (state, action) => {
            const itemPresent = state.product.find(item => item.id === action.payload.id);
            if (itemPresent) {
              itemPresent.quantity++;
            } else {
              // Handle the case when the item is not found
              console.log(`product Item with id ${action.payload.id} not found`);
            }
          },
          
          decrementQty: (state, action) => {
            const itemPresent = state.product.find(item => item.id === action.payload.id);
            if (itemPresent) {
              if (itemPresent.quantity === 1) {
                itemPresent.quantity = 0;
                const removeItem = state.product.filter(item => item.id !== action.payload.id);
                state.product = removeItem;
              } else {
                itemPresent.quantity--;
              }
            } else {
              // Handle the case when the item is not found
              console.log(`Item with id ${action.payload.id} not found`);
            }
          }
          
    }
});

export const {getProducts,incrementQty,decrementQty} = productSlice.actions;

export default productSlice.reducer;