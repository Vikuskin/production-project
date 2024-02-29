import { ProfileCard } from './ProfileCard';

import { componentRender } from '../../../shared/lib/tests/componentRender';
import { Country } from '../model/types/country';
import { Currency } from '../model/types/currency';

describe('ProfileCard', () => {
  const profileDataMock = {
    firstName: 'First name',
    lastName: 'Last name',
    age: 'Age',
    currency: Currency.USD,
    country: Country.Canada,
    city: 'City',
    username: 'Username',
    avatar: 'Avatar',
  };
  const defaultProps = {
    onChangeFirstName: jest.fn(),
    onChangeLastName: jest.fn(),
    onChangeCity: jest.fn(),
    onChangeAge: jest.fn(),
    onChangeUsername: jest.fn(),
    onChangeAvatar: jest.fn(),
    onChangeCurrency: jest.fn(),
    onChangeCountry: jest.fn(),
  };

  it('renders without crashing', () => {
    componentRender(<ProfileCard profileForm={profileDataMock} {...defaultProps} />);
  });
});
