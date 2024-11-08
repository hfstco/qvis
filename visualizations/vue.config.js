// get rid of absolute paths in the .html output
// https://github.com/vuejs/vue-cli/issues/1623

module.exports = {
    publicPath: './',
    configureWebpack: {
        devtool: 'source-map'
    }
}
