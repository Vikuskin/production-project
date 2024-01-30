import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface IProfileData {
  firstName: string;
  lastName: string;
  age: string;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}
