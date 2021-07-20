// TypeScript Interfaces
import { IAction } from './interfaces';

// TypeScript Types
export type TSChildrenProps = {
  children: React.ReactNode;
  path: string | null;
};

export type TStoreProviderProps = {
  children: React.ReactNode;
};

export type TSDispatch = {
  dispatch: React.Dispatch<IAction>;
};
