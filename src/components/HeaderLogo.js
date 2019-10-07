import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FixedBar } from '../components';
import ButtonLink from './ButtonLink';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`;

const HeaderLogo = () => {
  return (
    <HeaderWrapper>
      <Logo>Stanley Huang</Logo>
      <ButtonLink href="/resume.pdf" target="_blank">
        Resume
      </ButtonLink>
      <ButtonLink href="mailto:stanleystanhuang@gmail.com" target="_blank">
        Email
      </ButtonLink>
    </HeaderWrapper>
  );
};

export default HeaderLogo;
