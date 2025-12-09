# EULALIE EVENT'S — Site web

**Présentation**
- **But**: Site vitrine et boutique pour EULALIE EVENT'S (présentation d'événements, produits, contact).
- **Stack**: `Vite`, `React` 18, composants UI (Radix), utilitaires listés dans `package.json`.

**Aperçu rapide**
- **Dossier du projet**: racine du dépôt (contient `index.html`, `package.json`, `vite.config.ts`, `src/`, `build/`).
- **Entrée dev**: `src/main.tsx` et `src/App.tsx`.
- **Build de production**: sortie dans le dossier `build/` (ou `dist/` selon la config Vite).

**Prérequis**
- **Node.js**: recommandé `>= 18`.
- **Gestionnaire de paquets**: `npm` (ou `pnpm` / `yarn`).

**Installation & démarrage (développement)**
Exécutez ces commandes dans une console bash à la racine du projet:

```bash
npm install
npm run dev
```

- Ouvrir ensuite `http://localhost:5173` (ou l'URL affichée par Vite).

**Scripts utiles**
- **`npm run dev`**: lance le serveur de développement Vite.
- **`npm run build`**: construit l'application pour la production (génère les fichiers optimisés dans `build/`).

Pour prévisualiser la build localement après `npm run build`:

```bash
npx vite preview
# ou
npx serve -s build
```

**Arborescence notable**
- `index.html` : page d'entrée côté client.
- `vite.config.ts` : configuration Vite.
- `src/` : code source React.
- `src/components/` : composants réutilisables (`Navbar`, `Footer`, UI primitives, etc.).
- `src/pages/` : pages principales (`Home.tsx`, `Shop.tsx`, `Contact.tsx`, ...).
- `src/styles/` : styles globaux (`globals.css`).
- `build/` : version optimisée prête à être déployée (générée après `npm run build`).

**Technologies & librairies**
- **React**: UI.
- **Vite**: bundler / dev server.
- **Radix UI** et diverses primitives UI (cf. `package.json`).
- **react-router-dom** pour le routage côté client.

**Déploiement**
Options courantes:
- **Vercel**: connecter le repo GitHub → sélectionner le projet → build command: `npm run build`, output directory: `build` (ou `dist`).
- **Netlify**: même configuration (build: `npm run build`, publish: `build`).
- **GitHub Pages**: ajouter `gh-pages` ou utiliser GitHub Actions pour déployer `build/` sur `gh-pages`.

Exemple basique (GitHub Pages via `gh-pages`):

```bash
npm install --save-dev gh-pages
# ajouter au package.json:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
# puis
npm run deploy
```

**Contribuer**
- Forkez le dépôt et créez une branche `feature/xxx`.
- Ouvrez une Pull Request décrivant les changements.
- Respectez le style du code et les conventions existantes.

**Dépannage**
- Vérifiez la version de Node: `node -v`.
- Nettoyez si besoin: `rm -rf node_modules package-lock.json && npm install`.

**Crédits & ressources**
- UI basée sur Radix + composants personnalisés dans `src/components`.
- Voir `package.json` pour la liste complète des dépendances.

**Licence**
- Ajouter ici la licence du projet (ex. `MIT`) ou indiquer "Tous droits réservés".

**Contact**
- Pour questions ou contributions: ouvrir une issue sur GitHub ou contacter le mainteneur.

---

Souhaitez-vous que j'ajoute automatiquement:
- un script `preview` dans `package.json` (`"preview": "vite preview"`),
- ou un exemple de workflow GitHub Actions pour déployer sur GitHub Pages ?

  # Site Web EULALIE EVENT'S

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  