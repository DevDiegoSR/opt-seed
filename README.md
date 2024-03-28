# 1. Create a new project

```bat
rem cd to project folder
rem create a vite project
npm create vite
rem React -> Typescript

rem install dependencies
npm i

git init
```

# 2. Set "--host" flag in dev script

- package.json

```json
// ...
  "scripts": {
    "dev": "vite --host",
    // ...
  },
// ...
```

# 3. Set "server/watch" setting in vite settings

- vite.config.ts

```js
// ...
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
});
```

# 4. Dependencies

## 4.1 Tailwind

```bat
npm -D i tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 4.2 Shadcn/ui

```bat
npm -D i @types/node

npx shadcn-ui@latest add button
npx shadcn-ui@latest add button
```

- tsconfig.json

```json
{
  "compilerOptions": {
    // ...
    /* Paths */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  // ...
}
```

- vite.config.ts

```js
import path from "path";
// ...

export default defineConfig({
  plugins: [react()],
  // ...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

```bat
npx shadcn-ui@latest init
rem √ Would you like to use TypeScript (recommended)? ... no / yes
rem √ Which style would you like to use? » Default
rem √ Which color would you like to use as base color? » Slate
rem √ Where is your global CSS file? ... src/App.css
rem √ Would you like to use CSS variables for colors? ... no / yes
rem √ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
rem √ Where is your tailwind.config.js located? ... tailwind.config.js
rem √ Configure the import alias for components: ... @/components
rem √ Configure the import alias for utils: ... @/lib/utils
rem √ Are you using React Server Components? ... no / yes
rem √ Write configuration to components.json. Proceed? ... yes
```

# 4.3 Zustand

```bat
npm i zustand
```

# 4.4 React Router Dom

```bat
npm i react-router-dom
```

# 4.5 Turf

```bat
npm i @turf/turf
```

# 4.5 OpenLayers

```bat
npm i ol
```

# 4.6 Framer Motion

```bat
npm i framer-motion
```

# 4.7 Vite PWA Plugin

```bat
npm i vite-plugin-pwa
```

# 4.8 React Hook Form

```bat
npm install react-hook-form
```

# 4.9 Zod

```bat
npm install zod
```

# 5. Create Docker files

- Dockerfile
- .dockerignore

# 6. Create Docker image

- use cmd

```bat
rem cd to project folder
docker build -t opt-seed:01 .
rem docker build -t opt-seed:tag .
```

# 7. Create Docker container

- use cmd

```bat
docker run --name opt-seed -p 5173:5173 -v "%cd%":/app -v /app/node_modules opt-seed:01
rem docker run --name opt-seed -p 5173:5173 -v "%cd%":/app -v /app/node_modules opt-seed:tag
```
