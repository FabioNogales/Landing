// Defaults for every post in blog-src/posts/
export default {
  layout: "layouts/post.njk",
  category: "herramientas-y-flujos",
  draft: false,
  eleventyComputed: {
    // URL: /blog/<slug>/ (slug = front matter "slug" or the file name)
    permalink: (data) => `/blog/${data.slug || data.page.fileSlug}/`,
  },
};
