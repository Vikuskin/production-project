import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';

import { AppLink } from './AppLink';

import { AppLinkVariants } from '../enums/appLinkVariants';

describe('AppLink', () => {
  it('renders with default props', () => {
    const { getByText } = render(<AppLink to="/example">Link Text</AppLink>, { wrapper: BrowserRouter });

    expect(getByText('Link Text')).toBeInTheDocument();
    expect(getByText('Link Text')).toHaveClass(AppLinkVariants.Primary);
  });

  it('renders with custom class name and passed variant', () => {
    const mockClassName = 'custom-class';
    const { getByText } = render(
      <AppLink to="/example" className={mockClassName} variant={AppLinkVariants.Secondary}>
        Link Text
      </AppLink>,
      { wrapper: BrowserRouter },
    );

    expect(getByText('Link Text')).toHaveClass(mockClassName, AppLinkVariants.Secondary);
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
