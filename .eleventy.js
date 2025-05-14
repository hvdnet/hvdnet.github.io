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
    markdownTemplateEngine: false, // instead of "njk" for markdown-it to work
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
