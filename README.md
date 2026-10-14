# HackHeist 2026

Official landing page for HackHeist 2026 by GDG on Campus MIET.

## Development

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` starts the local dev server
- `npm run build` creates the production build
- `npm run lint` runs ESLint
- `npm test` runs the tests

## Event settings

Event name, date, time, venue and the registration link live in `src/config/event.js`. Set `registrationOpen` to `true` and `registrationUrl` to the real form link to enable the Register buttons.

## Deploying to Netlify

The repository includes `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Environment: `NODE_VERSION=22`

No environment variables or backend services are required.

## Built with

Vite, React, Tailwind CSS, Framer Motion and Lucide icons.
