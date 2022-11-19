import { createSlice } from '@reduxjs/toolkit';
import { IActiveBoard } from '../../modules/modules';

const initialState: IActiveBoard = {
  title: null,
  boardId: null,
  isEditingList: false,
};

export const activeBoardSlice = createSlice({
  name: 'activeBoard',
  initialState,
  reducers: {
    selectActiveBoard(state, action) {
      state.title = action.payload.title;
      state.boardId = action.payload.id;
    },
    resetActiveBoard(state) {
      state.title = null;
      state.boardId = null;
      state.isEditingList = false;
    },
    editMode(state) {
      state.isEditingList = true;
    },
    stopEditMode(state) {
      state.isEditingList = false;
    },
  },
});

export const { selectActiveBoard, resetActiveBoard, editMode, stopEditMode } =
  activeBoardSlice.actions;
export default activeBoardSlice.reducer;
