export const ActiveCreateBoard = () => {
  // TODO достать из стора cancelCreatingBoard

  const handleSubmit = (values) => {
    this.props.submitNewBoard(values.boardTitle);
    values.boardTitle = '';
  };

  return (
    <div className='board'>
      <div>
        <h3>Creating a board</h3>
        <CloseBoardIcon
          onClick={() => cancelCreatingBoard()}
          src={require('../../../Assets/closeIcon.svg')}
        />
      </div>

      <div>
        <BoardNamingTitle>What shall we call the board?</BoardNamingTitle>
        <BoardTitleForm
          onSubmit={this.submit}
          cancelAction={cancelCreatingBoard}
        />
      </div>
    </div>
  );
};
