module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/fcnode/dist/'
      : './',

      css: {
        modules: false,
        extract: true,
        sourceMap: false,
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 75
              })
            ]
          }
        }
      }
  }