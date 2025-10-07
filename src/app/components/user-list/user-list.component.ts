import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../store/models/user.model';
import * as UserSelectors from '../../store/selectors/user.selectors';
import * as UserActions from '../../store/actions/user.actions';

@Component({
	selector: 'app-user-list',
	standalone: true,
	imports: [CommonModule],
	template: `
		<section>
			<h2>Users</h2>
			<button (click)="reload()">Reload</button>
			<div *ngIf="loading$ | async">Loading...</div>
			<div *ngIf="(error$ | async) as error" style="color:red">{{ error }}</div>
			<ul>
				<li *ngFor="let u of (users$ | async)">
					{{ u.id }} - {{ u.name }} ({{ u.email }})
				</li>
			</ul>
		</section>
	`
})
export class UserListComponent implements OnInit {
	users$: Observable<User[]> = this.store.select(UserSelectors.selectAllUsers);
	loading$: Observable<boolean> = this.store.select(UserSelectors.selectUsersLoading);
	error$: Observable<string | null> = this.store.select(UserSelectors.selectUsersError);

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.store.dispatch(UserActions.loadUsers());
	}

	reload(): void {
		this.store.dispatch(UserActions.loadUsers());
	}
}
