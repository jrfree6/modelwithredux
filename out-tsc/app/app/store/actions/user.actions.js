// store/actions/user.actions.ts
import { createAction, props } from '@ngrx/store';
// Load Users
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props());
export const loadUsersFailure = createAction('[User] Load Users Failure', props());
// Add User
export const addUser = createAction('[User] Add User', props());
export const addUserSuccess = createAction('[User] Add User Success', props());
// Select User
export const selectUser = createAction('[User] Select User', props());
// Delete User
export const deleteUser = createAction('[User] Delete User', props());
