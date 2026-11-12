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

// ---- Email version of a post (inline CSS only; email clients ignore <style>/classes) ----
const EM = {
  text: "#1A1A1A", muted: "#646464", orange: "#E85002",
  body: "font-family:'Geist',Helvetica,Arial,sans-serif;",
  display: "font-family:'Bricolage Grotesque','Arial Black',Helvetica,Arial,sans-serif;",
  mono: "font-family:Consolas,'Courier New',monospace;",
};
function emailHtml(html) {
  const T = EM;
  return html
    // Quotes: serif, no paragraph spacing
    .replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (m, inner) =>
      "<blockquote>" + inner.replace(/<p>/g, `<p style="margin:0;font-family:'Instrument Serif',Georgia,'Times New Roman',serif;font-size:22px;line-height:1.35;color:${T.text};">`) + "</blockquote>")
    // Reel cards (shortcode) -> simple linked box
    .replace(/<figure class="reel-card"><a href="([^"]+)"[^>]*>[\s\S]*?<span class="reel-card__title">([\s\S]*?)<\/span>(?:<span class="reel-card__text">([\s\S]*?)<\/span>)?[\s\S]*?<\/a><\/figure>/g,
      (m, href, title, text) =>
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px;border-collapse:separate;"><tr><td style="padding:16px 20px;background:#000000;border-radius:16px;${T.body}">` +
        `<p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#A7A7A7;">Reel · Instagram</p>` +
        `<p style="margin:0 0 6px;font-size:17px;font-weight:700;line-height:1.3;color:#F9F9F9;">${title}</p>` +
        (text ? `<p style="margin:0 0 10px;font-size:14px;line-height:1.5;color:#A7A7A7;">${text}</p>` : "") +
        `<a href="${href}" style="font-size:14px;font-weight:600;color:${T.orange};text-decoration:none;">Ver en Instagram &#8599;</a></td></tr></table>`)
    .replace(/<figure[^>]*>/g, `<div style="margin:0 0 22px;">`).replace(/<\/figure>/g, "</div>")
    .replace(/<figcaption[^>]*>/g, `<p style="margin:8px 0 0;${T.body}font-size:13px;line-height:1.5;color:${T.muted};">`).replace(/<\/figcaption>/g, "</p>")
    .replace(/<img\s([^>]*?)\s*\/?>/g, (m, attrs) =>
      `<img ${attrs.replace(/\s*(loading|decoding|fetchpriority|class|style|width|height)="[^"]*"/g, "")} width="552" style="display:block;width:100%;max-width:552px;height:auto;border:0;border-radius:12px;">`)
    .replace(/<blockquote[^>]*>/g, `<blockquote style="margin:0 0 22px;padding:4px 0 4px 18px;border-left:3px solid ${T.orange};font-family:'Instrument Serif',Georgia,'Times New Roman',serif;font-size:22px;line-height:1.35;color:${T.text};">`)
    .replace(/<h2[^>]*>/g, `<h2 style="margin:32px 0 12px;${T.display}font-size:26px;line-height:1.15;font-weight:800;color:${T.text};">`)
    .replace(/<h3[^>]*>/g, `<h3 style="margin:26px 0 10px;${T.display}font-size:20px;line-height:1.2;font-weight:700;color:${T.text};">`)
    .replace(/<p>/g, `<p style="margin:0 0 18px;${T.body}font-size:17px;line-height:1.6;color:${T.text};">`)
    .replace(/<(ul|ol)[^>]*>/g, `<$1 style="margin:0 0 18px;padding:0 0 0 22px;${T.body}font-size:17px;line-height:1.6;color:${T.text};">`)
    .replace(/<li[^>]*>/g, `<li style="margin:0 0 6px;">`)
    .replace(/<pre[^>]*>/g, `<pre style="margin:0 0 22px;padding:16px 18px;background:#F3F0EC;border-radius:12px;white-space:pre-wrap;word-break:break-word;${T.mono}font-size:14px;line-height:1.5;color:${T.text};">`)
    .replace(/<code[^>]*>/g, `<code style="${T.mono}font-size:.9em;background:#F3F0EC;padding:1px 5px;border-radius:4px;">`)
    .replace(/<hr\s*\/?>/g, `<hr style="border:0;border-top:1px solid #E2DCD5;margin:28px 0;">`)
    .replace(/<a href="([^"]+)"(?![^>]*style=)([^>]*)>/g, `<a href="$1"$2 style="color:${T.orange};text-decoration:underline;">`)
    .replace(/\sclass="[^"]*"/g, "");
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
  // Post HTML -> email-safe HTML with inline styles (blog-src/email.njk, pasted into MailerLite's custom HTML editor)
  cfg.addFilter("emailHtml", (html) => emailHtml(String(html || "").replace(/(\s(?:src|href|poster)=")\/(?!\/)/g, `$1${site.url}/`)));
  cfg.addFilter("cdata",(html) => String(html || "").replace(/]]>/g, "]]]]><![CDATA[>"));
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

  // Email versions (blog-src/email.njk) are rendered to <output>/_email-out/ and then moved to
  // blog-src/email-out/<slug>.html: never inside blog/, never deployed (blog-src/** is ignored by Firebase).
  cfg.on("eleventy.after", ({ results }) => {
    const outDir = "blog-src/email-out";
    const emails = (results || []).filter((r) => /[\\/]_email-out[\\/][^\\/]+\.html$/.test(r.outputPath || ""));
    if (!emails.length) return;
    fs.mkdirSync(outDir, { recursive: true });
    for (const r of emails) {
      const name = r.outputPath.split(/[\\/]/).pop();
      fs.writeFileSync(`${outDir}/${name}`, r.content);
      fs.rmSync(r.outputPath, { force: true });
    }
    const tmp = emails[0].outputPath.replace(/[\\/][^\\/]+$/, "");
    fs.rmSync(tmp, { recursive: true, force: true });
    console.log(`[email] ${emails.length} versión(es) para MailerLite en ${outDir}/`);
  });

  cfg.ignores.add("blog-src/_scripts/**");
  cfg.ignores.add("blog-src/email-out/**");
  cfg.watchIgnores.add("blog-src/email-out/**");
  cfg.watchIgnores.add("_email-out/**");
  cfg.setServerOptions({ port: 8089, showVersion: false });

  return {
    dir: { input: "blog-src", includes: "_includes", data: "_data", output: INCLUDE_DRAFTS ? ".blog-preview" : "." },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
}
