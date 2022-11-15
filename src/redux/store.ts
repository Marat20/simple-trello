import { configureStore } from "@reduxjs/toolkit";
import NewBoardReducer from './slices/newBoardSlice';
import BoardsCollectionReducer from './slices/boardCollectionSlice'
import ActiveBoardReducer from './slices/activeBoardSlice'

export const store = configureStore({
    reducer: {
        newBoard: NewBoardReducer,
        boardsCollection: BoardsCollectionReducer,
        activeBoard: ActiveBoardReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>