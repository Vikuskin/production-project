import { Country } from 'shared/enums/country';
import { Currency } from 'shared/enums/currency';
import { ICustomError } from 'shared/types/customError';

export interface IProfile {
  data: IProfileData | null;
  isLoading: boolean;
  error: ICustomError | null;
  readonly: boolean;
}

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
