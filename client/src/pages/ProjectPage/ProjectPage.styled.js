import styled from 'styled-components';

export const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$selectedProject ? 'flex-start' : 'center')};
  justify-content: ${props =>
    props.$selectedProject ? 'flex-start' : 'center'};
  height: calc(100vh - 64px);
  background-color: #ecedfd;
  padding: 20px;
  text-align: ${props => (props.$selectedProject ? 'left' : 'center')};
  width: 100%;
  background-image: ${props =>
    props.$background ? `url(${props.$background})` : 'none'};
  background-size: cover;
  background-position: center;
`;

export const AddColumnButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #5255bc;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4146a3;
  }
`;
