module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  // eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/css/*.css"); // Only copy CSS files
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};