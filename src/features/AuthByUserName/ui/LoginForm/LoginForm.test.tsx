import '@testing-library/jest-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { userEvent } from '@testing-library/user-event';

import { IState } from '@/app/providers/StoreProvider';
import { INTERNAL_SERVER_ERROR } from '@/shared/constants/internalServerError';
import { componentRender } from '@/shared/lib/tests/componentRender';

import LoginForm from './LoginForm';

import { loginFormReducer } from '../../model/slices/loginFormSlice';

describe('LoginForm', () => {
  const user = userEvent.setup();
  const onSucess = jest.fn();

  it('renders without crashing', () => {
    componentRender(<LoginForm onClose={onSucess} />);
  });

  it('handles username input change', async () => {
    const { getByTestId } = componentRender(<LoginForm onClose={onSucess} />);
    const usernameInput = getByTestId('username-input') as HTMLInputElement;

    await user.type(usernameInput, 'test@example.com');

    expect(usernameInput.value).toBe('test@example.com');
  });

  it('handles password input change', async () => {
    const { getByTestId } = componentRender(<LoginForm onClose={onSucess} />);
    const passwordInput = getByTestId('password-input') as HTMLInputElement;

    await user.type(passwordInput, 'testPassword');

    expect(passwordInput.value).toBe('testPassword');
  });

  it('renders with given className', () => {
    const { container } = componentRender(<LoginForm className="custom-class" onClose={onSucess} />);
    const formContainer = container.firstChild;

    expect(formContainer).toHaveClass('custom-class');
  });

  it('renders login button with correct text', () => {
    const { getByText } = componentRender(<LoginForm onClose={onSucess} />);
    const loginButton = getByText('Login');

    expect(loginButton).toBeInTheDocument();
  });

  it('renders disabled button when state has isLoading true', () => {
    const { getByText } = componentRender(<LoginForm onClose={onSucess} />, {
      initialState: { loginForm: { error: null, isLoading: true, password: '', username: '' } },
      asyncReducers: { loginForm: loginFormReducer } as ReducersMapObject<IState>,
    });
    const loginButton = getByText('Login');

    expect(loginButton).toHaveClass('disabled');
  });

  it('renders error when state has error', () => {
    const { getByText } = componentRender(<LoginForm onClose={onSucess} />, {
      initialState: { loginForm: { error: INTERNAL_SERVER_ERROR, isLoading: false, password: '', username: '' } },
      asyncReducers: { loginForm: loginFormReducer } as ReducersMapObject<IState>,
    });
    const errorTitle = getByText(`${INTERNAL_SERVER_ERROR.status}_error`);
    const errorText = getByText(INTERNAL_SERVER_ERROR.message);

    expect(errorText).toBeInTheDocument();
    expect(errorTitle).toBeInTheDocument();
  });
});
