// @ts-check
import { defineConfig } from 'astro/config';
import remarkYoutubeEmbed from './src/plugins/remarkYoutubeEmbed.js';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkYoutubeEmbed],
    },
});
