import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        shipping: 50,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            const {name, price, image, id, quantity} = action.payload;
            const existingProduct = state.products.find(
                (product) => product.id === id 
            );
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                state.products.push(action.payload);
            }
            // state.products.push(action.payload);
            state.total += price * quantity;
        },
        removeAllPrducts: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        updateProductQuantity: (state, action) => {
            const {id, quantity} = action.payload;
            const product = state.products.find((product) => product.id === id);
            const oldQuantity = product.quantity;
            product.quantity = quantity;
            state.total += product.price * (quantity - oldQuantity);
        }
    },
});
export const {addProduct, removeAllPrducts,updateProductQuantity} = cartSlice.actions
export default cartSlice.reducer;