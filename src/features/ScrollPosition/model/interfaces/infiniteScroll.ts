import { AppRoutes } from 'app/providers/router';

export type Scroll = Partial<Record<AppRoutes, number>>;

export interface IInfiniteScroll {
  scroll: Scroll;
}
