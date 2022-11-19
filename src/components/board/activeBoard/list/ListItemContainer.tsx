import { memo } from 'react';
import { IBoard, IList } from '../../../../modules/modules';
import { ListItem } from './ListItem';

interface IProps {
  currentBoard: IBoard;
}

export const ListItemsContainer = memo(({ currentBoard }: IProps) => {
  return (
    <div className='cards_list'>
      {currentBoard.data.map((item: IList) => (
        <ListItem key={item.listId} {...item} />
      ))}
    </div>
  );
});
