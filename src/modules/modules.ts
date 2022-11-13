export interface IState {
  boardsCollection: IBoard[]
  newBoard: INewBoard
  activeBoard: IActiveBoard
  activeBoardData: []
}

export interface IBoard {
  id: string;
  title: string;
  data?: IList[]
}

export interface INewBoard {
  isBoardOpen: boolean;
}

export interface ICard {
  name: string;
  cardId: string;
  listId: string;
  isArchived: boolean;
}

export interface IList {
  name: string;
  id: string;
  cards: ICard[];
}

export interface IActiveBoard {
  title: null | string;
  id: null | string;
  isEditingList: boolean;
}
