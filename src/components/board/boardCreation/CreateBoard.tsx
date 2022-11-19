import { memo } from 'react';
import { useAppDispatch } from '../../../redux/redux-hooks';
import { toggleNewBoard } from '../../../redux/slices/newBoardSlice';

export const CreateBoard = memo(() => {
  const dispatch = useAppDispatch();

  return (
    <div
      className='board_creation'
      onClick={() => dispatch(toggleNewBoard(true))}>
      <h3>Create a new board...</h3>
    </div>
  );
});
