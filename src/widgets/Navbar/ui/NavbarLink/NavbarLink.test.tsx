import { userEvent } from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import { componentRender } from 'shared/lib/tests/componentRender';

import { NavbarLink } from './NavbarLink';

import { navbarLinks } from '../../model/navbarLinks';

describe('NavbarLink', () => {
  const testLink = navbarLinks[0];

  it('renders with passed props and routes to the correct page by the click', async () => {
    const history = createMemoryHistory();
    const { getByTestId } = componentRender(<NavbarLink link={testLink} />, {
      routerProps: { history, location: history.location },
    });
    const link = getByTestId('navbar-link');
    const user = userEvent.setup();

    await user.click(link);

    expect(history.location.pathname).toEqual(testLink.path);
    expect(link).toHaveClass(testLink.variant);
    expect(link).toHaveTextContent(testLink.text);
  });

  it('does not render link when flag authOnly true', async () => {
    const { container } = componentRender(<NavbarLink link={{ ...testLink, authOnly: true }} />);

    expect(container.childElementCount).toBe(0);
  });
});
