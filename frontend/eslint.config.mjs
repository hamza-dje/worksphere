import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from '@next/eslint-plugin-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  nextPlugin.configs.recommended,
  {
    rules: {
      '@next/next/no-img-element': [
        'error',
        {
          extensions: ['.png', '.jpg', '.jpeg', '.webp', '.gif'], // exclude .svg
        },
      ],
    },
  },
];



export default eslintConfig;
