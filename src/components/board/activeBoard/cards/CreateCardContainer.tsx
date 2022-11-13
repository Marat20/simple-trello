import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/redux-hooks';
import { Card } from './Card';
import { submitNewCard } from '../../../../redux/slices/activeBoardDataSlice';
import { nanoid } from '@reduxjs/toolkit';

interface IProps {
  listId: string;
}

export const CreateCardContainer = ({ listId }: IProps) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const activeBoardData = useAppSelector((state) => state.activeBoardData);

  const handleSubmitNewCard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      dispatch(submitNewCard({ value, id: nanoid(), listId }));
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={(e) => handleSubmitNewCard(e)}
      />
      {activeBoardData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
