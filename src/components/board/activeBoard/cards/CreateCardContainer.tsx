import React, { useState } from 'react';
import { useAppDispatch } from '../../../../redux/redux-hooks';
import { Card } from './Card';
import { addNewCard } from '../../../../redux/slices/boardCollectionSlice';
import { ICard } from '../../../../modules/modules';
import { useParams } from 'react-router-dom';

interface IProps {
  listId: string;
  cards: ICard[];
}

export const CreateCardContainer = ({ listId, cards }: IProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleSubmitNewCard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value === '') {
        setError(true);
        return
      }
      dispatch(addNewCard({ cardName: value, listId, boardId: id }));
      setValue('');
      setError(false);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={(e) => handleSubmitNewCard(e)}
      />
      {error && <p className='error'>give me a name!</p>}
      {cards.map((item) => (
        <Card key={item.cardId} {...item} />
      ))}
    </div>
  );
};
