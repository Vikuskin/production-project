import { render } from '@testing-library/react';

import { Text } from './Text';

import { TextVariant } from '../types/TextVariant';

describe('Text', () => {
  it('renders without crashing with default normal class', () => {
    const { getByTestId, getByText } = render(<Text text="text" />);
    const textWrapper = getByTestId('text-wrapper');
    const text = getByText('text');

    expect(textWrapper).toHaveClass(TextVariant.Normal);
    expect(text).toHaveTextContent('text');
  });

  it('renders with correct passing props', () => {
    const { getByTestId, getByText } = render(
      <Text text="text" title="title" variant={TextVariant.Error} className="custom-class" />,
    );
    const textWrapper = getByTestId('text-wrapper');
    const title = getByText('title');

    expect(textWrapper).toHaveClass('custom-class', TextVariant.Error);
    expect(title).toBeInTheDocument();
  });
});
