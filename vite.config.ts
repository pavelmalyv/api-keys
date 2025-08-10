import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
	base: '/api-keys/',
	resolve: {
		alias: {
			'@pages': '/src/pages',
			'@modules': '/src/modules',
			'@components': '/src/components',
			'@UI': '/src/UI',
			'@shared': '/src/shared',
			'@': '/src',
		},
	},
	plugins: [
		react(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
				useFlatConfig: true,
			},
		}),
	],
});
