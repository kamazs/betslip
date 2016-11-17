module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "public/final.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"  }
        ]
    }
}