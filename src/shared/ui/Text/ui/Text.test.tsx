import { render } from '@testing-library/react';

import { Text } from './Text';

import { TextSize } from '../types/TextSize';
import { TextVariant } from '../types/TextVariant';

describe('Text', () => {
  it('renders without crashing with default normal class and size', () => {
    const { getByTestId, getByText } = render(<Text text="text" />);
    const textWrapper = getByTestId('text-wrapper');
    const text = getByText('text');

    expect(textWrapper).toHaveClass(TextVariant.Normal);
    expect(text).toHaveClass(TextSize.SizeM);
  });

  it('renders with correct passing props', () => {
    const { getByTestId, getByText } = render(
      <Text text="text" title="title" variant={TextVariant.Error} size={TextSize.SizeS} className="custom-class" />,
    );
    const textWrapper = getByTestId('text-wrapper');
    const title = getByText('title');
    const text = getByText('text');

    expect(textWrapper).toHaveClass('custom-class', TextVariant.Error);
    expect(text).toHaveClass(TextSize.SizeS);
    expect(title).toHaveClass(TextSize.SizeS);
  });
});
