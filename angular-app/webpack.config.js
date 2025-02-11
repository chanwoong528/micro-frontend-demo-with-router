const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angularApp',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/bootstrap.ts'
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
});
