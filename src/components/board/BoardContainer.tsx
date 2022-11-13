import { CreateBoardContainer } from './boardCreation/CreateBoardContainer';
import { Board } from './Board';
import { IBoard } from '../../modules/modules';
import { useAppSelector } from '../../redux/redux-hooks';

export const BoardContainer = () => {
  const boardsCollection = useAppSelector(state => state.boardsCollection)

  return (
    <div className='board-collection'>
      <CreateBoardContainer />
      {boardsCollection?.map((board: IBoard) => (
        <Board key={board.id} {...board} />
      ))}
    </div>
  );
};
