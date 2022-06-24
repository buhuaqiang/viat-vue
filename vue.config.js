
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 9990,
    proxy: {
      /* '/api': {
         target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro', //mock API接口系统
         ws: false,
         changeOrigin: true,
         pathRewrite: {
           '/yaude-boot': ''  //默认所有请求都加了yaude-boot前缀，需要去掉
         }
       },*/
      '/viat-api': {
        target: 'http://localhost:9991/', //请求本地 需要yaude-boot后台项目
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/viat-api': '/'

        }

      },
    },
    overlay: {
      warning: false,
      errors: false
    }
  },
  css: {
    //查看CSS属于哪个css文件
    sourceMap: true
  },
  //https://cli.vuejs.org/zh/guide/html-and-static-assets.html#html
  chainWebpack: (config) => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
    //自下定义title
    config.plugin('html').tap((args) => {
      args[0].title = 'Yaude Core3.0';
      return args;
    });

    // 或者
    // 修改它的选项：
    // config.plugin('prefetch').tap(options => {
    //   options[0].fileBlacklist = options[0].fileBlacklist || []
    //   options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
    //   return options
    // })
  }
  // configureWebpack: {
  //     plugins: [
  //         new webpack.optimize.MinChunkSizePlugin({
  //             minChunkSize: 100000 // 通过合并小于 minChunkSize 大小的 chunk，将 chunk 体积保持在指定大小限制以上
  //         })
  //     ]
  // }
};
