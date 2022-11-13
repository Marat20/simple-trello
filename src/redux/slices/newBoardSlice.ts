import { createSlice } from '@reduxjs/toolkit';
import { INewBoard } from '../../modules/modules';

const initialState: INewBoard = {
  isBoardOpen: false,
};

export const newBoardSlice = createSlice({
  name: 'newBoard',
  initialState,
  reducers: {
    toggleNewBoard(state, action) {
      state.isBoardOpen = action.payload;
    }
  },
});

export const { toggleNewBoard } = newBoardSlice.actions;
export default newBoardSlice.reducer;
