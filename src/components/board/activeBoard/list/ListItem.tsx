// import { DropTarget } from 'react-dnd';
import { IList } from '../../../../modules/modules';
import { CreateCardContainer } from '../cards/CreateCardContainer';

// const dropSource = {
//   drop(props, monitor) {
//     const card = monitor.getItem(); // this item is being dragged
//     props.handleDrop(card.title, card.cardId, card.listId, props.id);
//     // const droppedItem = props.onDrop(monitor.getItem());
//   },
// };

// function collect(connect, monitor) {
//   return {
//     // Call this function inside render()
//     // to let React DnD handle the drag events:
//     connectDropTarget: connect.dropTarget(),
//     // You can ask the monitor about the current drag state:
//     isOver: monitor.isOver(),
//     isOverCurrent: monitor.isOver({ shallow: true }),
//     canDrop: monitor.canDrop(),
//     itemType: monitor.getItemType(),
//   };
// }

// @DropTarget(ItemTypes.CARD, dropSource, collect)
export const ListItem = ({name, id, cards}:IList) => {

  return (
    <div className='card'>
        <h4>{name}</h4>
        <hr />
        <CreateCardContainer listId={id} />
    </div>
  );
};
