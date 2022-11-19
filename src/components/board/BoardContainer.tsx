import { memo, useEffect } from 'react';
import { CreateBoardContainer } from './boardCreation/CreateBoardContainer';
import { Board } from './Board';
import { IBoard } from '../../modules/modules';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { resetActiveBoard } from '../../redux/slices/activeBoardSlice';

export const BoardContainer = memo(() => {
  const boardsCollection = useAppSelector(
    (state) => state.persistedReducer.boardsCollection
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetActiveBoard());
  }, [dispatch]);

  return (
    <div className='board-collection'>
      <CreateBoardContainer />
      {boardsCollection?.map((board: IBoard) => (
        <Board key={board.boardId} {...board} />
      ))}
    </div>
  );
});
