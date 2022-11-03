import { CreateBoardContainer } from './boardCreation/CreateBoardContainer';
import { Boards } from './Boards';
import { IProps } from '../../modules/modules';

export const BoardContainer = (props: IProps[]) => {
  const { boardsCollection } = props;

  return (
    <div>
      <CreateBoardContainer />
      {boardsCollection.map((board: IProps) => (
        <Boards key={board.id} {...board} />
      ))}
    </div>
  );
};
