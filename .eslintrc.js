module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _navigations: './src/navigations',
          _styles: './src/styles',
          _action: './src/Redux/Actions',
          _slices: './src/Redux/Slices',
          _scenes: './src/scenes',
          _services: './src/services',
          _utils: './src/utils',
          _hooks: './src/hooks',
        },
      },
    },
  },
};
