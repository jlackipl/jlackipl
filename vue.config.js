module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '@/sass/variables.scss'`
      }
    }
  }
}
