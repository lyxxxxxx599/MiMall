const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'',
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
})
