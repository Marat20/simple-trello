import { createSlice, nanoid } from '@reduxjs/toolkit';

interface IBoard {
    isBoardOpen: boolean
    title: string | null
    id: string | null
    success: boolean
}

const initialState: IBoard = {
    isBoardOpen: false,
    title: null,
    id: null,
    success: false,
}

export const newBoardSlice = createSlice({
    name: 'newBoard',
    initialState,
    reducers: {
        createNewBoard(state) {
            state.title = null;
            state.isBoardOpen = true;
            state.id = null;
            state.success = false;
        },
        cancelNewBoard(state) {
            state.title = null;
            state.isBoardOpen = false;
            state.id = null;
            state.success = false;
        },
        submitNewBoard(state, action) {
            state.title = action.payload;
            state.isBoardOpen = false;
            state.id = nanoid();
            state.success = false;
        } 
    }
})


export const {createNewBoard, cancelNewBoard, submitNewBoard} = newBoardSlice.actions;
export default newBoardSlice.reducer;