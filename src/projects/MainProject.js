import React from 'react';
import styled from 'styled-components';

import { openNewPage } from './utils';

import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5em;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    display: block;
  }
`;

const Inner = styled.div`
  width: 100%;
`;

const Header = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 0.5em;

  letter-spacing: 0.1em;
`;
const Desc = styled.p`
  margin-bottom: 2em;
`;

const ButtonContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 1em;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
`;

const Tag = styled.p`
  padding: 0.5em 1em;
  border: 1px solid ${({ theme }) => theme.clr.neutral[900]};
`;

const MainProject = ({
  image,
  reversed,
  header = 'Project',
  desc = 'This is my project.',
  tags = [],
  codeLink,
  demoLink,
}) => {
  const imageNode = (
    <ImgContainer reversed={reversed}>
      <img src={image} alt='project' />
    </ImgContainer>
  );

  const tagsNode = tags.map((str) => <Tag>{str}</Tag>);

  const contentNode = (
    <Inner>
      <Header>{header}</Header>
      <TagContainer>{tagsNode}</TagContainer>
      <Desc>{desc}</Desc>
      <ButtonContainer>
        <Button onClick={() => openNewPage(codeLink)}>Code</Button>
        <Button onClick={() => openNewPage(demoLink)}>Demo</Button>
      </ButtonContainer>
    </Inner>
  );

  let content;
  if (reversed) {
    content = (
      <>
        {contentNode}
        {imageNode}
      </>
    );
  } else {
    content = (
      <>
        {imageNode}
        {contentNode}
      </>
    );
  }
  return <Container>{content}</Container>;
};

export default MainProject;
