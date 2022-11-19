import { memo } from 'react';
import { IList } from '../../../../modules/modules';
import { CreateCardContainer } from '../cards/CreateCardContainer';

export const ListItem = memo(({ name, listId, cards }: IList) => {
  return (
    <div className='card'>
      <h4>{name}</h4>
      <hr />
      <CreateCardContainer listId={listId} cards={cards} />
    </div>
  );
});
