import js from '@eslint/js';
import globals from 'globals';

import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import securityPlugin from 'eslint-plugin-security';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const securityRules = Object.fromEntries(
    Object.entries(securityPlugin.rules).map(([ruleName]) => [
        `security/${ruleName}`,
        'error',
    ])
);

export default [{
        ignores: ['dist/**'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            security: securityPlugin,
            '@typescript-eslint': tsPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        languageOptions: {
            parser: tsParser, // <-- вот тут передаем объект, а не строку
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: globals.browser,
        },
        rules: {
            ...securityRules,
            // другие правила можно здесь добавить
        },
    },
];