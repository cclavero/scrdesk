// Imports
import { render, screen } from '@testing-library/react';

// Components
import App from './App';

// Tests
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/header/i);
  expect(linkElement).toBeInTheDocument();
});