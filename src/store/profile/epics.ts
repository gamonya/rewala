import { Epic, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';

import { switchMap } from 'rxjs/operators';
import { RootActions } from '../index';
import { Actions as ProfileRequestActions, ActionTypes as ProfileRequestActionTypes } from '../profile-requests';
import { transferActionEpicFactory } from '../utils/transfer-action';
import { Actions, ActionTypes } from './actions';

// GETME
const getMeEpic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.GET_ME),
  switchMap(({ payload }) => of(ProfileRequestActions.getMe.action(payload)),
  ),
);

const getMeSucceededEpic: Epic = transferActionEpicFactory(
  ProfileRequestActionTypes.getMeActionTypes.ACTION_SUCCEEDED,
  Actions.getMeSuccess,
);

const getMeFailedEpic: Epic = transferActionEpicFactory(
  ProfileRequestActionTypes.getMeActionTypes.ACTION_FAILED,
  Actions.getMeFailed,
);
// REGISTRATION
const registrationEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.REGISTRATION),
  switchMap(({ payload }) => of(ProfileRequestActions.registration.action(payload)),
  ),
);

const registrationSucceededEpic: Epic = transferActionEpicFactory(
  ProfileRequestActionTypes.registrationActionTypes.ACTION_SUCCEEDED,
  Actions.registrationSuccess,
);

const registrationFailedEpic: Epic = transferActionEpicFactory(
  ProfileRequestActionTypes.registrationActionTypes.ACTION_FAILED,
  Actions.getMeFailed,
);

export const epics = [
  getMeEpic,
  getMeSucceededEpic,
  getMeFailedEpic,
  registrationEpic,
  registrationSucceededEpic,
  registrationFailedEpic,
];
