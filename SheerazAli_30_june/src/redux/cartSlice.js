import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    increaseQty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
