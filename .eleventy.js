require("dotenv").config();
const htmlmin = require("html-minifier");
const { BuildScripts } = require("./build/scripts.js");
const { BuildStyles } = require("./build/styles.js");
const { addFilters } = require("./src/filters/index.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("src/macros/**");

  eleventyConfig.addGlobalData("site", {
    url: process.env.SITE_URL || "http://localhost:8080",
  });
  addFilters(eleventyConfig);

  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      // Only include items with a `path` frontmatter
      return "path" in item.data;
    });
  });
  eleventyConfig.addCollection("headernav", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.tags && item.data.tags.includes("header");
    });
  });
  eleventyConfig.addCollection("footernav", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.tags && item.data.tags.includes("footer");
    });
  });
  // Passthrough copy for public assets
  eleventyConfig.addPassthroughCopy({ "src/public": "./" });

  console.log("WATCH_MODE", process.env.WATCH_MODE);
  BuildStyles(eleventyConfig, process.env.WATCH_MODE === "true");
  BuildScripts(eleventyConfig, process.env.WATCH_MODE === "true");

  // HTML minification
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        minifyJS: true,
      });
    }
    return content;
  });

  eleventyConfig.addGlobalData("permalink", function () {
    return (data) => {
      // Special case for sitemap.xml
      if (data.permalink === "/sitemap.xml") {
        return "/sitemap.xml";
      }

      if (data.path) {
        // Ensure the path starts with a slash
        let permalink = data.path.startsWith("/") ? data.path : `/${data.path}`;

        // For the home page, we need to output to index.html
        if (permalink === "/") {
          return "/index.html";
        }

        // For other pages, we'll output to a directory with an index.html file
        return permalink.endsWith("/") ? `${permalink}index.html` : `${permalink}/index.html`;
      }
      // Fallback to the default permalink if no path is specified
      return data.permalink;
    };
  });

  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      data: "data",
      output: "dist",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
