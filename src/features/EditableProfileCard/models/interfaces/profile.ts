import { IProfileData } from '@/entities/Profile';
import { ICustomError } from '@/shared/interfaces/customError';

export interface IProfile {
  data: IProfileData | null;
  form: Partial<IProfileData> | null;
  isLoading: boolean;
  error: ICustomError | null;
  readonly: boolean;
  validationErrors: string[] | null;
}
