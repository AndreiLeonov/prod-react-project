module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        // первое число 0 - отключает рпавило, 1 - warning, 2 - правило работает (включить)
        // второе число - количеств отступов = 4
        'react/jsx-indent': [2, 4],
        // тоже, что и вверху, только для пропсов
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        // разрешить расширения указанных файлов в jsx файлах (почему то eslint ругался на это)
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        // показывать ворнинги если не используются переменные, указанные в коде
        'no-unused-vars': 'warn',
        // отключить ошибку того, что нет дефолтного значения у пропсов
        'react/require-default-props': 'off',
        // отключить проверку испорта React from 'react' тк в 17 версии и выше импорт необязателен
        'react/react-in-jsx-scope': 'off',
        // спред для пропсов - предупреждение
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
