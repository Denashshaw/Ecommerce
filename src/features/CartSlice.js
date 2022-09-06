import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isSuccess: false,
    loading: false
}

/* export const addToCart = createAsyncThunk('addToCart', () => {
    alert('addtocart')
    return axios.get('https://fakestoreapi.com/products')
    .then(res => res.data)
    .catch(err => console.log(err))
}) */

export const CartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart(state, action){
            state.data.push(action.payload);
            state.isSuccess = true;
            state.loading = false;
        },
        removeFromCart(state, action){
            state.data = state.data.filter(res => res.id !== action.payload)
            state.isSuccess = true;
            state.loading = false;
            // console.log(JSON.parse(JSON.stringify(state.data)))
        },
        changeQty(state, action){
            const {id, qty} = action.payload;
            state.data = state.data.filter(res => res.id === id ? res.qty = qty : res.qty)
            state.isSuccess = true
            state.loading = false
            console.log('state.data', state.data)
        }
    },
    /* extraReducers: {
        [addToCart.pending]: (state) => {
            state.data = [];
            state.isSuccess = false;
            state.loading = true;
        },
        [addToCart.fulfilled]: (state, action) => {
            // console.log('addToCart', action);
            state.data = action.payload;
            state.isSuccess = true;
            state.loading = false;
        },
        [addToCart.rejected]: (state) => {
            state.data = [];
            state.isSuccess = false;
            state.loading = true;
        },
    } */
})

export const {addToCart, removeFromCart, changeQty} = CartSlice.actions;

export default CartSlice.reducer