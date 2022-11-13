import { DisableListEditMode } from './DisableListEditMode';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/redux-hooks';
// import { submitNewBoard } from '../../../../redux/slices/newBoardSlice';
import { submitList } from '../../../../redux/slices/activeBoardDataSlice';

export const ListEditingMode = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const submitValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(submitList(value));
      setValue('');
    }
  };

  return (
    <div className='card_active-editing_mode'>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={(e) => submitValue(e)}
      />
      <DisableListEditMode />
    </div>
  );
};
