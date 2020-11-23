import styled, { css } from 'styled-components';

interface SectionButtonProps {
  active?: boolean;
}

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 100%;
`;

export const SectionButton = styled.button<SectionButtonProps>`
  color: ${props => props.theme.colors.lightText};
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 18px;
  font-weight: 500;

  width: 100%;

  padding: 8px 16px;
  margin-top: 8px;

  border-radius: 8px;

  cursor: pointer;

  span {
    margin-left: 8px;
  }

  ${props => {
    if (props.active) {
      return css`
        background: ${props.theme.colors.white};
        color: ${props.theme.colors.primary};
      `;
    }
    return ``;
  }}
`;

export const ContentBox = styled.div`
  flex: 1;
  height: 100%;

  border-radius: 16px;
  margin-left: 16px;

  padding: 16px;

  background-color: ${props => props.theme.colors.white};

  form {
    display: grid;

    grid-template-columns: repeat(14, 1fr);

    gap: 8px;
  }
`;
