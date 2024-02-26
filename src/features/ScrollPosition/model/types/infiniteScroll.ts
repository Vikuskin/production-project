import { AppRoute } from 'app/providers/router';

export type Scroll = Partial<Record<AppRoute, number>>;

export interface IInfiniteScroll {
  scroll: Scroll;
}
