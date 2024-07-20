import styled from 'styled-components';
import LoginForm from './LoginForm';

// todo: se adauga stilurile pentru login form

const StyledLoginForm = styled(LoginForm)`
  & {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      & {
        h1 {
          text-transform: uppercase;
          color: #fc842d;
          font-size: 18px;
          line-height: 25.2px;
          text-align: center;
          letter-spacing: 0.04em;
          margin-bottom: 30px;
        }

        div.field {
          width: 100%;
          height: 70px;
          margin-bottom: 15px;
          position: relative;

          & {
            label {
              display: inline-block;
              line-height: 17px;
              letter-spacing: 0.04em;
              transition: all 0.45s ease-in-out;
              font-size: 14px;
              font-weight: 400;
              color: #9b9faa;

              transform: translate(20px, 27px);
              cursor: pointer;

              & {
                &:has(+ input:not(:placeholder-shown)),
                &:has(+ input:focus) {
                  transform: translate(0, 0);
                  /* cursor: pointer; */
                  font-size: 16px;
                  font-weight: 700;
                  color: black;
                  transition: all 0.45s ease-in-out;
                }
              }
            }

            input {
              width: 100%;
              appearance: none;
              border: none;
              outline: none;
              background-color: transparent;
              border-bottom: 1px solid #e0e0e0;
              font-size: 14px;
              font-weight: 700;
              line-height: 17px;
              letter-spacing: 0.04em;
              color: black;
              margin-top: 5px;
              padding: 5px 40px 5px 20px;
              transition: all 0.45s ease-in-out;
              color: #20b602;

              & {
                &:focus {
                  border-bottom: 1px solid black;
                  transition: all 0.45s ease-in-out;
                }

                &::placeholder {
                  opacity: 0;
                  transition: all 0.45s ease-in-out;
                }

                &:focus::placeholder {
                  color: #9b9faa;
                  opacity: 1;
                  transition: all 0.45s ease-in-out;
                }
              }
            }

            div.error {
              color: #ff003b;
              font-style: italic;
              font-size: 12px;
              margin-top: 2px;
              text-transform: lowercase;
            }

            div.showPassword {
              position: absolute;
              bottom: 20px;
              right: 0;
            }
          }
        }

        div.field.onError {
          & {
            input {
              color: #ff003b;
            }
          }
        }

        div.buttonWrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 40px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    & {
      form {
        width: 396px;

        & {
          h1 {
            font-size: 34px;
            line-height: 47.6px;
            margin-bottom: 35px;
          }

          div.field {
            margin-bottom: 35px;

            & {
              label {
                font-size: 17px;

                & {
                  &:has(+ input:not(:placeholder-shown)),
                  &:has(+ input:focus) {
                    font-size: 20px;
                  }
                }
              }

              input {
                font-size: 17px;
              }

              div.error {
                font-size: 14px;
              }
            }
          }

          div.buttonWrapper {
            margin-top: 15px;
            flex-direction: row;
          }
        }
      }
    }
  }
`;

export default StyledLoginForm;
