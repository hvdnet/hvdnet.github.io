export default function(eleventyConfig) {
    return {
      dir: {
        input: "src",
        includes: "_includes",
        output: "dist",
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk"
    };
  }
  