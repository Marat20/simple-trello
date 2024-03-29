import { memo } from 'react';
import { useAppDispatch } from '../../../../redux/redux-hooks';
import { editMode } from '../../../../redux/slices/activeBoardSlice';

export const CreateNewList = memo(() => {
  const dispatch = useAppDispatch();

  return (
    <div className='card_creation' onClick={() => dispatch(editMode())}>
      <h4>Add a list...</h4>
    </div>
  );
});
