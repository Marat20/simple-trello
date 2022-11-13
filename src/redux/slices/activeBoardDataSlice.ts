import { createSlice, nanoid } from '@reduxjs/toolkit';
import { IList } from '../../modules/modules';

const initialState: IList[] = [];

export const activeBoardDataSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    selectActiveBoardData(state, action) {
      return action.payload || [];
    },
    submitList(state, action) {
      const id = nanoid();
      state.push({
        name: action.payload,
        id,
        cards: [],
      });
    },
    submitNewCard(state, action) {
      const { listId, cardName, id } = action.payload;
      const currentList = state[listId];
      currentList.cards.push({
        name: cardName,
        cardId: id,
        listId,
        isArchived: false,
      });
    },
    archivePost(state, action) {
      // const { cardId, listId } = action.payload;
      // const currentList = state[id];
      // const findCard = currentList.cards.find((card) => card.cardId === cardId);
      // if (findCard.isArchived === false) {
      //   findCard.isArchived = true;
      // } else {
      //   findCard.isArchived = false;
      // }
      // return {
      //   ...state,
      //   [id]: currentList,
      // };
    },
  },
});

export const { selectActiveBoardData, submitList, submitNewCard, archivePost } =
  activeBoardDataSlice.actions;
export default activeBoardDataSlice.reducer;
