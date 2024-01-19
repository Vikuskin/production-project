import { render } from '@testing-library/react';
import { createPortal } from 'react-dom';

import { Portal } from './Portal';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: jest.fn((element) => element),
}));

describe('Portal component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders children inside specified container', () => {
    const customContainer = document.createElement('div');

    render(<Portal container={customContainer}>Test Content</Portal>);

    expect(createPortal).toHaveBeenCalledWith('Test Content', customContainer);
  });

  it('renders children inside document.body if no container is specified', () => {
    render(<Portal>Test Content</Portal>);

    expect(createPortal).toHaveBeenCalledWith('Test Content', document.body);
  });
});
