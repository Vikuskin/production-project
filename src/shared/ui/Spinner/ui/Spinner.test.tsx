import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    render(<Spinner />);
  });
});
