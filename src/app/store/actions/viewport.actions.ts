import { createAction, props } from '@ngrx/store';

export const SET_VIEWPORT = createAction(
  '[Viewport] Set viewport',
  props<{ size: string }>()
);
