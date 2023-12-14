const webpack = require("webpack");
const { getWebpackTools } = require("react-native-monorepo-tools");
const CopyWebpackPlugin = require("copy-webpack-plugin")

const monorepoWebpackTools = getWebpackTools();
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  devServer: {
    devMiddleware: {
        writeToDisk: true,
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Allow importing from external workspaces.
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
      // Ensure nohoisted libraries are resolved from this workspace.
      monorepoWebpackTools.addNohoistAliases(webpackConfig);

      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
      return webpackConfig;
    },
    plugins: [
      // Inject the "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== "production",
      }),
      // Inject the "__SUBPLATFORM__" global variable. 
      // It can be used to determine whether we're running within a 
      // browser extension or not.
      new webpack.DefinePlugin({
        __SUBPLATFORM__: JSON.stringify("browser-ext"),
      }),

      new CopyWebpackPlugin({
        patterns: [
          {
            from: './public/manifest.json',
            to: './'
          }
        ]
      })
    ],
  },
};