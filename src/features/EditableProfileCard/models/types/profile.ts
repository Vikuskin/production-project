import { IProfileData } from 'entities/Profile';
import { ICustomError } from 'shared/types/customError';

export interface IProfile {
  data: IProfileData | null;
  form: Partial<IProfileData> | null;
  isLoading: boolean;
  error: ICustomError | null;
  readonly: boolean;
}
