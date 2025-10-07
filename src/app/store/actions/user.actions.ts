// store/actions/user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

// Load Users
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

// Add User
export const addUser = createAction(
  '[User] Add User',
  props<{ user: User }>()
);

export const addUserSuccess = createAction(
  '[User] Add User Success',
  props<{ user: User }>()
);

// Select User
export const selectUser = createAction(
  '[User] Select User',
  props<{ userId: number }>()
);

// Delete User
export const deleteUser = createAction(
  '[User] Delete User',
  props<{ userId: number }>()
);