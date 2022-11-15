import { ListItemsContainer } from './list/ListItemContainer';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks';
import { ActiveBoardTitle } from './ActiveBoardTitle';
import { CreateNewList } from './list/CreateNewList';
import { ListEditingMode } from './list/ListEditingMode';
import { selectActiveBoard } from '../../../redux/slices/activeBoardSlice';
import { useEffect } from 'react';

export const ShowActiveBoard = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const boardCollection = useAppSelector((state) => state.persistedReducer.boardsCollection);
  const currentBoard = boardCollection.find((item) => item.boardId === id)!;
  const activeBoard = useAppSelector((state) => state.persistedReducer.activeBoard);

  useEffect(() => {
    dispatch(selectActiveBoard(currentBoard));
  }, [dispatch, currentBoard]);

  return (
    <div>
      <ActiveBoardTitle>{activeBoard.title}</ActiveBoardTitle>
      <div className='card_active'>
        <ListItemsContainer currentBoard={currentBoard} />

        {activeBoard.isEditingList ? <ListEditingMode /> : <CreateNewList />}
      </div>
    </div>
  );
};
