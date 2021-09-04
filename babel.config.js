module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true }],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
      },
    ],
  ],
};
