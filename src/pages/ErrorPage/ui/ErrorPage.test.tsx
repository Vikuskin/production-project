import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { componentRender } from 'shared/lib/tests/componentRender';

import { ErrorPage } from './ErrorPage';

describe('ErrorPage', () => {
  it('renders without crashing with passed params', () => {
    const { getByText } = componentRender(<ErrorPage errorCode={ErrorStatusCode.BadRequest} text="Error text" />);
    const errorText = getByText(`${ErrorStatusCode.BadRequest} Error text`);

    expect(errorText).toBeInTheDocument();
  });
});
