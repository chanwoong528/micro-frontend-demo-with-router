# 🚀 Vue, React & Angular Micro Frontend Architecture

A modern micro frontend architecture example that integrates Vue.js, React, and Angular micro frontends within a Vue.js container application using Module Federation.

## 🏗️ Architecture

```
.
├── 📦 container/         # Main container application (Vue 3 + TypeScript)
├── 📦 vue-app/          # Vue.js micro frontend
├── 📦 react-app/        # React micro frontend
└── 📦 angular-app/      # Angular micro frontend
```

## 🌟 Features

- **Framework Agnostic**: Seamlessly integrates Vue, React, and Angular applications
- **Module Federation**: Utilizes Webpack 5's Module Federation with Vite
- **TypeScript Support**: Full type safety across applications
- **Independent Deployment**: Each micro frontend can be deployed independently
- **Optimized Build**: Smart chunk management for shared dependencies
- **Hot Module Replacement**: Instant updates during development
- **Framework Bridge**: Custom adapter pattern for rendering React and Angular components in Vue

## 🛠️ Technologies

- **Container**: Vue 3 + TypeScript + Vite
- **Micro Frontends**: Vue 3, React 18 & Angular 19
- **Module Federation**: @originjs/vite-plugin-federation & @angular-architects/module-federation
- **Build Tool**: Vite & Angular CLI
- **Router**: Vue Router
- **Type Checking**: TypeScript

## 🚀 Getting Started

Run each application in a separate terminal window:

### 1. Vue Micro Frontend (Port: 3001)

```bash
cd vue-app
npm install
npm run build
npm run preview -- --port 3001
```

### 2. React Micro Frontend (Port: 3002)

```bash
cd react-app
npm install
npm run build
npm run preview -- --port 3002
```

### 3. Angular Micro Frontend (Port: 3003)

```bash
cd angular-app
npm install
npm start
```

### 4. Container Application (Port: 3000)

```bash
cd container
npm install
npm run dev -- --port 3000
```

## 🌐 Access Points

- **Container**: [http://localhost:3000](http://localhost:3000)
- **Vue App**: [http://localhost:3001](http://localhost:3001)
- **React App**: [http://localhost:3002](http://localhost:3002)
- **Angular App**: [http://localhost:3003](http://localhost:3003)

## 🏗️ Architecture Details

### Module Federation Configuration

The container application dynamically loads micro frontends at runtime:

```typescript
// container/vite.config.ts
federation({
    name: 'host',
    remotes: {
        vueApp: "http://localhost:3001/remoteEntry.js",
        reactApp: "http://localhost:3002/remoteEntry.js",
        angularApp: {
            external: 'http://localhost:3003/remoteEntry.js',
            format: 'esm',
            from: 'webpack'
        }
    },
    shared: ['vue']
})
```

### Framework Bridges

Custom adapter patterns are used to render React and Angular components within Vue:

```typescript
// ReactWrapper.vue
const reactRoot = ref<HTMLElement | null>(null)
let root: ReactDOM.Root | null = null

onMounted(() => {
    if (reactRoot.value) {
        root = ReactDOM.createRoot(reactRoot.value)
        root.render(React.createElement(props.component))
    }
})

// AngularWrapper.vue
const angularRoot = ref<HTMLElement | null>(null)
let moduleRef: any = null

onMounted(async () => {
    if (angularRoot.value) {
        const module = await props.component()
        moduleRef = await module.bootstrap(angularRoot.value)
    }
})
```

## 📦 Shared Dependencies

- Vue micro frontend: `vue`
- React micro frontend: `react`, `react-dom`
- Angular micro frontend: `@angular/core`, `@angular/common`

## 🔄 Development Workflow

1. Develop micro frontends independently
2. Integrate and test in the container
3. Deploy each application separately

## ⚠️ Important Notes

1. Start micro frontends first during development
2. Launch the container application last
3. Each application should have its own CI/CD pipeline for production
4. Angular application requires Zone.js for proper functionality

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details. 