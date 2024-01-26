import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import LangSvg from 'shared/assets/icons/translation.svg';
import { AppButtonVariant } from 'shared/ui/AppButton';

import { SidebarItem } from './SidebarItem';

import { ISidebarItem } from '../../models/types/sidebarItem';

describe('SidebarItem', () => {
  const onClickMock = jest.fn();
  const testItem: ISidebarItem = {
    Icon: LangSvg,
    onClick: onClickMock,
    text: 'Test',
  };

  it('renders with correct passed props', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<SidebarItem collapsed={false} item={testItem} className={'custom-class'} />);
    const sidebarItem = getByTestId('sidebar-item');

    await user.click(sidebarItem);

    expect(sidebarItem).toHaveClass(AppButtonVariant.Clear, 'custom-class');
    expect(sidebarItem).not.toHaveClass('collapsed');
    expect(sidebarItem).toHaveTextContent(testItem.text);
    expect(onClickMock).toHaveBeenCalled();
  });
});
