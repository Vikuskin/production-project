import { Country } from '../enums/country';
import { Currency } from '../enums/currency';

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
