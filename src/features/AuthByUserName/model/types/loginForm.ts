import { ICustomError } from 'shared/types/customError';

export interface ILoginForm {
  username: string;
  password: string;
  isLoading: boolean;
  error: ICustomError | null;
}
