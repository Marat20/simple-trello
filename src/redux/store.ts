import { configureStore, combineReducers } from '@reduxjs/toolkit';
import NewBoardReducer from './slices/newBoardSlice';
import BoardsCollectionReducer from './slices/boardCollectionSlice';
import ActiveBoardReducer from './slices/activeBoardSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  newBoard: NewBoardReducer,
  boardsCollection: BoardsCollectionReducer,
  activeBoard: ActiveBoardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
