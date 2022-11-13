import { createSlice } from '@reduxjs/toolkit';
import { IActiveBoard } from '../../modules/modules';


const initialState: IActiveBoard = {
  title: null,
  id: null,
  isEditingList: false,
};

export const activeBoardSlice = createSlice({
  name: 'activeBoard',
  initialState,
  reducers: {
    selectActiveBoard(state, action) {
      state.title = action.payload.title;
      state.id = action.payload.id;
    },
    editMode(state) {
      state.isEditingList = true;
    },
    stopEditMode(state) {
      state.isEditingList = false;
    },
  },
});

export const { selectActiveBoard, editMode, stopEditMode } =
  activeBoardSlice.actions;
export default activeBoardSlice.reducer;
