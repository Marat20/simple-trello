import { IBoard } from './modules';

export const getBoard = (state: IBoard[], boardId: string | undefined) => {
  return state.find((item) => item.boardId === boardId);
};

export const getList = (
  state: IBoard[],
  boardId: string | undefined,
  listId: string
) => {
  const currentBoard = getBoard(state, boardId);
  return currentBoard?.data.find((item) => item.listId === listId)!;
};

export const getCard = (
  state: IBoard[],
  boardId: string | undefined,
  listId: string,
  cardId: string
) => {
  const currentList = getList(state, boardId, listId);
  return currentList?.cards.find((item) => item.cardId === cardId)!;
};
