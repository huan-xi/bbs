const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    },
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:81',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
