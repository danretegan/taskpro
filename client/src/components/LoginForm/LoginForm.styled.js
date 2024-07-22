import styled from 'styled-components';
import LoginForm from './LoginForm';

const StyledLoginForm = styled(LoginForm)`
  width: 100%;
  max-width: 335px;
  padding: 24px;
  color: white;
  background-color: #151515;
  border-radius: 8px;

  .form-header {
    display: flex;
    margin-bottom: 40px;
    gap: 14px;

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.3);
      font-weight: bold;
      font-size: 18px;

      &.active {
        color: white;
      }
    }
  }

  .form-fields {
    display: flex;
    flex-direction: column;
  }

  .form-group.email-field {
    padding-bottom: 15px;
  }

  .form-group.password-field {
    padding-bottom: 15px;
    position: relative;
  }

  input {
    width: 100%;
    padding: 10px;
    background-color: rgba(31, 31, 31, 0.4);
    border: 1px solid rgba(190, 219, 176, 0.4);
    border-radius: 8px;
    color: white;
    outline: none;
  }

  .password-toggle {
    position: absolute;
    right: 10px;
    top: 8px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 29px;
    padding: 0 10px;
  }

  .error {
    color: #ff6b6b;
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
    background-color: #bedbb0;
    border: none;
    border-radius: 8px;
    color: #161616;
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
`;

export default StyledLoginForm;
