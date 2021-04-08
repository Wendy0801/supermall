module.exports = {
    configureWebpack: {
        resolve: {
            alias:{
                'asssets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}