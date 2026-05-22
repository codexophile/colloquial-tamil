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
      ],
      components: { SocialIcons: './src/components/SocialIcons.astro' },
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
