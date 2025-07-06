import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  
  plugins: [
    // Legacy browser support
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: {
        'es.promise': true,
        'es.symbol': true,
        'es.array.iterator': true,
        'es.promise.finally': true,
        'es/map': true,
        'es/set': true,
        'es.array.for-each': true,
        'es.object.define-properties': true,
        'es.object.define-property': true,
        'es.object.get-own-property-descriptor': true,
        'es.object.get-own-property-descriptors': true,
        'es.object.keys': true,
        'es.object.to-string': true,
        'web.dom-collections.for-each': true,
        'esnext.global-this': true,
        'esnext.string.match-all': true
      }
    }),
    
    // HTML optimization and CSP
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          injectScript: `
            <meta http-equiv="Content-Security-Policy" content="
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://formspree.io;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self' data:;
              connect-src 'self' https://formspree.io;
              frame-ancestors 'none';
              base-uri 'self';
              form-action 'self' https://formspree.io;
            ">
          `
        }
      }
    }),
    
    // Compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br'
    }),
    
    // PWA Support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      workbox: {
        navigateFallback: null, // Don't fallback for navigation
        navigateFallbackDenylist: [
          /^\/article_saver/,  // Exclude article_saver
          /^\/[^\/]+\//,       // Exclude all subdirectories
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/nilukush\.github\.io\/$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'index-cache',
            }
          }
        ]
      },
      manifest: {
        name: 'Nilesh Kumar - Portfolio',
        short_name: 'NK Portfolio',
        description: 'Professional portfolio of Nilesh Kumar - CEO & Technology Leader',
        theme_color: '#1d4ed8',
        background_color: '#ffffff',
        display: 'minimal-ui',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple touch icon'
          }
        ]
      }
    })
  ],
  
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({
          preset: 'default',
        })
      ]
    }
  },
  
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'form-handler': ['./src/scripts/main.js']
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },
  
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  },
  
  preview: {
    port: 3001,
    strictPort: true,
    host: true,
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
});