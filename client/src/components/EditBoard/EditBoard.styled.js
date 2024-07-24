import styled from 'styled-components';
import EditBoard from './EditBoard';

const StyledEditBoard = styled(EditBoard)`
  &.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    width: 335px;
    max-height: 433px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;

    @media (min-width: 768px) {
      width: 350px;
    }
  }

  h2 {
    color: #161616;
    margin-bottom: 24px;
  }

  .close-button {
    position: absolute;
    top: 14px;
    right: 14px;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    svg {
      fill: #161616;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  input {
    margin-bottom: 24px;
    padding: 14px 18px;
    border: 1px solid #BEDBB0;
    border-radius: 8px;
    background-color: white;
    color: #161616;
  }

  input:focus {
    outline: none;
    border-color: #9DC888;
  }

  .icons-section, .backgrounds-section {
    margin-bottom: 24px;
  }

  .icons-section h3, .backgrounds-section h3 {
    margin-bottom: 14px;
    color: #161616;
  }

  .icons-container, .backgrounds-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .icon-button {
    background-color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    svg {
      color: #16161680;
    }

    &.selected {
      svg {
        color: #161616;
      }
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .backgrounds-container {
    padding-right: 25px;
    gap: 4px;
  }
  .backgrounds-container img {
    width: 28px;
    height: 28px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &.selected {
      border: 2px solid #9DC888;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .create-button {
    height: 49px;
    padding: 14px;
    background-color: #BEDBB0;
    color: #161616;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5px;
    font-weight: 500;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover {
      background-color: #9DC888;
      transform: scale(1.01);
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export default StyledEditBoard;
