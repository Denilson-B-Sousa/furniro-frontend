import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import { AppDispatch, RootState } from './store.ts';

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useProductDispatch: DispatchFunction = useDispatch;
export const useProductSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
