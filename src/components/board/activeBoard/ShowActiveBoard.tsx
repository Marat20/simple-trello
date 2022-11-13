import { ListItemsContainer } from './list/ListItemContainer';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks';
import { ActiveBoardTitle } from './ActiveBoardTitle';
import { CreateNewList } from './list/CreateNewList';
import { ListEditingMode } from './list/ListEditingMode';
import { selectActiveBoard } from '../../../redux/slices/activeBoardSlice';
import { selectActiveBoardData } from '../../../redux/slices/activeBoardDataSlice';
import { useEffect } from 'react';

export const ShowActiveBoard = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const boardCollection = useAppSelector((state) => state.boardsCollection);
  const currentBoard = boardCollection.find((item) => item.id === id);
  const activeBoard = useAppSelector((state) => state.activeBoard);

  useEffect(() => {
    dispatch(selectActiveBoard(currentBoard));
    dispatch(selectActiveBoardData(currentBoard?.data));
  }, [dispatch, currentBoard]);

  return (
    <div>
      <ActiveBoardTitle>{activeBoard.title}</ActiveBoardTitle>
      <div className='card_active'>
        <ListItemsContainer />
        {activeBoard.isEditingList ? <ListEditingMode /> : <CreateNewList />}
      </div>
    </div>
  );
};