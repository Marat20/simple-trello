export const CreateBoard = () => {
    // TODO достать из стора createNewBoard()
    return (
        <div className="board" onClick={ () => createNewBoard() }>
            <h3>Create a new board...</h3>
        </div>
    )
}