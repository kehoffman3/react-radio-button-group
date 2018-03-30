module.exports = {
    entry: "./src/react-radio-button-group.jsx",
    output: {
        library: 'ReactRadioGroup',
        libraryTarget: 'umd',
        path: __dirname + "/build", // or path: path.join(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',


        }],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
