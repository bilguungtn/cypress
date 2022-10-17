import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "amrts5",
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
