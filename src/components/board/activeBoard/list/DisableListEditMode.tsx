import { memo } from 'react';
import { useAppDispatch } from '../../../../redux/redux-hooks';
import { stopEditMode } from '../../../../redux/slices/activeBoardSlice';

export const DisableListEditMode = memo(() => {
  const dispatch = useAppDispatch();
  return (
    <div
      className='active_board-icon_close'
      onClick={() => dispatch(stopEditMode())}></div>
  );
});
