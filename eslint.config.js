import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import vueTs from '@vue/eslint-config-typescript'
import vuePrettier from '@vue/eslint-config-prettier'
import path from 'path'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...ts.configs.recommended,
  ...vueTs(),
  vuePrettier,
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parserOptions: {
        ecamVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: path.resolve(), //절대 경로 강제
      },
    },
  },
]
