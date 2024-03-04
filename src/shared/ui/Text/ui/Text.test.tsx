import { render } from '@testing-library/react';

import { Text } from './Text';

import { TextSizes } from '../enums/textSizes';
import { TextVariants } from '../enums/textVariants';

describe('Text', () => {
  it('renders without crashing with default normal class and size', () => {
    const { getByTestId, getByText } = render(<Text text="text" />);
    const textWrapper = getByTestId('text-wrapper');
    const text = getByText('text');

    expect(textWrapper).toHaveClass(TextVariants.Normal);
    expect(text).toHaveClass(TextSizes.SizeM);
  });

  it('renders with correct passing props', () => {
    const { getByTestId, getByText } = render(
      <Text text="text" title="title" variant={TextVariants.Error} size={TextSizes.SizeS} className="custom-class" />,
    );
    const textWrapper = getByTestId('text-wrapper');
    const title = getByText('title');
    const text = getByText('text');

    expect(textWrapper).toHaveClass('custom-class', TextVariants.Error);
    expect(text).toHaveClass(TextSizes.SizeS);
    expect(title).toHaveClass(TextSizes.SizeS);
  });
});
