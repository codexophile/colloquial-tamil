// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Colloquial Tamil Web',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/codexophile/colloquial-tamil',
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
