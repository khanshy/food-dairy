const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "..", "./src/index.tsx")
    },
    resolve: {
        extensions: [".tsx", "jsx", ".ts", ".js", ".scss", ".sass"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "[name][contenthash].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({ title: "Food Diary App", template: path.resolve(__dirname, "..", "./public/index.html") })
    ]
};
