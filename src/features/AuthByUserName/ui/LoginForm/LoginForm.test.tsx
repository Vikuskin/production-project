import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

import { componentRender } from 'shared/lib/tests/componentRender';

import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  const user = userEvent.setup();

  it('renders without crashing', () => {
    componentRender(<LoginForm />);
  });

  it('handles email input change', async () => {
    const { getByTestId } = componentRender(<LoginForm />);
    const emailInput = getByTestId('email-input') as HTMLInputElement;

    await user.type(emailInput, 'test@example.com');

    expect(emailInput.value).toBe('test@example.com');
  });

  it('handles password input change', async () => {
    const { getByTestId } = componentRender(<LoginForm />);
    const passwordInput = getByTestId('password-input') as HTMLInputElement;

    await user.type(passwordInput, 'testPassword');

    expect(passwordInput.value).toBe('testPassword');
  });

  it('renders with given className', () => {
    const { container } = componentRender(<LoginForm className="custom-class" />);
    const formContainer = container.firstChild;

    expect(formContainer).toHaveClass('custom-class');
  });

  it('renders login button with correct text', () => {
    const { getByText } = componentRender(<LoginForm />);
    const loginButton = getByText('Login');

    expect(loginButton).toBeInTheDocument();
  });
});
