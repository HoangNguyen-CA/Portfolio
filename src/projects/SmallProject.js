import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

import { openNewPage } from './utils';

const Container = styled.div`
  background-size: 100% 100%;
  background-color: white;
  height: max-content;

  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.clr.neutral[800]};
  box-shadow: 5px 5px ${({ theme }) => theme.clr.neutral[900]};

  width: 100%;

  position: relative;

  &:hover > div {
    opacity: 1;
  }
`;

const ImgContainer = styled.div`
  & > img {
    width: 100%;
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;

  transition: opacity 0.2s ease-out;
  text-align: center;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.clr.neutral[100]};

  & > * + * {
    margin-top: 2em;
  }
`;

const Header = styled.h3`
  font-size: 2.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 1em;
  }
`;

const SmallProject = ({ image, header = 'Project', codeLink, demoLink }) => {
  return (
    <Container>
      <Overlay>
        <Header>{header}</Header>
        <ButtonContainer>
          <Button onClick={() => openNewPage(codeLink)}>Code</Button>
          <Button onDemo={() => openNewPage(demoLink)}>Demo</Button>
        </ButtonContainer>
      </Overlay>
      <ImgContainer>
        <img src={image} alt='Project'></img>
      </ImgContainer>
    </Container>
  );
};

export default SmallProject;
