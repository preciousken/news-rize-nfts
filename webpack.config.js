const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      url: require.resolve("url"),
    fs: require.resolve("fs"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
    path: require.resolve("path-browserify"),
      // add other polyfills as needed
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
    // other plugins...
  ],
};
