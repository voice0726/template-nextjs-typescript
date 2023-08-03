module.exports = {
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*.{css,less,sass,scss}': 'npm run lint:style:fix',
  '**/*.(ts|js)?(x)': ['npm run lint:fix', 'npm run lint:prettier:fix'],
};
