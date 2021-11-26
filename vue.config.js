const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const webpack = require('webpack')

const path = require('path') 
function resolve(dir) {
  return path.join(__dirname, dir)
} 
 
module.exports = {
  outputDir: 'dist',
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/default.scss"; `
      },
      // less: {  
      //     modifyVars: {
      //       // 直接覆盖变量  
      //       // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
      //       hack: `true; @import "${resolve('src/styles/_reset_vant.less')}";`,
      //     }, 
      // },
      postcss: {
        plugins: [
          autoprefixer(),
          // pxtorem({
          //   rootValue: 37.5,
          //   propList: ['*']
          // })
        ]
      }
    }
  },
  // chainWebpack(config) {
  //   config.module
  //       .rule('svg')
  //       .exclude.add(resolve('src/assets/svg'))
  //       .end()
  //   config.module
  //       .rule('icons')
  //       .test(/\.svg$/)
  //       .include.add(resolve('src//assets/svg'))
  //       .end()
  //       .use('svg-sprite-loader')
  //       .loader('svg-sprite-loader')
  //       .options({
  //           symbolId: '[name]'
  //       })
  //       .end() 
  //   config.plugin('html')
  //       .tap(args => {
  //         args[0].title = "平台";
  //         return args;
  //       })
  // },  
  // configureWebpack: {
  //   plugins: [
  //     // 设置环境变量信息
  //     new webpack.DefinePlugin({ 
  //       THEME_ENV: JSON.stringify(require(`./src/theme/js/${process.env.VUE_APP_SITE}-default.js`))

  //     })
  //   ]
  // }
};
 