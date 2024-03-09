import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), simpleStackForm()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
