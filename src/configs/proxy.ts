export const Proxy = {
  '/api': {
    target: 'http://47.96.234.234:9090/',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/AppStoreServer/, '/AppStoreServer'),
  },
};
