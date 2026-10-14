<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules
- Plain Vite + React SPA in JavaScript only (no TypeScript, TanStack or SSR); Netlify serves static `dist` with an SPA redirect.
- Event and registration settings live only in src/config/event.js so content changes stay in one place.
