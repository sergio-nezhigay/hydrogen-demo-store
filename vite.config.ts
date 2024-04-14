import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {vitePlugin as remix} from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({presets: [hydrogen.preset()]}),
    tsconfigPaths(),
  ],
  ssr: {
    optimizeDeps: {
      include: ['typographic-base/index', 'textr'],
    },
  },
  optimizeDeps: {
    include: [
      'clsx',
      '@headlessui/react',
      'typographic-base/index',
      'react-intersection-observer',
      'react-use/esm/useScroll',
      'react-use/esm/useDebounce',
      'react-use/esm/useWindowScroll',
    ],
  },
});
