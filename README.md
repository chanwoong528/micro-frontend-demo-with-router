# Vue, React & Angular Micro Frontend Architecture
- Based on https://github.com/originjs/vite-plugin-federation for MFA
- A modern micro frontend architecture example that integrates Vue.js, React, and Angular micro frontend within a Vue.js container application using Module Federation.
- A modern micro frontend architecture example that integrates Vue.js, React, and Angular micro frontend within a React.js container application using Module Federation.

## 🏗️ Architecture

```
.
├── 📦 container/        # Main container application (Vue 3 + TypeScript)
├── 📦 container-react/  # Main Container (React + TypeScript + react router dom) 
    ├── 📦 vue-app/          # Vue.js micro frontend (vue router)
    ├── 📦 react-app/        # React micro frontend  (react router dom)
    └── 📦 angular-app/      # Angular micro frontend (angular default router)
```



heavily influenced by https://github.com/Eraybulut34/micro-frontend-vite-vue-react-angular-ts
