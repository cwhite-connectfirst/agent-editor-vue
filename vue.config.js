module.exports = {
    devServer: {
        proxy: 'https://d01-dev.vacd.biz/',
        https: true,
        overlay: true,
        hot: true,
        open: true
    }
}