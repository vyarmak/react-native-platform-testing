module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const platform = process.env.TEST_PLATFORM || 'ios';
    const testPathArray = testPath.split('/');
    testPathArray.splice(testPathArray.length - 1, 0, '__snapshots__', platform);

    return testPathArray.join('/') + snapshotExtension;
  },

  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace('__snapshots__/ios/', '')
      .replace('__snapshots__/android/', '')
      .replace('__snapshots__/', '')
      .slice(0, -snapshotExtension.length);
  },

  testPathForConsistencyCheck: '__tests__/example.test.js',
};
