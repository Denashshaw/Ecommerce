import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from '../features/ProductSlice'
import CartReducer from '../features/CartSlice'

export const store = configureStore({
    reducer: {
        products: ProductReducer,
        carts: CartReducer,
    }
})