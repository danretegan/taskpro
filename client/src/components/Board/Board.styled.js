import styled from 'styled-components';
import Board from './Board';

const StyledBoard = styled(Board)``;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px;
  background: #f4f5f7;
  border-bottom: 1px solid #e0e0e0;
  @media (max-width: 1268px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #f4f5f7;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 1268px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f4f5f7;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  @media (max-width: 1268px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f4f5f7;
    gap: 14px;
  }
`;

export const Theme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f5f7;
`;

export const UserPicture = styled.div`
  max-height: 100px; /* Adjust as needed */
  width: auto;
`;

export const BoardTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0;
  background-color: #ecedfd;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 14px;
  margin: 0;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.h1`
  font-size: 14px;
  margin: 0;
`;

export const FilterIcon = styled.div`
  font-size: 24px;
  margin: 0;
`;

export const BoardContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  background-color: #ecedfd;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const AddCardButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #556cd6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  margin-top: 20px;

  &:hover {
    background: #4455a6;
  }
`;

export default StyledBoard;
