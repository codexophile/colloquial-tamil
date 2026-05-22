// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
        {
          icon: 'open-book',
          label: 'GoodReads',
          href: 'https://www.goodreads.com/book/show/183958.Colloquial_Tamil',
        },
      ],
      sidebar: [
        {
          label: 'FRONT MATTER',
          items: [{ autogenerate: { directory: 'front-matter' } }],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
