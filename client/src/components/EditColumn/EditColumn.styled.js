import styled from 'styled-components';
import EditColumn from './EditColumn';

const StyledEditColumn = styled(EditColumn)`
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
  width: 100%;
  max-width: 90%;
  height: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;

  // Design flexibil pentru ecrane foarte mici (320px - 374px)
  @media (min-width: 320px) and (max-width: 374px) {
    padding: 20px;
  }

  // Design adaptabil incepand de la 375px
  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 335px;
  }

  // Tableta si Desktop
  @media (min-width: 768px) {
    width: 350px;
    max-height: 433px;
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
    border: 1px solid #5255BC;
    border-radius: 8px;
    background-color: white;
    color: #161616;
  }

  input:focus {
    outline: none;
    border-color: #8385D1;
  }


  .add-button {
    height: 49px;
    padding: 14px;
    background-color: #5255BC;
    color: #FFFFFF;
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
      background-color: #8385D1;
      transform: scale(1.01);
    }

    svg {
      margin-right: 8px;

      .icon-plus-background {
        fill: white;
      }

      .icon-plus-symbol {
       stroke: #5255BC;
      }
    }
  }
`;

export default StyledEditColumn;
