import styled from 'styled-components';

export const ProjectIcon = styled.div`
  width: 18px;
  height: 18px;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    color: rgba(255, 255, 255, 0.5);
    transition: fill 0.3s, color 0.3s;
  }
`;

export const IconsSection = styled.div`
  display: none; /* Ascunde inițial */
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

export const StyledProjectListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 14px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: white;

    ${IconsSection} {
      display: flex;
    }
  }

  &:hover ${ProjectIcon} svg {
    color: white;
  }
`;

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const EditIcon = styled.div`
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    color: rgba(255, 255, 255, 0.5);
    transition: fill 0.3s, color 0.3s;
  }

  ${IconsSection}:hover & {
    color: white;
  }

  &:hover svg {
    color: white;
  }
`;
