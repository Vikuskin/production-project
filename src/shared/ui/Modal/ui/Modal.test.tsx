import { act, fireEvent, render, screen } from '@testing-library/react';

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

  it('renders with correct isOpening class', () => {
    const { getByTestId } = render(<Modal isOpen={true} onClose={() => {}} />);
    const modal = getByTestId('Modal.wrapper');

    expect(modal).toHaveClass('isOpening');
  });

  it('change class to opened after animation delay', () => {
    const { getByTestId } = render(<Modal isOpen={true} onClose={onCloseMock} />);
    const modal = getByTestId('Modal.wrapper');

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), ANIMATION_DELAY);

    act(() => jest.runOnlyPendingTimers());
    expect(modal).toHaveClass('opened');
  });

  it('calls onClose when overlay is clicked', () => {
    render(<Modal isOpen={true} onClose={onCloseMock} />);

    const body = screen.getAllByRole('generic');
    const overlay = body[2];

    fireEvent.click(overlay);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), ANIMATION_DELAY);

    act(() => jest.runOnlyPendingTimers());
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not call onClose when content is clicked', () => {
    const { getByTestId } = render(<Modal isOpen={true} onClose={onCloseMock} />);
    const overlay = getByTestId('Modal.content');
    const modal = getByTestId('Modal.wrapper');

    fireEvent.click(overlay);

    act(() => jest.runOnlyPendingTimers());
    expect(onCloseMock).not.toHaveBeenCalled();
    expect(modal).toHaveClass('opened');
  });

  it('closes modal on Escape key press', () => {
    const { container } = render(<Modal isOpen={true} onClose={onCloseMock} />);

    fireEvent.keyDown(container, { key: 'Escape' });
    act(() => jest.runOnlyPendingTimers());
    expect(onCloseMock).toHaveBeenCalled();
  });
});
