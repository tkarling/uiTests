import React from 'react';
import { render } from '@testing-library/react';
import SideMenu from '.';

describe('SideMenu', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<SideMenu />);
    expect(container).toMatchSnapshot();
  });
});
