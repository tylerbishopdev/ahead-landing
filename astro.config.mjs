import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  integrations:
  [netlify(), 
    react(),
    tailwind(),
    image()
  ],
    adapter: netlify(),
    output: 'server',
    buildOptions: {
      emptyOutDir: true
    },
  
});


 