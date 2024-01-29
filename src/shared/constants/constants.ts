import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/types/customError';

export const LOCAL_STORAGE_KEYS = {
  Theme: 'theme',
  Language: 'i18nextLng',
  Auth: 'Authentication',
};
export const ANIMATION_DELAY = 200;
export const INTERNAL_SERVER_ERROR: ICustomError = {
  status: ErrorStatusCode.InternalServerError,
  message: 'Internal server error',
};