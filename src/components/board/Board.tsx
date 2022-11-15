import { Link } from 'react-router-dom';
import { IBoard } from '../../modules/modules';

export const Board = ({boardId, title }: IBoard) => {
  return (
    <Link to={`/board/${boardId}`}>
      <div className='board-card'>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
