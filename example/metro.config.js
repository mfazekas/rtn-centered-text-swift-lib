const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

console.log("XXX", path.resolve(__dirname, 'node_modules'));
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    unstable_enableSymlinks: true,
    extraNodeModules: {
      '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    },
    /* nodeModulesPaths: path.resolve(__dirname, 'node_modules') */
    resolveRequest: (context, moduleName, platform) => {
      console.log(" => resolveRequest", moduleName, context);
      let ret = context.resolveRequest(context, moduleName, platform);
      console.log(" => ret", ret);
      return ret;
    }
  },
  watchFolders: [path.resolve(__dirname, '..')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
