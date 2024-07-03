import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
    resolve: {
        alias: {
            '@homework-task': path.resolve(__dirname, './src'),
            '@homework-task-components': path.resolve(
                __dirname,
                './src/components'
            ),
            '@homework-task-utils': path.resolve(__dirname, './src/utils'),
        },
    },
});
