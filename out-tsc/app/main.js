// main.ts (para Angular standalone)
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './app/store/reducers/user.reducer';
import { UserEffects } from './app/store/effects/user.effects';
import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';
bootstrapApplication(AppComponent, {
    providers: [
        provideStore({ users: userReducer }),
        provideEffects([UserEffects]),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode(),
        }),
    ],
});
