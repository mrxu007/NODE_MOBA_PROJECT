const {
  resolve
} = require('path')
module.exports = {
  // 别名路径
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve(__dirname, 'src/assets'))
      .set('common', resolve(__dirname, 'src/common'))
      .set('components', resolve(__dirname, 'src/components'))
      .set('network', resolve(__dirname, 'src/network'))
      .set('views', resolve(__dirname, 'src/views'))
  },
  //webpack配置
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    }

    //或者

    //警告 webpack 的性能提示
    // performance: {
    //   hints:'warning',
    //   //入口起点的最大体积
    //   maxEntrypointSize: 50000000,
    //   //生成文件的最大体积
    //   maxAssetSize: 30000000,
    //   //只给出 js 文件的性能提示
    //   assetFilter: function(assetFilename) {
    //     return assetFilename.endsWith('.js');
    //   }
    // }
  },
  outputDir: __dirname + '/../server/admin', // 自定义配置输出位置
  publicPath: process.env.NODE_ENV === 'production' ? '/admin' : '/' // 自定义输出头路径
  // 本地服务器
  // devServer: {
  //   open: false, // 是否自动弹出浏览器
  //   host: 'localhost',
  //   port: '8080',
  //   https: false, // 是否启动https协议
  //   hotOnly: true, // 是否启动热更新
  //   proxy: { // 代理

  //   }
  // }
}
