import { useParams } from 'react-router-dom';
import { getCard } from '../../../../modules/getData';
import { ICard } from '../../../../modules/modules';
import { useAppDispatch, useAppSelector } from '../../../../redux/redux-hooks';
import { archiveCard } from '../../../../redux/slices/boardCollectionSlice';

export const Card = ({ name, listId, cardId }: ICard) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.boardsCollection);
  const isArchived = getCard(board, id, listId, cardId).isArchived;

  return (
      <div className={`card_task ${isArchived ? 'done' : ''}`}>
      <h3>{name}</h3>
      <div
        onClick={() => dispatch(archiveCard({ listId, boardId: id, cardId }))}>
        ✓
      </div>
    </div>
  );
};
