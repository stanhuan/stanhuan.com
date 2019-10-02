import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components';

const Container = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 20vh;
  text-align: left;
  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <ButtonLink href="/resume.pdf" target="_blank">
        Resume
      </ButtonLink>
      <ButtonLink href="mailto:stanleystanhuang@gmail.com" target="_blank">
        Email
      </ButtonLink>
      <ButtonLink href="https://medium.com/@stanhuan" target="_blank">
        Medium
      </ButtonLink>
      <ButtonLink
        href="https://www.linkedin.com/in/stanhuan/"
        target="_blank"
      >
        LinkedIn
      </ButtonLink>
      <ButtonLink href="https://github.com/stanhuan" target="_blank">
        GitHub
      </ButtonLink>
    </Container>
  );
};

export default Footer;
