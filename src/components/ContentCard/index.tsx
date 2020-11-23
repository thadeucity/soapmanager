import React from 'react';
import { Container, TopBar, Menu, Name, Content } from './styles';

const ContentCard: React.FC = ({ children }) => {
  return (
    <Container>
      <TopBar>
        <Menu>a</Menu>
        <Name>Soapmanager</Name>
      </TopBar>
      <Content>{children}</Content>
    </Container>
  );
};

export default ContentCard;
