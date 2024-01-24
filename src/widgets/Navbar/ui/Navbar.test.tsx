import { within } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import { MemoryHistory, createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';

import { AppRoutes, routePaths } from 'app/providers/router/lib/routeConfig';
import { componentRender } from 'shared/lib/tests/componentRender';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    componentRender(<Navbar />, { wrapper: BrowserRouter });
  });

  it('renders with the correct passed className', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = componentRender(<Navbar className={mockClassName} />, { wrapper: BrowserRouter });
    const navbar = getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveClass('navbar', mockClassName);
  });

  it('renders login button when auth data is not exist', () => {
    const { getByTestId } = componentRender(<Navbar />, {
      wrapper: BrowserRouter,
      initialState: { user: { authData: null } },
    });
    const loginBtn = getByTestId('login-btn');

    expect(loginBtn).toBeInTheDocument();
  });

  it('renders logout button when auth data is exist', () => {
    const { getByTestId } = componentRender(<Navbar />, {
      wrapper: BrowserRouter,
      initialState: { user: { authData: { id: '1', username: 'test' } } },
    });
    const loginBtn = getByTestId('logout-btn');

    expect(loginBtn).toBeInTheDocument();
  });

  describe('links', () => {
    let history: MemoryHistory;
    let navbar: HTMLElement;
    let user: UserEvent;

    beforeEach(() => {
      history = createMemoryHistory();
      const { getByTestId } = componentRender(
        <Router location={history.location} navigator={history}>
          <Navbar />
        </Router>,
      );

      navbar = getByTestId('navbar');
      user = userEvent.setup();
    });

    it('routes to the about page by click on the about link', async () => {
      const aboutLink = within(navbar).getByTestId('about-link');

      await user.click(aboutLink);

      expect(history.location.pathname).toEqual(routePaths[AppRoutes.About]);
    });

    it('routes to the main page by click on the main link', async () => {
      const mainLink = within(navbar).getByTestId('main-link');

      await userEvent.click(mainLink);

      expect(history.location.pathname).toEqual(routePaths[AppRoutes.Main]);
    });
  });
});
