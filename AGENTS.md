# AGENTS.md — Daiana Domșa portfolio

Angular 21 portfolio (standalone components, TypeScript, SCSS). No SSR, no NgModules; the app is
zoneless and uses signals. Tests run on Vitest.

The site content is Romanian and aimed at recruiters: it presents an entry-level IT profile, not a
senior/specialist one.

## Commands

- `npm install` — Node 22.12+ (CI uses Node 22)
- `npm start` — dev server at `http://localhost:4200`
- `npm run build` — production output in `dist/portofoliu/browser`
- `npm test -- --watch=false` — one-shot test run
- `npm run format` / `npm run format:check` — Prettier

There is no ESLint config; the Angular compiler plus `strictTemplates` catches most issues.

## Deploy

- `.github/workflows/deploy.yml` deploys on push to **`main`** only, uploading
  `dist/portofoliu/browser` to GitHub Pages.
- `base href` is `/` because this is the `daianadomsa.github.io` user site. Do not change it.
- Angular CLI is pinned to 21 intentionally: CLI 22 requires Node >= 24.15, and this machine may run
  an older Node 24. Check `node --version` before upgrading Angular.

## Architecture

- `src/app/features/` contains one standalone component per section: `navbar`, `hero`, `skills`,
  `projects`, plus a lazy-loaded `home` shell. There is no Contact section.
- `src/app/app.ts` is only the shell: navbar + `<router-outlet>` + minimal footer (name, year,
  GitHub link).
- `src/app/core/data/` is the content source: `projects.data.ts`, `skills.data.ts`, `profile.data.ts`.
  Project categories and filters are derived at runtime from `projects.data.ts`, so no category list
  needs manual updates.
- `skills.data.ts` separates proficiency levels (`SKILL_LEVELS`) from practical areas/databases
  (`SKILL_AREAS`); the Skills section renders both blocks.
- `profile.data.ts` also exports `ROLE_TARGETS`, the four entry-level roles rendered in the hero
  summary card.
- `src/app/shared/` holds reusable pieces: `icon` (inline SVG set) and `section-heading`.

## Visual rules

- The palette is a single fixed light champagne & bronze theme, defined in `src/styles.scss`: `--bg`
  (#faf6f0), `--surface` (#fdfbf7), `--text` (#2c221e), `--text-muted` (#6e5a4f), `--border`
  (#e6dec8), `--accent` bronze (#9e7347), and `--champagne` (#dfc8b0) for pills/tags. There is no
  dark theme and no `ThemeService`.
- Keep the design static: no CSS animations, keyframes, reveal effects, floating badges, pulsing
  dots, transforms on hover, or transition properties. Hover states may only change color/border.
- Use global tokens; never hardcode palette colors in components. Use `--accent-ink` for accent text
  and primary button backgrounds so contrast stays AA-compliant.
- Do not add an email address or contact form. Contact details were removed intentionally for
  privacy; the only outbound profile link is GitHub.

## Conventions / gotchas

- Component styles are SCSS and scoped; keep them under the `anyComponentStyle` budget (8 kB warn,
  12 kB error in `angular.json`).
- Use Angular control flow (`@if`, `@for` with `track`) and signals (`signal`, `computed`, `input`).
  Components use `ChangeDetectionStrategy.OnPush`.
- Escape literal `{` / `}` in Angular templates (`&#123;` / `&#125;`) or the compiler parses them as
  ICU messages. The hero code snippet is the existing example.
- Section nav links are plain `href="#..."` anchors. Router fragment scrolling was unreliable on the
  home route; do not switch these to `routerLink` fragments without verifying scrolling.
- `public/images/dashboard.png` is preserved from the old React site and is not currently rendered.
