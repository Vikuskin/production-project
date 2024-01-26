export interface ILoginForm {
  username: string;
  password: string;
  isLoading: boolean;
  error: ILoginFormError | null;
}

export interface ILoginFormError {
  status: number;
  message: string;
}
