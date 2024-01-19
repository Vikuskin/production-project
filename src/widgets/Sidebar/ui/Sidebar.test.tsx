import { fireEvent, render, within } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    renderWithTranslation(<Sidebar />);
  });

  it('renders with the correct class and passed className', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(<Sidebar className={mockClassName} />);
    const sidebar = getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('sidebar', mockClassName);
  });

  it('toggles collapsed state on button click', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(<Sidebar className={mockClassName} />);
    const sidebar = getByTestId('sidebar');
    const button = within(sidebar).getByTestId('sidebar-toggle-btn');

    fireEvent.click(button);

    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(button);

    expect(sidebar).not.toHaveClass('collapsed');
  });
});
