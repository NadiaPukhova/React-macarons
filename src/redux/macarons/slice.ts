import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMacaron } from './asyncActions';
import { Macarons, MacaronsSliceState, Status } from './types';

const initialState: MacaronsSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const macaronsSlice = createSlice({
  name: 'macarons',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Macarons[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMacaron.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchMacaron.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchMacaron.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = macaronsSlice.actions;

export default macaronsSlice.reducer;
