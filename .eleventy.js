require("dotenv").config();
const htmlmin = require("html-minifier");
const { BuildScripts } = require("./build/scripts.js");
const { BuildStyles } = require("./build/styles.js");
const { addFilters } = require("./src/filters/index.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("src/macros/**");

  addFilters(eleventyConfig);

  // Add a collection for markdown files from /src/data
  eleventyConfig.addCollection("homepage", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/data/index.md");
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

  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      data: "data", // Change to the folder containing markdown files
      output: "dist",
    },
    // Force Nunjucks for all template formats
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
