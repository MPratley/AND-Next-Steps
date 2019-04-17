module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  publicPath: process.env.NODE_ENV === "production" ? "/AND-Next-Steps/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`,
        includePaths: ["./node_modules"]
      }
    }
  },

  pwa: {
    name: "AND"
  }
};
