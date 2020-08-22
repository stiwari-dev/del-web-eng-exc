module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-multi-spaces': ['error'],
        'linebreak-style': 0,
        'max-len': ['error', { code: 200 }],
    },
};
