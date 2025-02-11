const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angularApp',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/app/app.module.ts',
    './Component': './src/app/app.component.ts'
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
});
