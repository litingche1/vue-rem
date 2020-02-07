// vue.config.js
module.exports = {
    // css: {
    //     loaderOptions: {
    //         // 给 sass-loader 传递选项
    //         sass: {
    //             // @/ 是 src/ 的别名
    //             // 所以这里假设你有 `src/variables.scss` 这个文件
    //             prependData: `@import '~@/style/reset.scss';` //新版本
    //             //   data: `
    //             //   @import '@/style/reset.scss';

    //             //   `
    //         }
    //     },
    //     extract: true,
    //     sourceMap: false
    // }
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
          item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
              // Provide path to the file with resources
              resources: 'src/style/reset.scss',
    
              // Or array of paths
              // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
            })
            .end()
        })
      }
}