import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  align-items: center;
  justify-content: center;

  width: 900px;
  height: 580px;

  border-radius: 16px;

  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.effects.boxShadow.d2};
`;

export const TopBar = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  background-color: ${props => props.theme.colors.primaryDark};
`;

export const Menu = styled.div`
  flex: 1;
`;

export const Name = styled.div`
  color: ${props => props.theme.colors.lightText};
  font-size: 14px;
  font-weight: 500;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background-color: ${props => props.theme.colors.primary};
`;
