import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './pages/Home';

describe('Home component', () => {
  test('renders Home component with Navbar, UserList, and Footer', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/UserBrowser/i)).toBeInTheDocument();

    expect(screen.getByText(/Listed Users/i)).toBeInTheDocument();

    expect(screen.getByText(/© 2024 UserBrowser, Inc/i)).toBeInTheDocument();
  });
});
