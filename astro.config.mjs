
import { defineConfig } from 'astro/config';

const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  site: isCloudflare
    ? 'https://flamingoliv.com'
    : 'https://amssdias.github.io',

  ...(!isCloudflare && {
    base: '/flamingo-living',
  }),
});
