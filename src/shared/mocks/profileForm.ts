import { Country, Currency } from 'entities/Profile';
import AvatarImg from 'shared/assets/tests/storybook-avatar.jpeg';

export const profileForm = {
  id: '1',
  age: '24',
  avatar: AvatarImg,
  city: 'City',
  country: Country.Canada,
  currency: Currency.EUR,
  firstName: 'First name',
  lastName: 'Last name',
  username: 'Username',
};
