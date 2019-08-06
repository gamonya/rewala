import { Epic, StateObservable } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { EMPTY, Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
// TYPES
import { ChangePasswordInput, User } from '../../../shared/generated/graphql';
import PasswordService from '../service';
import { AppState } from '../../index';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<ChangePasswordInput, User, Error>('CHANGE_PASSWORD_REQUEST');

const epic: Epic = (actions$: Observable<Action>, state$: StateObservable<AppState>) => effect(
  actions$,
  () => {
    console.log('reset')
    return EMPTY;
  }
);

export { epic, reducer, Actions, ActionTypes };
