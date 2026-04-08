# fakesocial-typescript-sdk

SDK TypeScript pour FakeMedia.

## Installation

```bash
bun install
```

## Vérification

```bash
bun run check
```

## Utilisation

```ts
import { createFakeMediaClient } from './index';

const client = createFakeMediaClient({
	baseUrl: 'https://example.com',
	token: 'user-or-access-token',
});

const me = await client.me.get();
const posts = await client.posts.list({ limit: 20 });
```

## Points d'entrée

- `auth` pour login, inscription, TOTP et passkeys
- `oauth` pour token, revocation, applications et helpers d’URL
- `users`, `me`, `posts`, `conversations`, `notifications`
- `reports`, `appeals`, `admin`, `platform`

La bibliothèque expose aussi `FakeMediaApiError` pour normaliser les erreurs HTTP côté client.

## Architecture

Le SDK est découpé en couches simples:

- `src/core/` pour le transport HTTP et les helpers partagés
- `src/modules/` pour les groupes d’endpoints par domaine métier
- `src/client.ts` pour l’assemblage de la façade publique

Cette séparation permet d’ajouter des endpoints sans regonfler un fichier central unique.
