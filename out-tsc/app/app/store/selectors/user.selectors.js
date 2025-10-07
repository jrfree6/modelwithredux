// store/selectors/user.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
export const selectUserState = createFeatureSelector('users');
export const selectAllUsers = createSelector(selectUserState, (state) => state.users);
export const selectUsersLoading = createSelector(selectUserState, (state) => state.loading);
export const selectUsersError = createSelector(selectUserState, (state) => state.error);
export const selectSelectedUser = createSelector(selectUserState, (state) => state.selectedUser);
