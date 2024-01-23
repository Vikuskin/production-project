import { ICounter } from 'entities/Counter';
import { IUser } from 'entities/User';

export interface IState {
  counter: ICounter;
  user: IUser;
}
