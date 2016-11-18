module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "public/final.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"  },
            { test: /\.css$/, loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]" }
        ]
    }
}