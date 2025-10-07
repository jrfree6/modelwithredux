// components/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../store/models/user.model';
import * as UserActions from '../../store/actions/user.actions';
import * as UserSelectors from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-user-list',
  template: `
    <div *ngIf="loading$ | async">Carregando...</div>
    <div *ngIf="error$ | async as error" class="error">{{ error }}</div>
    
    <div *ngFor="let user of users$ | async" class="user-item">
      <span>{{ user.name }}</span>
      <button (click)="selectUser(user.id)">Selecionar</button>
      <button (click)="deleteUser(user.id)">Excluir</button>
    </div>

    <div *ngIf="selectedUser$ | async as selectedUser">
      Usuário selecionado: {{ selectedUser.name }}
    </div>

    <button (click)="addUser()">Adicionar Usuário</button>
  `
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  selectedUser$: Observable<User | null>;

  constructor(private store: Store) {
    this.users$ = this.store.select(UserSelectors.selectAllUsers);
    this.loading$ = this.store.select(UserSelectors.selectUsersLoading);
    this.error$ = this.store.select(UserSelectors.selectUsersError);
    this.selectedUser$ = this.store.select(UserSelectors.selectSelectedUser);
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  selectUser(userId: number) {
    this.store.dispatch(UserActions.selectUser({ userId }));
  }

  deleteUser(userId: number) {
    this.store.dispatch(UserActions.deleteUser({ userId }));
  }

  addUser() {
    const newUser: User = {
      id: Math.random(),
      name: 'Novo Usuário',
      email: 'novo@email.com'
    };
    this.store.dispatch(UserActions.addUser({ user: newUser }));
  }
}