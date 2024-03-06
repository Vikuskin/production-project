import { ICustomError } from '@/shared/interfaces/customError';

export interface ILoginForm {
  username: string;
  password: string;
  isLoading: boolean;
  error: ICustomError | null;
}
