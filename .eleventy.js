import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

import path from "path";
import * as sass from "sass";

export default function (eleventyConfig) {

  // SaaS Support
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // opt-out of Eleventy Layouts
    useLayouts: false,

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      // Don’t compile file names that start with an underscore
      if (parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes,
        ]
      });

      // Map dependencies for incremental builds
      this.addDependencies(inputPath, result.loadedUrls);
     

      return async (data) => {
        return result.css;
      };
    },
  }); 
  eleventyConfig.addTemplateFormats("scss")

  // Static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/img");

  // toISODate filter
  // example: {{ page.date | toISODate }}
  const toISODate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  eleventyConfig.addFilter('toISODate', toISODate);

  // markdown-it
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const md = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);

  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist",
    },
    markdownTemplateEngine: "njk", // enables Nunjucks in markdown files while using markdown-it
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
