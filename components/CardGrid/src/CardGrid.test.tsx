import React from 'react';
import { render } from '@testing-library/react';
import CardGrid from '.';

describe('CardGrid', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<CardGrid />);
    expect(container).toMatchSnapshot();
  });
});
