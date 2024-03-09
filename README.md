# Astro + Drizzle + HTMX

Simple TODO list to explore Astro + HTMX (known as [AHA Stack](https://ahastack.dev/))

Install deps and run locally:
```
npm install
npm run dev
```

This project uses local `SQLite` so no db configuration is needed. All migrations will be applied when running the app.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Installs dependencies                              |
| `npm run dev`             | Starts local dev server at `localhost:4321`        |
| `npm run build`           | Build your production site to `./dist/`            |
| `npm run preview`         | Preview your build locally, before deploying       |
| `npm run start`           | Run production node app (needs build)              |
| `npm run generate`        | Generate migration files (run after schema change) |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`   |
| `npm run astro -- --help` | Get help using the Astro CLI                       |
