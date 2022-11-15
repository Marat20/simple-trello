import { useParams } from 'react-router-dom';
import { DisableListEditMode } from './DisableListEditMode';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/redux-hooks';
import { addNewList } from '../../../../redux/slices/boardCollectionSlice';

export const ListEditingMode = () => {
  const { id } = useParams();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  const submitValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value === '') {
        setError(true);
        return;
      }
      dispatch(addNewList({ name: value, boardId: id }));
      setValue('');
      setError(false);
    }
  };

  return (
    <div className='card_active-editing_mode'>
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyDown={(e) => submitValue(e)}
        />
        {error && <p className='error'>give me a name!</p>}
      </div>

      <DisableListEditMode />
    </div>
  );
};
