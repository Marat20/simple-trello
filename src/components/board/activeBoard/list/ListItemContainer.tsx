import { useAppSelector } from '../../../../redux/redux-hooks';
import { ListItem } from './ListItem';

export const ListItemsContainer = () => {
  const activeBoardData = useAppSelector((state) => state.activeBoardData);

  return (
    <div className='cards_list'>
        {activeBoardData?.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
    </div>
  );
};
