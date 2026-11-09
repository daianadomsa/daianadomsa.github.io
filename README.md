# Portofoliu — Domșa Daiana

Portofoliu personal construit cu Angular 21, TypeScript și SCSS. Prezintă competențe tehnice și
proiecte academice/personale pentru roluri entry-level în IT. Design static, responsive, cu paletă
deschisă champagne și bronz.

## Cerințe

- Node.js 22.12+ (CI folosește Node 22)
- npm

> Angular CLI 21 este fixat intenționat. Angular CLI 22 cere Node >= 24.15, iar mediul local poate
> avea o versiune mai veche de Node 24.

## Comenzi

```bash
npm install       # instalare dependențe
npm start         # dev server la http://localhost:4200
npm run build     # build de producție în dist/portofoliu/browser
npm test          # teste unitare cu Vitest
npm run format    # formatare cu Prettier
```

## Structură

```
src/app/
  core/
    data/         # profile, projects, skills
    models/       # tipuri TypeScript
  features/
    navbar/ hero/ skills/ projects/ home/
  shared/
    components/   # icon, section-heading
```

- `src/styles.scss` conține tokenurile de design, reset-ul și primitivele globale.
- Fiecare secțiune este un standalone component cu stiluri SCSS proprii.
- Tema este fixă (champagne deschis + accente bronz); nu există comutator light/dark și nici
  animații.
- Competențele sunt împărțite în niveluri (`SKILL_LEVELS`) și arii practice (`SKILL_AREAS`) în
  `src/app/core/data/skills.data.ts`.
- Conținutul proiectelor se editează în `src/app/core/data/projects.data.ts`.
- Datele publice ale profilului se editează în `src/app/core/data/profile.data.ts` (fără email).
- Footer-ul conține doar numele, anul curent și linkul către GitHub.

## Deploy

Push-ul pe `main` rulează `.github/workflows/deploy.yml` și publică `dist/portofoliu/browser` pe
GitHub Pages. Site-ul este un user site (`daianadomsa.github.io`), deci `base href` rămâne `/`.
