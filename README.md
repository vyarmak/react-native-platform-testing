# react-native-platform-testing

Run 2 set of tests for react native (iOS and Android).

## Description

`jest.snapshot.resolver.js` - is responsible for creating `__snapshots__` accoding to `TEST_PLATFORM` environment variable (if unset - default is `ios`). That creates a possibility to have 2 different set of snapshots - `__snapshots__/ios` and `__snapshots__/android`. 

When tests are executed:
- **iOS** - any test that have Android specific implementation (have a `*.android.test.js` or `*.android.js` filename pattern) will be ignored
- **Android** - any test that have iOS specific implementation (have a `*.ios.test.js` or `*.ios.js` filename pattern) will be ignored


Main changes are:

- `jest.android.json`
- `jest.snapshot.resolver.js`
- `package.json`
```
  "jest": {
    "preset": "react-native",
    "collectCoverageFrom": [
      "**/*.{js,jsx}"
    ],
    "collectCoverage": true,
    "coverageReporters": [
      "lcov",
      "text-summary"
    ],
    "testPathIgnorePatterns": [
      "node_modules",
      ".*\\.android\\..*"
    ],
    "transformIgnorePatterns": [
      "/node_modules/(?!native-base|react-navigation)/"
    ],
    "snapshotResolver": "./jest.snapshot.resolver.js"
  }
```

## Testing

To run tests:
- **iOS**: `yarn test`
- **Android**: `yarn test-android`

## TODO

- figure out how to merge code coverage from 2 test runs
