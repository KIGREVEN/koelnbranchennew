# koelnbranchennew

Beispielhafte Vollstack-Implementierung eines Branchenportals.

## Projektstruktur
```
backend/   NestJS API (PostgreSQL/Prisma, Elasticsearch, Redis)
frontend/  Next.js 14 App Router + Tailwind
prisma/    Prisma Schema & Seeds
```

## Start
1. `docker-compose up` – startet Datenbank, Suche, Redis, API und Web.
2. Backend: `npm install` in `backend`, dann `npm run prisma:generate && npm run prisma:migrate && npm run prisma:seed`.
3. Frontend: `npm install` in `frontend`, dann `npm run dev`.

Playwright E2E-Tests liegen in `e2e/`.
