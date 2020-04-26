const path = require("path");

module.exports = function () {
    return {
        target: "web",
        mode: "development",
        entry: {
            "index": "./src/index.tsx",
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        module: {
            rules: [
                {
                    test: /(\.tsx?$|\.jsx?$)/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ]
                }
            ]
        },

        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "@material-ui/core": "MaterialUI",
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist'),
        },

        devServer: {
            publicPath: "/dist/",
            contentBase: path.join(__dirname, './static'),
            open: true,
            port: 8080,
            hot: true,
            inline: true,
        }
    }
}