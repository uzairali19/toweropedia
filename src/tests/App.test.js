import React from 'react';
import Header from '../components/Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('Test the logo text inside the header component', () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId('title');
  expect(headerElement).toHaveTextContent('TowerOpedia');
});
