import { IProfileData } from '@/entities/Profile';

import { validateProfile } from './validateProfile';

import { ValidateProfileError } from '../enums/validateProfileError';

describe('validateProfile', () => {
  it('returns an array with ValidateProfileError.NoData if profile is null', () => {
    const result = validateProfile(null);

    expect(result).toEqual([ValidateProfileError.NoData]);
  });

  it('returns an array with ValidateProfileError.IncorrectUserData if firstName or lastName is missing', () => {
    const incompleteProfile: Partial<IProfileData> = {
      age: '25',
      city: 'SampleCity',
      firstName: 'John',
    };
    const result = validateProfile(incompleteProfile);

    expect(result).toContain(ValidateProfileError.IncorrectUserData);
  });

  it('returns an array with ValidateProfileError.IncorrectAge if age is missing or not a valid integer', () => {
    const invalidAgeProfile: Partial<IProfileData> = {
      firstName: 'John',
      lastName: 'Doe',
      city: 'SampleCity',
      age: 'not-a-number',
    };
    const result = validateProfile(invalidAgeProfile);

    expect(result).toContain(ValidateProfileError.IncorrectAge);
  });

  it('returns an array with ValidateProfileError.IncorrectCity if city is missing', () => {
    const profileWithoutCity: Partial<IProfileData> = {
      firstName: 'John',
      lastName: 'Doe',
      age: '25',
    };
    const result = validateProfile(profileWithoutCity);

    expect(result).toContain(ValidateProfileError.IncorrectCity);
  });

  it('returns an array with many errors if all inputs is missing', () => {
    const profileEmpty: Partial<IProfileData> = {
      firstName: '',
      lastName: '',
      age: '',
      city: '',
    };
    const result = validateProfile(profileEmpty);

    expect(result).toEqual([
      ValidateProfileError.IncorrectUserData,
      ValidateProfileError.IncorrectAge,
      ValidateProfileError.IncorrectCity,
    ]);
  });

  it('returns an empty array if the profile is valid', () => {
    const validProfile: Partial<IProfileData> = {
      firstName: 'John',
      lastName: 'Doe',
      age: '25',
      city: 'SampleCity',
    };
    const result = validateProfile(validProfile);

    expect(result).toEqual([]);
  });
});
