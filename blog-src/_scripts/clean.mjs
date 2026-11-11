// Removes the previous blog/ output so deleted or renamed posts don't linger. Run before every build.
import fs from "node:fs";
fs.rmSync("blog", { recursive: true, force: true });
fs.rmSync(".blog-preview", { recursive: true, force: true });
