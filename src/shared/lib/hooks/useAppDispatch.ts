import { useDispatch } from 'react-redux';

import { createStore } from 'app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<ReturnType<typeof createStore>['dispatch']>();
