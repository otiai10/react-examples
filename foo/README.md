# Problem (Module not found: Error: Cannot resolve module 'react')

```shell
% npm run build

> component-example@0.0.1 build /Users/otiai10/proj/web/react-examples/foo
> webpack

Hash: f59be0c76d47bf9f7a3e
Version: webpack 1.13.0
Time: 496ms
         Asset     Size  Chunks             Chunk Names
./lib/index.js  3.75 kB       0  [emitted]  main
    + 1 hidden modules

ERROR in ./src/index.jsx
Module not found: Error: Cannot resolve module 'react' in /Users/otiai10/proj/web/react-examples/foo/src
 @ ./src/index.jsx 9:13-29
%
```

# Cause

```shell
% ./node_modules/webpack/bin/webpack.js --display-error-details

# partially omitted

        use react.js from package.json
          resolve 'file' or 'directory' react.js in /Users/otiai10/proj/web/react-examples/foo/node_modules/react
            resolve file
              /Users/otiai10/proj/web/react-examples/foo/node_modules/react/react.js.js doesn\'t exist
              /Users/otiai10/proj/web/react-examples/foo/node_modules/react/react.js.jsx doesn\'t exist

# partially omitted

%
```

`node_modules/react/react.js.js` <- what the f**k!?

# Solution

in `webpack.config.js`

```diff
    resolve: {
-        extensions: ['.js', '.jsx']
+        extensions: ['', '.js', '.jsx']
    }
```
