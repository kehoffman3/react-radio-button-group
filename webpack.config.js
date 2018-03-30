module.exports = {
    entry: "./src/react-radio-button-group.jsx",
    output: {
        library: 'ReactRadioGroup',
        libraryTarget: 'umd',
        path: __dirname + "/build", // or path: path.join(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ["react", "es2015"]
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
