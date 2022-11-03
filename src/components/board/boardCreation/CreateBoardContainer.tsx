import { CreateBoard } from "./CreateBoard";

export const CreateBoardContainer = () => {
    // TODO добавить newBoard из стора
    const { newBoard } = props;
    return (
        <div>
        { newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard /> }
        </div>
    )
}