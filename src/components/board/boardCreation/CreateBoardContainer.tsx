import { CreateBoard } from "./CreateBoard";
import { ActiveCreateBoard } from "./ActiveCreateBoard";
import { useAppSelector } from "../../../redux/redux-hooks";

export const CreateBoardContainer = () => {
    const newBoard = useAppSelector(state => state.newBoard);
    
    return (
        <div>
        { newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard /> }
        </div>
    )
}