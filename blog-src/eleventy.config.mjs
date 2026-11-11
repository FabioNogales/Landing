// Eleventy config for the blog (fabionogales.com/blog/).
// Input: blog-src/  ·  Output: repo root (writes blog/** and sitemap.xml only).
// INCLUDE_DRAFTS=1 (npm run dev:blog:drafts) renders drafts into .blog-preview/ instead,
// so draft HTML never lands in the committed/deployed blog/ folder.
import fs from "node:fs";
import crypto from "node:crypto";

const INCLUDE_DRAFTS = process.env.INCLUDE_DRAFTS === "1";

function fileHash(path) {
  try { return crypto.createHash("md5").update(fs.readFileSync(path)).digest("hex").slice(0, 8); }
  catch (e) { return "0"; }
}

function escapeHtml(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export default function (cfg) {
  const site = JSON.parse(fs.readFileSync("blog-src/_data/site.json", "utf8"));
  const categories = JSON.parse(fs.readFileSync("blog-src/_data/categories.json", "utf8"));

  cfg.addGlobalData("includeDrafts", INCLUDE_DRAFTS);
  // Cache-busting: version = hash of the file contents (changes only when the CSS changes)
  cfg.addGlobalData("assetVersion", {
    styles: fileHash("assets/css/styles.css"),
    blog: fileHash("assets/css/blog.css"),
    blogJs: fileHash("assets/js/blog.js"),
  });

  // Drafts: skipped entirely (no page, no collection, no feed, no sitemap) unless INCLUDE_DRAFTS=1
  cfg.addPreprocessor("drafts", "md", (data) => {
    if (data.draft && !INCLUDE_DRAFTS) return false;
  });

  // Newest first
  cfg.addCollection("posts", (api) =>
    api.getFilteredByGlob("blog-src/posts/*.md")
      .filter((p) => INCLUDE_DRAFTS || !p.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  // ---- Filters ----
  const fmtDate = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  cfg.addFilter("fechaEs", (d) => fmtDate.format(new Date(d)));
  cfg.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  cfg.addFilter("isoDateTime", (d) => new Date(d).toISOString());
  cfg.addFilter("rfc822", (d) => new Date(d).toUTCString());
  cfg.addFilter("absUrl", (p) => (/^https?:\/\//.test(p || "") ? p : site.url + (p || "/")));
  // Make every root-relative src/href inside HTML absolute (for the RSS feed / email)
  cfg.addFilter("absUrls", (html) =>
    String(html || "").replace(/(\s(?:src|href|poster)=")\/(?!\/)/g, `$1${site.url}/`)
  );
  cfg.addFilter("cdata", (html) => String(html || "").replace(/]]>/g, "]]]]><![CDATA[>"));
  cfg.addFilter("readingTime", (html) => {
    const words = String(html || "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 220))} min de lectura`;
  });
  cfg.addFilter("category", (slug) => {
    const c = categories.find((x) => x.slug === slug);
    if (!c) throw new Error(`Categoría desconocida "${slug}". Añádela en blog-src/_data/categories.json`);
    return c;
  });
  cfg.addFilter("inCategory", (posts, slug) => (posts || []).filter((p) => p.data.category === slug));
  // Newer / older neighbour in the newest-first "posts" collection
  cfg.addFilter("neighbors", (posts, url) => {
    const i = (posts || []).findIndex((p) => p.url === url);
    return { newer: i > 0 ? posts[i - 1] : null, older: i >= 0 && i < posts.length - 1 ? posts[i + 1] : null };
  });
  cfg.addFilter("jsonLd", (obj) => JSON.stringify(obj).replace(/</g, "\\u003c"));
  cfg.addFilter("latestDate", (posts, fallback) => {
    const ds = (posts || []).map((p) => new Date(p.data.updated || p.date).getTime());
    return ds.length ? new Date(Math.max(...ds)) : new Date(fallback);
  });

  // ---- Shortcodes for posts (single-line HTML so Markdown keeps it as a block) ----
  // {% figura "/assets/img/process/post-01.jpg", "Texto alternativo", "Pie de foto opcional" %}
  cfg.addShortcode("figura", (src, alt, caption) =>
    `<figure class="prose__figure"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">` +
    (caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : "") + `</figure>`
  );
  // {% reel "https://www.instagram.com/reel/XXXX/", "Título del reel", "Descripción corta opcional" %}
  cfg.addShortcode("reel", (url, title, text) => {
    if (!/^https:\/\/(www\.)?instagram\.com\//.test(url || "")) throw new Error(`reel: URL de Instagram no válida: ${url}`);
    return `<figure class="reel-card"><a href="${escapeHtml(url)}" target="_blank" rel="noopener">` +
      `<span class="reel-card__play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></span>` +
      `<span class="reel-card__body"><span class="reel-card__kicker">Reel · Instagram</span>` +
      `<span class="reel-card__title">${escapeHtml(title || "Ver el reel")}</span>` +
      (text ? `<span class="reel-card__text">${escapeHtml(text)}</span>` : "") +
      `<span class="reel-card__cta">Ver en Instagram ↗</span></span></a></figure>`;
  });

  if (INCLUDE_DRAFTS) {
    // Local preview only: serve the site's real assets next to the draft build (emulated in --serve, no copy)
    ["assets/css", "assets/js/blog.js", "assets/img/icons", "assets/img/process", "assets/img/og.jpg", "favicon.ico"].forEach((p) =>
      cfg.addPassthroughCopy(p)
    );
  }

  cfg.ignores.add("blog-src/_scripts/**");
  cfg.setServerOptions({ port: 8089, showVersion: false });

  return {
    dir: { input: "blog-src", includes: "_includes", data: "_data", output: INCLUDE_DRAFTS ? ".blog-preview" : "." },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
}
