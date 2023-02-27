module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@assets': './assets',
          '@api': './src/api',
          '@model': './src/model',
          '@common': './src/common',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@images': './src/assets/images',
          '@localize': './src/localize',
          '@SVGs': './src/assets/SVGs',
          '@interfaces': './src/interfaces',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
