// TODO: improve validation
import { IProfileData } from 'entities/Profile';

import { ValidateProfileError } from '../types/validateProfileError';

export const validateProfile = (profile: Partial<IProfileData> | null): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NoData];
  }

  const { age, city, firstName, lastName } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.IncorrectUserData);
  }

  if (!age || !Number.isInteger(+age)) {
    errors.push(ValidateProfileError.IncorrectAge);
  }

  if (!city) {
    errors.push(ValidateProfileError.IncorrectCity);
  }

  return errors;
};
