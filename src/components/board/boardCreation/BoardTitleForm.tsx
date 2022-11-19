import { useState, memo } from 'react';
import { toggleNewBoard } from '../../../redux/slices/newBoardSlice';
import { useAppDispatch } from '../../../redux/redux-hooks';
import { storeNewBoardToCollection } from '../../../redux/slices/boardCollectionSlice';

export const BoardTitleForm = memo(() => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  const submitValue = () => {
    if (value === '') {
      setError(true);
      return;
    }
    dispatch(storeNewBoardToCollection(value));
    dispatch(toggleNewBoard(false));
    setValue('');
    setError(false);
  };

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      {error && <p className='error'>Oops! Looks like you forgot the name!</p>}
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
});
