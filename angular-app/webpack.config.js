const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angularApp',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/app/app.module.ts'
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
});
