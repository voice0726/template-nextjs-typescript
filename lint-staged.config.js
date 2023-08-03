module.exports = {
  '*.{js,jsx,ts,tsx}': ['npm run lint:es:fix', "bash -c 'npm run type-check'", 'npm run lint:prettier:fix'],
  '*.{css,scss}': ['npm run lint:style:fix', 'npm run lint:prettier:fix'],
  '*.{md}': 'npm run lint:prettier:fix',
};
