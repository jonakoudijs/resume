const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Register YAML as a data file format
  eleventyConfig.addDataExtension("yaml", {
    parser: yaml.load,
  });

  // Passthrough the root index.html (not used as template) and any other static assets
  eleventyConfig.addPassthroughCopy({ "src/_static": "." });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};