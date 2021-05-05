export const Proxy = {
  '/api': {
    target: 'http://local.gymbo-online.com:7001',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/api/, ''),
  },
};
