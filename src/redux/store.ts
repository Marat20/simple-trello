import { configureStore } from "@reduxjs/toolkit";
import NewBoardReducer from './slices/newBoardSlice';
import BoardsCollectionReducer from './slices/boardCollectionSlice'
import ActiveBoardReducer from './slices/activeBoardSlice'
import ActiveBoardDataReducer from './slices/activeBoardDataSlice';

export const store = configureStore({
    reducer: {
        newBoard: NewBoardReducer,
        boardsCollection: BoardsCollectionReducer,
        activeBoard: ActiveBoardReducer,
        activeBoardData: ActiveBoardDataReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>