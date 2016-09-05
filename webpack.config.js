var webpack = require("webpack");

module.exports = {
    // entry point of our application
    entry: './resources/assets/vue/main.js',
    // where to place the compiled bundle
    output: {
        path: `${__dirname}/public/app/`,
        filename: './app.js'
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ],
    module: {
        // `loaders` is an array of loaders to use.
        // here we are only configuring vue-loader
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue'   // loader to use for matched files
            },
            { test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
            {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'], exclude: /materialize-css/},
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /materialize-css/,
            }
        ]
    }
}