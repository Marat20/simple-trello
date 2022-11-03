import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {};
const id = nanoid();

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    selectActiveBoard(action) {
      return action.payload.data || [];
    },
    submitList(state, action) {
      return {
        ...state,
        [id]: {
          // the unique ID of the list
          name: action.payload, // name of the list
          id: id, // list ID
          cards: [], // card IDs go inside here
        },
      };
    },
    submitNewCard(state, action) {
      const { listId, cardName, cardId } = action.payload;
      const currentList = state[id];
      currentList.cards.push({
        name: cardName,
        cardId,
        listId,
        isArchived: false,
      });
      return {
        ...state,
        [id]: currentList,
      };
    },
    handleDrop(state, action) {
      const { cardId, cardName, listId, newListId } = action.payload;
      const currentList = state[newListId]; // list that's going to be taking the new card
      currentList.cards.push({ name: cardName, cardId, listId: newListId }); // add the card to the list
      const removeCard = state[listId].cards.findIndex(
        (card) => card.cardId === cardId
      ); // find the card to remove
      const oldList = state[listId].cards.splice(removeCard, 1); // remove the card from the list

      return {
        ...state,
        [newListId]: currentList,
      };
    },
    archivePost(state, action) {
      const { cardId, listId } = action.payload;
      const currentList = state[id];
      const findCard = currentList.cards.find((card) => card.cardId === cardId);

      if (findCard.isArchived === false) {
        findCard.isArchived = true;
      } else {
        findCard.isArchived = false;
      }

      return {
        ...state,
        [id]: currentList,
      };
    },
  },
});

export const {selectActiveBoard, submitList, submitNewCard, handleDrop, archivePost} = listSlice.actions;
export default listSlice.reducer;