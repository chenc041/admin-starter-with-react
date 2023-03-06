import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://47.96.234.234:9090/',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/AppStoreServer/, '/AppStoreServer'),
      },
    },
  },
  resolve: {
    alias: {
      '~': join(__dirname, 'src'),
    },
  },
});
