module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://d01-dev.vacd.biz/',

                // these options are here to help mitigate an issue with WDS trunating the target's responses. They kiiiinda work, but not really
                logLevel: 'debug',
                timeout: 999999999999999,
                headers: {
                    'Accept-Encoding': '',
                }
            }
        },
        https: true,
        overlay: true,
        hot: true,
        open: true,
    }
}