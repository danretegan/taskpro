import { useState } from 'react';
import sprite from '../../assets/icons/icons.svg';


const AddColumn = ({ className, isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');

  const handleCreate = () => {
    console.log('Creating board:', { title });
    if (onCreate) {
      onCreate({ title });
    }
    if (onClose) {
      onClose();
    }
  };

  console.log('NewBoard rendering, isOpen:', isOpen);

  // Pentru testare, linia este comentata
  // if (!isOpen) return null;

  return (
    <div className={`${className} modal-overlay`}>
      <div className="modal-content">
        <h2>Add column</h2>
        <button className="close-button" onClick={onClose}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-closeBtn`}></use>
          </svg>
        </button>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

<button className="add-button" onClick={handleCreate}>
  <span className="plus-icon">
    <svg width="28" height="28">
      <use href={`${sprite}#icon-plusWhite`}></use>
    </svg>
  </span>
  Add
</button>
      </div>
    </div>
  );
};

export default AddColumn;
