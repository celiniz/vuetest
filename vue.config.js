module.exports = {
    configureWebpack:{
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    },
    devServer: {
        disableHostCheck: true,
        port: 4000,
        public: '0.0.0.0:4000'
    },
    pluginOptions: {
        webpackBundleAnalyzer: {
            analyzerMode: "disabled"
        }
    },
}
