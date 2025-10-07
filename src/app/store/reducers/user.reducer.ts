// store/reducers/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { UserState } from '../models/user.model';
import * as UserActions from '../actions/user.actions';

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  selectedUser: null
};

export const userReducer = createReducer(
  initialState,
  
  // Load Users
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  
  // Add User
  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  })),
  
  // Select User
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUser: state.users.find(user => user.id === userId) || null
  })),
  
  // Delete User
  on(UserActions.deleteUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter(user => user.id !== userId)
  }))
);