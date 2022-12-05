const CopyPlugin = require("copy-webpack-plugin");
const { PATH } = require("../src/settings");

module.exports = {
    mode: "production",
    devtool: false,
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: PATH.assets,
                    from: "images",
                    to: "assets/images"
                }
            ]
        })
    ]
};