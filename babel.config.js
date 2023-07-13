module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@data': './src/data',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@store': './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
