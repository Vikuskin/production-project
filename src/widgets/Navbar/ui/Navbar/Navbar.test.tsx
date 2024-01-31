import { componentRender } from 'shared/lib/tests/componentRender';

import { Navbar } from './Navbar';

import { navbarLinks } from '../../model/navbarLinks';

describe('Navbar', () => {
  it('renders without crashing', () => {
    componentRender(<Navbar />);
  });

  it('renders with the correct passed className', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = componentRender(<Navbar className={mockClassName} />);
    const navbar = getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveClass('navbar', mockClassName);
  });

  it('renders all links from array with navbar links', async () => {
    const { findAllByTestId } = componentRender(<Navbar />);
    const links = await findAllByTestId('navbar-link');

    expect(links.length).toBe(navbarLinks.filter((link) => !link.authOnly).length);
  });
});
