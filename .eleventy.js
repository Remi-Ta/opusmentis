module.exports = function(eleventyConfig) {
  
  // Copier les assets (CSS, JS, images, fonts)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copier le dossier admin pour le CMS
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Watch les fichiers CSS pour recharger automatiquement
  eleventyConfig.addWatchTarget("src/assets/css/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};