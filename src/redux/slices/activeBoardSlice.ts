import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: null,
    id: null,
    isFetching: false,
    isEditingList: false,
}

export const activeBoardSlice = createSlice({
    name: 'activeBoard',
    initialState,
    reducers: {
        selectActiveBoard(state, action) {
            state.title = action.payload.title;
            state.id = action.payload.id;
            state.isFetching = true;
        },
        selectActiveBoardSuccess(state) {
            state.isFetching = false;
        },
        editMode(state, action) {
            state.isEditingList = action.payload;
        },
    }
})

export const {selectActiveBoard, selectActiveBoardSuccess, editMode} = activeBoardSlice.actions;
export default activeBoardSlice.reducer;

            // case STOP_EDITING_LIST:
            //     return {
            //         ...state,
            //         isEditingList: action.payload
            //     }

            // case LIST_EDIT_MODE_ENABLED:
            //     return {
            //         ...state,
            //         isEditingList: action.payload
            //     };