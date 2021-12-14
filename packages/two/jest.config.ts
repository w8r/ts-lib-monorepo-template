import base from '../../jest.config';

export default {
  ...base,
  globals: {
    extensionsToTreatAsEsm: ['.ts', '.js'],
    'ts-jest': {
      useESM: true
    }
  },
  // https://stackoverflow.com/a/57916712
  transformIgnorePatterns: ['node_modules/(?!(delaunator|robust-predicates)/)']
};
