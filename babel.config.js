module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src',
        },
      ],
    },
  },
};
