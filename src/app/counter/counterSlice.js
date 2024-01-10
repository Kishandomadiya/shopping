import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartdata: []
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
   
    addTocart: (state,action) => {
      state.cartdata.push(action.payload)
    },  
   
  },
})

// Action creators are generated for each case reducer function
export const { addTocart } = counterSlice.actions

export default counterSlice.reducer