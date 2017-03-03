module.exports = {
    entry: {
        app    : './seabreeze/assets/js/app.js',
        vendor : './seabreeze/assets/js/vendor.js'
    },
    output: {
        path     : './seabreeze/temp/js',
        filename : '[name].js',
    },
    module: {
        loaders: [{
            loader  : 'babel',
            query   : { presets: ['es2015'] },
            test    : /\.js$/,
            exclude : /node_modules/
        }]
    }
}
