import { createSelector } from '@ngrx/store';

import { IAppState, IViewportState } from '../../models/app-state';

export const _selectViewport = (state: IAppState) => state.viewport;

export const selectViewport = createSelector(
  _selectViewport,
  (state: IViewportState) => state.viewport
);
