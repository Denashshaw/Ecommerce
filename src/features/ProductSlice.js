import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    isSuccess: false,
    loading: false
}

export const getData = createAsyncThunk('getData', () => {
    return axios.get('https://fakestoreapi.com/products')
    .then(res => {
        const data = res.data
        data.map(res => res.qty = 1)
        return data;
    })
    .catch(err => console.log(err))
})

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.data = [];
            state.isSuccess = false;
            state.loading = true;
        },
        [getData.fulfilled]: (state, action) => {
            // console.log('getData', action);
            state.data = action.payload;
            state.isSuccess = true;
            state.loading = false;
        },
        [getData.rejected]: (state) => {
            state.data = [];
            state.isSuccess = false;
            state.loading = true;
        },
    }
})

export default ProductSlice.reducer