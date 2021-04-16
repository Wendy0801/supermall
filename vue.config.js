module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: "localhost",
    port: '8080',
    proxy: {
      '/api': {
        target: 'https://www.gnllk.com', // 要请求的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

}
