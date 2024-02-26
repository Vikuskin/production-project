import { userEvent } from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import { routePaths } from 'app/providers/router';
import { componentRender } from 'shared/lib/tests/componentRender';
import { AppLinkVariant } from 'shared/ui/AppLink/ui/AppLink';

import { NavbarLink } from './NavbarLink';

import { INavbarLink } from '../../model/types/navbarLink';

describe('NavbarLink', () => {
  it('renders with passed props and routes to the correct page by the click', async () => {
    const testLink: INavbarLink = {
      path: routePaths.about,
      text: 'About',
      variant: AppLinkVariant.Secondary,
    };
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
});
