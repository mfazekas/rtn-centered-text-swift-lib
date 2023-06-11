module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    
    ["module-resolver", {
      "alias": {
          "^../node_modules/@babel/runtime/(.+)": "/Users/boga/Work/OSS/RNMBGL/playgrounds/rtn-centered-text-swift-lib/example/node_modules/@babel/runtime/\\1"
      }
    }],
  ]
};
