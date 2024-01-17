import { render } from '@testing-library/react';
import { AppLink, AppLinkThemes } from './AppLink';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { userEvent } from '@testing-library/user-event';

describe('AppLink', () => {
  it('renders with default props', () => {
    const { getByText } = render(<AppLink to="/example">Link Text</AppLink>, { wrapper: BrowserRouter });

    expect(getByText('Link Text')).toBeInTheDocument();
    expect(getByText('Link Text')).toHaveClass(AppLinkThemes.Primary);
  });

  it('renders with custom class name and passed theme', () => {
    const mockClassName = 'custom-class';
    const { getByText } = render(
      <AppLink to="/example" className={mockClassName} theme={AppLinkThemes.Secondary}>
        Link Text
      </AppLink>,
      { wrapper: BrowserRouter },
    );

    expect(getByText('Link Text')).toHaveClass(mockClassName, AppLinkThemes.Secondary);
  });

  it('routes to page by passed path', async () => {
    const history = createMemoryHistory();
    const path = '/test';
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <AppLink to={path}>Link Text</AppLink>
      </Router>,
    );
    const link = getByText('Link Text');
    const user = userEvent.setup();

    await user.click(link);

    expect(history.location.pathname).toEqual(path);
  });
});
