import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../assets/icons/icons.svg';
import { backgroundImages } from '../../assets/images/background_icons/index.js';

const EditBoard = ({ className, isOpen, onClose, onCreate, project }) => {
  const [title, setTitle] = useState(project?.title || '');
  const [selectedIcon, setSelectedIcon] = useState(project?.icon || 'icon-fourCircles');
  const [selectedBackground, setSelectedBackground] = useState(project?.background || 'noImage.jpg');

  useEffect(() => {
    console.log('Current project:', project); // Adăugat console.log
  }, [project]);

  const handleCreate = () => {
    console.log('Editing board:', { title, icon: selectedIcon, background: selectedBackground });
    if (onCreate) {
      onCreate({ title, icon: selectedIcon, background: selectedBackground });
    }
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  console.log('EditBoard rendering, isOpen:', isOpen);

  if (!isOpen) return null;

  const modalContent = (
    <div className={`${className} modal-overlay`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Edit board</h2>
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

        <div className="icons-section">
          <h3>Icons</h3>
          <div className="icons-container">
            {['icon-fourCircles', 'icon-star', 'icon-loading', 'icon-puzzlePiece', 'icon-cube', 'icon-lightning', 'icon-threeCircles', 'icon-hexagon'].map((icon) => (
              <button
                key={icon}
                className={`icon-button ${selectedIcon === icon ? 'selected' : ''}`}
                onClick={() => setSelectedIcon(icon)}
              >
                <svg width="18" height="18">
                  <use href={`${sprite}#${icon}`}></use>
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="backgrounds-section">
          <h3>Background</h3>
          <div className="backgrounds-container">
            {backgroundImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Fundal ${index}`}
                className={selectedBackground === image ? 'selected' : ''}
                onClick={() => setSelectedBackground(image)}
              />
            ))}
          </div>
        </div>

        <button className="edit-button" onClick={handleCreate}>
          <span className="plus-icon">
            <svg width="28" height="28">
              <use href={`${sprite}#icon-plusWhite`}></use>
            </svg>
          </span>
          Edit
        </button>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default EditBoard;
