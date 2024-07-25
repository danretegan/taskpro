const CreateNewBoard = ({ className: styles }) => {
  return (
    <div className={styles}>
      <h4>My Boards</h4>
      <section>
        <span>
          Create a <br />
          new board
        </span>
        <button
          onClick={() => console.log('Create a new board button clicked')}
        >
          +
        </button>
      </section>
    </div>
  );
};

export default CreateNewBoard;
