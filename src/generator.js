import workbox from 'workbox-build';

workbox.generateSW({
  cacheID: 'NAMEOFCACHE',
  globDirectory: './',
  globPatters: [
    '**/*.{css,js}'
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
