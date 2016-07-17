module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
    config.module.entry = { app: ['bootstrap-loader'] };

    config.module.loaders.push({
        test: /\.scss$/,
        loaders: [
            'style',
            'css?sourceMap&-minimize',
            // 'postcss',
            'sass?sourceMap'
        ]
    });

    config.module.loaders.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    });

    config.module.loaders.push({
        test: /bootstrap-sass(\\|\/)assets(\\|\/)javascripts(\\|\/)/,
        loader: 'imports?jQuery=jquery'
    })

};
