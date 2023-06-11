
```sh

npx react-native@0.72.0-rc.5 init example --version 0.72.0-rc.5
cd example
yarn add link:..
```


```sh
cd example/ios
RCT_NEW_ARCH_ENABLED=1 pod install
```


Enable symlinks in metro
```js
const path = require('path');
...
const config = {
  resolver: {
    unstable_enableSymlinks: true,
  },
  watchFolders: [path.resolve(__dirname, '..')],
};
```

Solutions to:
Unable to resolve @babel/runtime/helpers/interopRequireDefault

Tried:
0.
```
npx react-native start --resetCache
```

1.
```
ln -s ../example/node_modules/@babel node_modules/
```
did not help

2. babel-plugin-module-resolver
```sh
cd example
yarn add --dev babel-plugin-module-resolver
```

```
```