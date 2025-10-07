import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [UserListComponent],
	template: `<h1>Model With Redux</h1><app-user-list></app-user-list>`,
})
export class AppComponent {}