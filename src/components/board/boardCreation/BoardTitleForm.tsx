import { useState } from 'react';
import { toggleNewBoard } from '../../../redux/slices/newBoardSlice';
import { useAppDispatch } from '../../../redux/redux-hooks';
import { storeNewBoardToCollection } from '../../../redux/slices/boardCollectionSlice';

export const BoardTitleForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const submitValue = () => {
    dispatch(storeNewBoardToCollection(value));
    dispatch(toggleNewBoard(false))
    setValue('');
  };

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <div className='board_active-btn_group'>
        <button
          className='board_active-btn_cancel'
          onClick={() => dispatch(toggleNewBoard(false))}>
          Cancel
        </button>
        <button className='board_active-btn_create' onClick={submitValue}>
          Create
        </button>
      </div>
    </div>
  );
};
