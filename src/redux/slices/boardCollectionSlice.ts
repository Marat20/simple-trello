import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getBoard, getList, getCard } from '../../modules/getData';
import { IBoard } from '../../modules/modules';

const initialState: IBoard[] = [];

export const boardCollectionSlice = createSlice({
  name: 'boardCollection',
  initialState,
  reducers: {
    storeNewBoardToCollection(state, action) {
      const id = nanoid();
      state.push({ title: action.payload, boardId: id, data: [] });
    },
    addNewList(state, action) {
      const id = nanoid();
      const { name, boardId } = action.payload;
      const currentBoard = getBoard(state, boardId)!;
      currentBoard.data.push({
        name,
        listId: id,
        cards: [],
      });
    },
    addNewCard(state, action) {
      const id = nanoid();
      const { listId, cardName, boardId } = action.payload;
      const currentList = getList(state, boardId, listId)!;
      currentList.cards.push({
        name: cardName,
        cardId: id,
        listId,
        isArchived: false,
      });
    },
    archiveCard(state, action) {
      const { boardId, listId, cardId } = action.payload;
      const currentCard = getCard(state, boardId, listId, cardId)!;
      currentCard.isArchived = !currentCard.isArchived;
    },
  },
});

export const {
  storeNewBoardToCollection,
  addNewList,
  addNewCard,
  archiveCard,
} = boardCollectionSlice.actions;
export default boardCollectionSlice.reducer;
