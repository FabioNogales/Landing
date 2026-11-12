// npm run email:drafts → one-off build WITH drafts (HTML in .blog-preview/, never deployed) so that
// blog-src/email-out/<slug>.html is also generated for draft posts (to test the MailerLite email).
import { spawn } from "node:child_process";
const p = spawn("npx", ["@11ty/eleventy", "--config=blog-src/eleventy.config.mjs"], {
  stdio: "inherit", shell: true, env: { ...process.env, INCLUDE_DRAFTS: "1" },
});
p.on("exit", (code) => process.exit(code ?? 0));
