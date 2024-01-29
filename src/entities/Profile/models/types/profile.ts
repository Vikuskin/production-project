import { Country } from 'shared/enums/country';
import { Currency } from 'shared/enums/currency';
import { ICustomError } from 'shared/types/customError';

export interface IProfile {
  firstName: string;
  lastName: string;
  age: string;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface IProfileSchema {
  data: IProfile | null;
  isLoading: boolean;
  error: ICustomError | null;
  readonly: boolean;
}
