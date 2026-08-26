# EyeExplore

Marketing site and shell for **EyeExplore**, a visual eyetracking dashboard for researchers, UX designers, and cognitive psychologists.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Landing page |
| `/dashboard` | Placeholder workspace (mount your Dash app here) |
| `/docs` | Data schema, I-VT parameters, CSV troubleshooting |
| `/tutorials` | Onboarding, video placeholders, sample datasets |
| `/gallery` | Use-case gallery |
| `/support` | Issue form, FAQ, community contact |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Point the dashboard iframe in `app/dashboard/page.tsx` at your Python/Dash process (e.g. `http://localhost:8050`) when you are ready to embed it.
