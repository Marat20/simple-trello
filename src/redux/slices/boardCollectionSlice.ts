import { createSlice } from "@reduxjs/toolkit";

interface IBoard {
    id: string
    title: string
}

const initialState: IBoard[] = [];

export const boardCollectionSlice = createSlice({
    name: 'boardCollection',
    initialState,
    reducers: {
        storeNewBoardToCollection(state, action) {
            state.push(action.payload)
        }
    }
})

export const {storeNewBoardToCollection} = boardCollectionSlice.actions;
export default boardCollectionSlice.reducer;