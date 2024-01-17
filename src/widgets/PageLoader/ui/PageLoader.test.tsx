import { render } from '@testing-library/react';

import { PageLoader } from './PageLoader';

describe('PageLoader', () => {
  it('renders without crashing', () => {
    render(<PageLoader />);
  });
});
