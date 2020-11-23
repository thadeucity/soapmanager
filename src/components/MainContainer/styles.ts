import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  align-items: center;
  justify-content: center;

  position: relative;

  min-height: 100vh;
`;

export const Background = styled.div`
  position: absolute;

  top: 0;

  z-index: -1;

  background-color: ${props => props.theme.colors.light};
  height: 50vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Footer = styled.div`
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 14px;
  font-weight: 500;

  background-color: #444;
  color: #f2f2f2;

  width: 100%;

  padding: 4px 32px;
`;
