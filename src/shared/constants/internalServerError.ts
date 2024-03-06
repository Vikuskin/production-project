import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';
import { ICustomError } from '@/shared/interfaces/customError';

export const INTERNAL_SERVER_ERROR: ICustomError = {
  status: ErrorStatusCode.InternalServerError,
  message: 'Internal server error',
};
