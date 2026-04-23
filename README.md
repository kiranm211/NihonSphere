# NihonSphere

NihonSphere is a modern Japanese learning platform focused on JLPT preparation from N5 to N1.

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS
- Node.js API routes
- Zustand state store
- JWT auth example
- PostgreSQL schema + seed SQL

## Pages
- `/` landing page
- `/dashboard`
- `/levels/[level]` (N5–N1)
- `/lessons/[id]`
- `/kanji/[id]`
- `/quiz`

## API examples
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/dashboard`
- `GET /api/levels/[level]`
- `GET /api/quiz`
- `GET /api/search?q=...`
- `GET/POST /api/bookmarks`

## Database
See:
- `/database/schema.sql`
- `/database/seed.sql`

## Run locally
```bash
npm install
npm run dev
```

## Future scalability ideas
- AI tutor with adaptive feedback
- Conversational practice chat
- Speech pronunciation scoring
- Personalized spaced repetition tuning
- Real-time collaborative study rooms
