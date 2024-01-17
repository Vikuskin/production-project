import { render, within } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import { Navbar } from './Navbar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { BrowserRouter, Router } from 'react-router-dom';
import { MemoryHistory, createMemoryHistory } from 'history';

describe('Navbar', () => {
  it('renders without crashing', () => {
    renderWithTranslation(<Navbar />, { wrapper: BrowserRouter });
  });

  it('renders with the correct passed className', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(<Navbar className={mockClassName} />, { wrapper: BrowserRouter });
    const navbar = getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveClass('navbar', mockClassName);
  });

  describe('links', () => {
    let history: MemoryHistory;
    let navbar: HTMLElement;
    let user: UserEvent;

    beforeEach(() => {
      history = createMemoryHistory();
      const { getByTestId } = render(
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

      expect(history.location.pathname).toEqual('/about');
    });

    it('routes to the main page by click on the main link', async () => {
      const mainLink = within(navbar).getByTestId('main-link');

      await userEvent.click(mainLink);

      expect(history.location.pathname).toEqual('/');
    });
  });
});
