import React from 'react';
import { Container, Background, Content, Footer } from './styles';

const MainContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <Background />
      <Content>{children}</Content>
      <Footer>Version: 0.0.1</Footer>
    </Container>
  );
};

export default MainContainer;
