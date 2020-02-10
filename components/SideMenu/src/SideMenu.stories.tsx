import React from 'react';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';

import SideMenu from '.';
import notes from '../README.md';

const Container = styled.div`
  height: 100vh;
`;

export default {
  title: 'Components|SideMenu',
  parameters: { notes }
};

export const BasicUsage = () => (
  <Container>
    <Normalize />
    <SideMenu>Hello</SideMenu>
  </Container>
);
