const {
  resolve
} = require('path');
module.exports = {
  // 别名路径
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve(__dirname, 'src/assets'))
      .set('common', resolve(__dirname, 'src/common'))
      .set('components', resolve(__dirname, 'src/components'))
      .set('network', resolve(__dirname, 'src/network'))
      .set('views', resolve(__dirname, 'src/views'))
  }
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
