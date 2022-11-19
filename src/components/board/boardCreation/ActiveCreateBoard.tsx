import { useAppDispatch } from '../../../redux/redux-hooks';
import { BoardTitleForm } from './BoardTitleForm';
import { toggleNewBoard } from '../../../redux/slices/newBoardSlice';
import { memo } from 'react';

export const ActiveCreateBoard = memo(() => {
  const dispatch = useAppDispatch();

  return (
    <div className='board_active'>
      <div className='board_active-top'>
        <h3>Creating a board</h3>
        <div
          className='board_active-icon_close'
          onClick={() => dispatch(toggleNewBoard(false))}
        />
      </div>
      <div className='board_active-body'>
        <h5>What shall we call the board?</h5>
        <BoardTitleForm />
      </div>
    </div>
  );
});
