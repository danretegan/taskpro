// RegisterForm.styled.js
import styled from 'styled-components';
import RegisterForm from './RegisterForm';

const StyledRegisterForm = styled(RegisterForm)`
  max-width: 335px;
  margin: 0 auto;
  padding: 24px;
  background-color: #151515;
  border-radius: 8px;

  .form-header {
    display: flex;
    margin-bottom: 40px;
    gap: 14px;

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.3);
      // padding: 1px 20px;
      font-weight: bold;
      font-size: 18px;

      &.active {
        color: #FFFFFF;
      }
    }
  }

  .form-fields {
    display: flex;
    flex-direction: column;
  }

  .form-group.name-field {
    padding-bottom: 15px;
  }

  .form-group.email-field {
    padding-bottom: 15px;
  }

  .form-group.password-field {
  padding-bottom: 15px}

  input {
    width: 100%;
    padding: 10px;
    background-color: rgba(31, 31, 31, 0.4);
    border: 1px solid rgba(190, 219, 176, 0.4);
    border-radius: 8px;
    color: #FFFFFF;
    box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
    outline: none;
  }

  .form-group.password-field {
    position: relative;
  }

  .password-toggle {
    position: absolute;
    right: 10px;
    top: 8px;
    background: none;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 29px;
    padding: 0 10px;
  }

  .error {
    color: #FF6B6B;
    font-size: 10px;
    margin-top: 4px;
    display: block;
  }

  .password-input {
  padding-right: 40px;
  }

  .submit-button {
    width: 100%;
    padding: 16.5px;
    background-color: #BEDBB0;
    border: none;
    border-radius: 4px;
    color: #000000;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (min-width: 768px) {
    max-width: 424px;
    padding: 40px;
  }

  @media (min-width: 1440px) {
    max-width: 424px;
    padding: 40px;
  }
`;

export default StyledRegisterForm;
