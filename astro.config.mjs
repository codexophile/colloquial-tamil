// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: '/favicon.png',
      title: 'Colloquial Tamil Web',
      customCss: ['./src/styles.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/codexophile/colloquial-tamil',
        },
      ],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
        Sidebar: './src/components/CustomSidebarSublist.astro',
      },
      sidebar: [
        {
          label: 'FRONT MATTER',
          items: [{ autogenerate: { directory: 'front-matter' } }],
        },
        {
          label: 'Introduction',
          items: [{ autogenerate: { directory: 'introduction' } }],
        },
        {
          label: 'Lessons',
          items: [{ autogenerate: { directory: 'lessons' } }],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@audio': path.resolve(__dirname, './src/assets/audio'),
        '@components': path.resolve(__dirname, './src/components'),
      },
    },
  },
});
