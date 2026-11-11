// npm run dev:blog:drafts → local server WITH drafts (output in .blog-preview/, never deployed)
import { spawn } from "node:child_process";
const p = spawn("npx", ["@11ty/eleventy", "--config=blog-src/eleventy.config.mjs", "--serve"], {
  stdio: "inherit", shell: true, env: { ...process.env, INCLUDE_DRAFTS: "1" },
});
p.on("exit", (code) => process.exit(code ?? 0));
