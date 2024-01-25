import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

import { componentRender } from 'shared/lib/tests/componentRender';

import LoginForm from './LoginForm';

import { INTERNAL_SERVER_ERROR } from '../../model/services/loginByUsername';

describe('LoginForm', () => {
  const user = userEvent.setup();

  it('renders without crashing', () => {
    componentRender(<LoginForm />);
  });

  it('handles username input change', async () => {
    const { getByTestId } = componentRender(<LoginForm />);
    const usernameInput = getByTestId('username-input') as HTMLInputElement;

    await user.type(usernameInput, 'test@example.com');

    expect(usernameInput.value).toBe('test@example.com');
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

  it('renders disabled button when state has isLoading true', () => {
    const { getByText } = componentRender(<LoginForm />, {
      initialState: { loginForm: { error: null, isLoading: true, password: '', username: '' } },
    });
    const loginButton = getByText('Login');

    expect(loginButton).toHaveClass('disabled');
  });

  it('renders error when state has error', () => {
    const { getByText } = componentRender(<LoginForm />, {
      initialState: { loginForm: { error: INTERNAL_SERVER_ERROR, isLoading: false, password: '', username: '' } },
    });
    const errorTitle = getByText(`${INTERNAL_SERVER_ERROR.status}_error`);
    const errorText = getByText(INTERNAL_SERVER_ERROR.message);

    expect(errorText).toBeInTheDocument();
    expect(errorTitle).toBeInTheDocument();
  });
});
