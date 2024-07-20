import styled from "styled-components";
import FormButton from "./FormButton";

const StyledFormButton = styled(FormButton)`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.35s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: all 0.35s ease-in-out;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    transition: all 0.35s ease-in-out;
    &:before {
      width: 100%;
    }
  }

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
    transition: all 0.35s ease-in-out;
  }

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

const CTAButton = styled(StyledFormButton)`
  padding: 13px 35px;
  background-color: #fc842d;
  color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 10px 0px #fc842d80;

  &:before {
    background-color: #ffffff;
  }

  &:hover:not(:disabled) {
    color: #fc842d;
    border: 1px solid #fc842d;
    scale: 1.07;
  }

  &:active:not(:disabled) {
    scale: 1.1;
    transition: all 0.35s ease-in-out;
  }

  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
    position: absolute;
    bottom: -60px;
    left: 0;
    width: 190px;
  }

  @media (min-width: 1280px) {
    transform: translateX(-50%);
    left: 50%;
  }
`;

const OrangeButton = styled(StyledFormButton)`
  width: 182px;
  height: 44px;
  background-color: #fc842d;
  color: #ffffff;
  border: 1px solid black;

  &:before {
    background-color: rgba(33, 33, 33, 0.2);
  }

  &:hover:not(:disabled) {
    color: blanchedalmond;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 10px 0px #fc842d80;
    transform: scale(1.1);
  }

  &:active:not(:disabled) {
    transform: scale(1.2);
  }
`;
const WhiteButton = styled(StyledFormButton)`
  width: 182px;
  height: 44px;
  background-color: #ffffff;
  color: #fc842d;
  border: 1px solid #fc842d;

  &:before {
    background-color: rgba(33, 33, 33, 0.3);
  }

  &:hover:not(:disabled) {
    color: #ffffff;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 10px 0px #fc842d80;
    transform: scale(1.1);
  }

  &:active:not(:disabled) {
    transform: scale(1.2);
  }
`;

export { CTAButton, OrangeButton, WhiteButton };
