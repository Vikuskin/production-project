import { fireEvent, render } from '@testing-library/react';

import { ANIMATION_DELAY, Modal } from './Modal';

describe('Modal', () => {
  const onCloseMock = jest.fn();

  beforeAll(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders correctly when isOpen is true', () => {
    const { getByTestId } = render(<Modal isOpen={true} onClose={() => {}} />);
    const modal = getByTestId('modal');

    expect(modal).toHaveClass('opened');
  });

  it('renders correctly when isOpen is false', () => {
    const { getByTestId } = render(<Modal isOpen={false} onClose={() => {}} />);
    const modal = getByTestId('modal');

    expect(modal).not.toHaveClass('opened');
  });

  it('calls onClose when overlay is clicked', () => {
    const { getByTestId } = render(<Modal isOpen={true} onClose={onCloseMock} />);
    const overlay = getByTestId('overlay');

    fireEvent.click(overlay);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), ANIMATION_DELAY);

    jest.runOnlyPendingTimers();
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not call onClose when content is clicked', () => {
    const { getByTestId } = render(<Modal isOpen={true} onClose={onCloseMock} />);
    const overlay = getByTestId('content');
    const modal = getByTestId('modal');

    fireEvent.click(overlay);

    expect(onCloseMock).not.toHaveBeenCalled();
    expect(modal).toHaveClass('opened');
  });

  it('closes modal on Escape key press', () => {
    const { container } = render(<Modal isOpen={true} onClose={onCloseMock} />);

    fireEvent.keyDown(container, { key: 'Escape' });
    jest.runOnlyPendingTimers();
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not call onClose if isOpen is false when Escape key is pressed', () => {
    const { container } = render(<Modal isOpen={false} onClose={onCloseMock} />);

    fireEvent.keyDown(container, { key: 'Escape' });
    jest.runOnlyPendingTimers();
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
