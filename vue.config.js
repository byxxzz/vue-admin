const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [],
  lintOnSave: false,
  devServer: {
    port: 8080
  }
})
