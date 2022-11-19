import { memo } from 'react';
import { CreateBoard } from './CreateBoard';
import { ActiveCreateBoard } from './ActiveCreateBoard';
import { useAppSelector } from '../../../redux/redux-hooks';

export const CreateBoardContainer = memo(() => {
  const newBoard = useAppSelector((state) => state.persistedReducer.newBoard);

  return (
    <div>{newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard />}</div>
  );
});
