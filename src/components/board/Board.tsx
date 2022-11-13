import { Link } from 'react-router-dom';
import { IBoard } from '../../modules/modules';

export const Board = ({ id, title }: IBoard) => {
  return (
    <Link to={`/board/${id}`}>
      <div className='board-card'>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
