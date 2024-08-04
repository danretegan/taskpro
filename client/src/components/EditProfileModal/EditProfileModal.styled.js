import styled from 'styled-components';
import EditProfileModal from './EditProfileModal';

const StyledEditProfileModal = styled(EditProfileModal)`
  background-color: rgba(33, 33, 33, 0.5);
  /* background-color: rgba(21, 21, 21, 0.3); */
  height: 100dvh;
  width: 100%;
  padding: 65px 20px;
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;

  & {
    form.editForm {
      padding: 24px;
      border-radius: 8px;
      width: 100%;
      position: relative;

      &.dark {
        background-color: rgba(21, 21, 21, 1);
        border: 1px solid rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);

        & {
          h1 {
            color: rgba(255, 255, 255, 1);
          }

          div.field {
            & {
              input {
                border: 1px solid rgba(190, 219, 176, 1);
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }

      &.light {
        background-color: rgba(252, 252, 252, 1);
        border: 1px solid rgba(22, 22, 22, 1);
        box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);

        & {
          h1 {
            color: rgba(22, 22, 22, 1);
          }

          div.field:not(.onError) {
            & {
              input {
                border: 1px solid rgba(157, 200, 136, 1);
                color: rgba(22, 22, 22, 1);

                &:focus {
                  box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);
                }
              }
            }
          }
        }
      }

      &.violet {
        background-color: rgba(252, 252, 252, 1);
        border: 1px solid rgba(22, 22, 22, 1);
        box-shadow: 0px 4px 16px 0px rgba(184, 188, 253, 1);

        & {
          h1 {
            color: rgba(22, 22, 22, 1);
          }

          div.field:not(.onError) {
            & {
              input {
                border: 1px solid rgba(82, 85, 188, 1);
                color: rgba(22, 22, 22, 1);

                &:focus {
                  box-shadow: 0px 4px 16px 0px rgba(184, 188, 253, 1);
                }
              }
            }
          }
        }
      }

      & {
        h1 {
          font-size: 18px;
          font-weight: 500;
          line-height: 27px;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        div.photoField {
          width: 68px;
          height: 68px;
          margin: 0 auto 30px auto;
          position: relative;

          & {
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border: 0.5px solid #cecece;
              border-radius: 8px;
            }

            > svg {
              width: 100%;
              height: 100%;
              border: 0.5px solid #cecece;
              border-radius: 8px;
            }

            label {
              width: 24px;
              height: 24px;
              border-radius: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              bottom: -11px;
              right: 50%;
              transform: translateX(50%);
              cursor: pointer;
              background-color: #cecece;
              transition: all 0.35s ease-in-out;

              &.dark:hover,
              &.light:hover {
                background-color: rgba(190, 219, 176, 1);
              }

              &.violet:hover {
                background-color: #b8bcfd;
              }

              &:hover > svg {
                transition: all 0.35s ease-in-out;
                stroke: #fff;
              }

              & > svg {
                width: 12px;
                height: 12px;
                stroke: rgba(22, 22, 22, 1);
                transition: all 0.35s ease-in-out;
              }
            }

            input {
              display: none;
            }
          }
        }

        div.field {
          height: 67px;
          position: relative;
          margin-bottom: 14px;

          &:nth-last-of-type(1) {
            margin-bottom: 24px;
          }

          & {
            input {
              appearance: none;
              outline: none;
              border-radius: 8px;
              width: 100%;
              padding: 14px 18px;
              font-size: 14px;
              font-weight: 400;
              line-height: 21px;
              letter-spacing: -0.02em;
              opacity: 0.4;
              transition: all 0.35s ease-in-out;
              background-color: transparent;

              &:focus {
                transition: all 0.35s ease-in-out;
                opacity: 1;
              }
            }

            input#passwordInput {
              padding: 14px 64px 14px 18px;
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
              top: 11px;
              right: 18px;
              opacity: 0.4;
              transition: all 0.35s ease-in-out;
              cursor: pointer;

              &:hover {
                opacity: 1;
                transition: all 0.35s ease-in-out;
              }
            }
          }
        }

        div.field.onError {
          & {
            input {
              border: 1px solid #ff003b;
              opacity: 1;
            }

            div.showPassword {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 400px;
    padding: 73px 30px;
  }
`;

export default StyledEditProfileModal;
