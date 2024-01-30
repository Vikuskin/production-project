import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  const defaultProps = {
    className: 'custom-class',
    src: 'avatar-image.jpg',
    size: 60,
  };

  test('renders with the correct props', () => {
    const { getByAltText } = render(<Avatar {...defaultProps} />);
    const avatarImage = getByAltText('Avatar');

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'avatar-image.jpg');
    expect(avatarImage).toHaveStyle({ height: '60px', width: '60px' });
  });

  test('renders with the correct default size when size prop is not provided', () => {
    const { getByAltText } = render(<Avatar className="custom-class" src="avatar-image.jpg" />);
    const avatarImage = getByAltText('Avatar');

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveStyle({ height: '50px', width: '50px' });
  });
});
