import { AppRoutes } from '@/shared/enums/appRoutes';

export type Scroll = Partial<Record<AppRoutes, number>>;

export interface IInfiniteScroll {
  scroll: Scroll;
}
