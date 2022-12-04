const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ],
};