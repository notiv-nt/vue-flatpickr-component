module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "node",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  collectCoverage: true,
  testURL: "http://localhost",
  resolver: require.resolve('jest-pnp-resolver')
};
