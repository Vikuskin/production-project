import { userEvent } from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { componentRender } from 'shared/lib/tests/componentRender';

import { NavbarLink } from './NavbarLink';

import { navbarLinks } from '../../models/navbarLinks';

describe('NavbarLink', () => {
  it('renders with passed props and routes to the correct page by the click', async () => {
    const history = createMemoryHistory();
    const testLink = navbarLinks[0];
    const { getByTestId } = componentRender(
      <Router location={history.location} navigator={history}>
        <NavbarLink link={testLink} />
      </Router>,
    );
    const link = getByTestId('navbar-link');
    const user = userEvent.setup();

    await user.click(link);

    expect(history.location.pathname).toEqual(testLink.path);
    expect(link).toHaveClass(testLink.variant);
    expect(link).toHaveTextContent(testLink.text);
  });
});
