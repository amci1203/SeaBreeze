module.exports = {
    entry: {
        seabreeze: './seabreeze/assets/js/seabreeze.js',
        vendor: './seabreeze/assets/js/vendor.js'
    },
    output: {
        path: './seabreeze/temp/js',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
