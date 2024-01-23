import { userEvent } from '@testing-library/user-event';

import { componentRender } from 'shared/lib/tests/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  it('should render correct value from state', () => {
    const { getByTestId } = componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const renderedValue = getByTestId('counter-value');

    expect(renderedValue).toHaveTextContent('10');
  });

  it('shuould increment the counter value by click on increment button', async () => {
    const { getByTestId } = componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incrementBtn = getByTestId('increment-btn');
    const renderedValue = getByTestId('counter-value');

    await userEvent.click(incrementBtn);

    expect(renderedValue).toHaveTextContent('11');
  });

  it('shuould decrement the counter value by click on increment button', async () => {
    const { getByTestId } = componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const decrementBtn = getByTestId('decrement-btn');
    const renderedValue = getByTestId('counter-value');

    await userEvent.click(decrementBtn);

    expect(renderedValue).toHaveTextContent('9');
  });
});
