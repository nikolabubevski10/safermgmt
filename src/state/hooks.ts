import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import type { RootState, AppDispatch } from './store';

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): ThunkDispatch<RootState, unknown, Action> =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
