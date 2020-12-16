import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders heading text', () => {
  const { getByText } = render(<App />);
  const headingText = getByText(/Finding Falcone!/i);
  expect(headingText).toBeInTheDocument();
});
