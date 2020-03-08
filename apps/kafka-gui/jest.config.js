module.exports = {
  name: 'kafka-gui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/kafka-gui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
