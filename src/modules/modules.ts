export interface IBoard {
  boardId: string;
  title: string;
  data: IList[];
}

export interface INewBoard {
  isBoardOpen: boolean;
}

export interface IActiveBoard {
  title: null | string;
  boardId: null | string;
  isEditingList: boolean;
}

export interface IList {
  name: string;
  listId: string;
  cards: ICard[];
}

export interface ICard {
  name: string;
  cardId: string;
  listId: string;
  isArchived: boolean;
}
