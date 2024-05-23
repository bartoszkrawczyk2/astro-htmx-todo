import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import simpleStackForm from "simple-stack-form";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), simpleStackForm(), react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
