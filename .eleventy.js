module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  // eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/css/*.css"); // Only copy CSS files
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");

  const baseUrl = "https://jordanne.ca/pixels/";
  eleventyConfig.addShortcode('baseUrl', () => baseUrl);
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};