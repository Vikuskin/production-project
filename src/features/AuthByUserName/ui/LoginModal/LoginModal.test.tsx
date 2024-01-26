import { within } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender';

import { LoginModal } from './LoginModal';

describe('LoginModal', () => {
  const mockProps = {
    isOpen: true,
    onClose: jest.fn(),
    className: 'custom-modal',
  };

  it('renders without crashing', () => {
    componentRender(<LoginModal {...mockProps} />);
  });

  it('renders LoginForm component inside Modal', () => {
    const { getByTestId } = componentRender(<LoginModal {...mockProps} />);
    const modalComponent = getByTestId('modal');
    const loginForm = within(modalComponent).getByText('Login');

    expect(modalComponent).toBeInTheDocument();
    expect(loginForm).toBeInTheDocument();
    expect(modalComponent).toHaveClass(mockProps.className);
  });
});
