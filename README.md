# ModelWithRedux (Angular + NgRx)

Aplicação Angular (standalone) com gerenciamento de estado usando NgRx (Store, Effects, Devtools).

## Stack
- Angular (standalone)
- NgRx: Store, Effects, Store Devtools
- HttpClient
- TypeScript

## Requisitos
- Node.js >= 20.19 (recomendado: 20 LTS)
- npm >= 10

Verifique:
```bash
node -v
npm -v
```

Se estiver usando `nvm`:
```bash
nvm install 20
nvm use 20
```

## Instalação
Dentro do diretório do projeto:
```bash
npm install
```

## Scripts
- `npm start`: inicia o servidor de desenvolvimento (http://localhost:4200)
- `npm run build`: build de produção para `dist/`

## Como rodar
```bash
npm start
# Abra http://localhost:4200/
```

## Estrutura principal
```
src/
  app/
    app.component.ts           # Componente raiz (standalone)
    main.ts                    # Bootstrap standalone + NgRx + HttpClient
    components/
      user-list/
        user-list.component.ts # Lista usuários consumindo NgRx
    services/
      user.service.ts          # Acesso HTTP de usuários
    store/
      actions/user.actions.ts
      effects/user.effects.ts
      reducers/user.reducer.ts
      selectors/user.selectors.ts
      models/user.model.ts     # Interfaces User e UserState
  index.html                   # Raiz do app (<app-root>)
  styles.css                   # Estilos globais
```

## NgRx: visão geral
- `user.actions.ts`: define ações (carregar, sucesso, falha, adicionar, selecionar, excluir).
- `user.reducer.ts`: atualiza `UserState` conforme ações.
- `user.effects.ts`: orquestra chamadas assíncronas via `UserService`.
- `user.selectors.ts`: seletores memoizados para ler `UserState`.
- `main.ts`: registra `provideStore`, `provideEffects` e `provideStoreDevtools`.

## Exemplos de uso

### Seletores no componente
```ts
import { Store } from '@ngrx/store';
import * as UserSelectors from './app/store/selectors/user.selectors';

users$ = this.store.select(UserSelectors.selectAllUsers);
loading$ = this.store.select(UserSelectors.selectUsersLoading);
error$ = this.store.select(UserSelectors.selectUsersError);

constructor(private store: Store) {}
```

### Disparando ações
```ts
import * as UserActions from './app/store/actions/user.actions';

// Carregar usuários
this.store.dispatch(UserActions.loadUsers());

// Adicionar usuário
this.store.dispatch(UserActions.addUser({ user: { id: 1, name: 'Alice', email: 'a@a.com' } }));

// Selecionar usuário
this.store.dispatch(UserActions.selectUser({ userId: 1 }));

// Excluir usuário
this.store.dispatch(UserActions.deleteUser({ userId: 1 }));
```

### Componente de exemplo
O projeto já inclui `UserListComponent` (`src/app/components/user-list/user-list.component.ts`) que:
- dispara `loadUsers` no `ngOnInit`
- seleciona `users`, `loading` e `error` do estado
- renderiza a lista e tem botão `Reload`

Para usá-lo no `AppComponent` (já configurado):
```html
<h1>Model With Redux</h1>
<app-user-list></app-user-list>
```

## Configuração de API
O `UserService` usa a URL padrão:
```ts
private apiUrl = 'https://api.example.com/users';
```
Ajuste conforme sua API real em `src/app/services/user.service.ts`.

## Dicas / Troubleshooting
- Erro de versão do Node: “Angular CLI requires Node >= 20.19”
  - Solução: `nvm install 20 && nvm use 20` (ou instale Node 20 via seu gerenciador de pacotes).
- SSR não habilitado: projeto configurado apenas para SPA.
- Imports quebrados: confirme caminhos relativos nos arquivos `src/app/**`.

## Licença
GNU(General Public License).


Obs: Ajuste conforme necessário.
