const fs = require("fs");
const path = require("path");
const matter = require("gray-matter"); // For parsing front matter
const MarkdownIt = require("markdown-it"); // For converting markdown to HTML

module.exports = function () {
  // Initialize markdown-it
  const md = new MarkdownIt();

  // Define the path to the markdown file
  const markdownFilePath = path.join(__dirname, "../content/index.md");

  // Read the markdown file
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");

  // Parse the front matter and markdown content
  const { data, content } = matter(fileContents);

  // Convert the markdown content to HTML
  const contentAsHtml = md.render(content);

  // Return the front matter data and the converted HTML content
  return {
    ...data, // Include front matter (title, description, etc.)
    content: contentAsHtml, // The converted HTML content
  };
};
