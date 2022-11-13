import { createSlice, nanoid } from "@reduxjs/toolkit";
import { IBoard } from "../../modules/modules";

const initialState: IBoard[] = [];

export const boardCollectionSlice = createSlice({
    name: 'boardCollection',
    initialState,
    reducers: {
        storeNewBoardToCollection(state, action) {
            const id = nanoid();
            state.push({title: action.payload, id, data: []})
        }
    }
})

export const {storeNewBoardToCollection} = boardCollectionSlice.actions;
export default boardCollectionSlice.reducer;