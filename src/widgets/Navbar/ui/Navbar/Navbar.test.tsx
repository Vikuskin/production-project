import { componentRender } from '@/shared/lib/tests/componentRender';

import { Navbar } from './Navbar';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

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
});
