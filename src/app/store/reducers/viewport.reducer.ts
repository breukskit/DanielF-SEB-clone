import { Action, createReducer, on } from '@ngrx/store';

import { IAppState, IViewportState } from '../../models/app-state';
import { SET_VIEWPORT } from '../actions/viewport.actions';

const setInitViewport = () => {
  const width = window.innerWidth;
  if (width <= 766) {
    return 'small';
  } else if (width >= 767 && width < 1025) {
    return 'medium';
  } else if (width >= 1025 && width < 1300) {
    return 'large';
  } else {
    return 'xlarge';
  }
};

const initialState: IViewportState = { viewport: setInitViewport() };

const _viewportReducer = createReducer(
  initialState,
  on(SET_VIEWPORT, (state, props) => ({ ...state, viewport: props.size }))
);

export function viewportReducer(state: IViewportState, action: Action) {
  return _viewportReducer(state, action);
}
