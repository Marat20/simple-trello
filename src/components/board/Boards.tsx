import { Link } from 'react-router-dom';
import { IProps } from '../../modules/modules';

export const Boards = ({ id, title }: IProps) => {
  return (
    <Link to={`/board/${id}`}>
      <div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
