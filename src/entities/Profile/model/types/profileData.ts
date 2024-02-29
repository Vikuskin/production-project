import { Country } from './country';
import { Currency } from './currency';

export interface IProfileData {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}
