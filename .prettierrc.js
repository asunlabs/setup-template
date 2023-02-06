module.exports = {
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 120,
  useTabs: false,
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.{md,yml,yaml,json}',
      options: {
        tabWidth: 2,
      },
    },
    // @dev you have to install `prettier-plugin-solidity` for Solidity configs
    {
      files: '*.sol',
      options: {
        compiler: '>=0.8.0',
        printWidth: 150,
        singleQuote: false,
      },
    },
    {
      files: 'hardhat.config.ts',
      options: {
        printWidth: 80,
      },
    },
  ],
};
