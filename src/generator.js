import workbox from 'workbox-build';

workbox.generateSW({
  cacheID: 'TRV0.0.0.1',
  globDirectory: './',
  globPatters: [
    '**/*.{css,js,jpg,png,jpeg,gif}'
  ],
  globIgnores: [
    '**/generator.js',
    '**/sw.js',
    'node_modules/**/*'
  ],
  swDest: './dist/sw.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:html|htm|xml)$/,
      handler: 'staleWhileRevalidate',
      options: {
        cacheName: 'markup',
        expiration: {
          maxAgeSeconds: 1800
        }
      }
    }
  ]
});
