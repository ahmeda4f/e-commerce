

//  getProducts = createAsyncThunk('brands/getProducts', async () => {
//     let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
//     return data.data
//   })

//   let initialState ={
//     products :[]
//   }
//   export const productsSlice = createSlice({
//     name: 'products',
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(getProducts.fulfilled, (state, action) => {
//             state.products = action.payload
//         }).addCase(getProducts.pending, () => {
//             console.log("pending");
//         }).addCase(getProducts.rejected,(err)=>{
//             console.log(err);
//         })
//     }
   
//   })
//   export default productsSlice.reducer
//   export const {getProducts} = productsSlice.actions
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  return data.data;
});

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.pending, () => {
        console.log('Fetching products...');
      })
      .addCase(getProducts.rejected, (err) => {
        console.error('Error fetching products:', err);
      });
  },
});

export default productsSlice.reducer;