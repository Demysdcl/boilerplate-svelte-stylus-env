const sveltePreprocess = require("svelte-preprocess")
module.exports = {
  preprocess: sveltePreprocess({
    stylus: {
      data: "./src/styles/variables.styl"
    },
    postcss: {
      plugins: [require("autoprefixer")]
    }
  })
}
