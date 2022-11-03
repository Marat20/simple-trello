import { configureStore } from "@reduxjs/toolkit";
import NewBoardReducer from './slices/newBoardSlice';
import BoardsCollectionReducer from './slices/boardCollectionSlice;
import ActiveBoardReducer from './slices/activeBoardSlice'
import ActiveBoardDataReducer from './slices/listSlice';

export const store = configureStore({
    reducer: {
        // form: formReducer,
        newBoard: NewBoardReducer,
        boardsCollection: BoardsCollectionReducer,
        activeBoard: ActiveBoardReducer,
        activeBoardData: ActiveBoardDataReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>