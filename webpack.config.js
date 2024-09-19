const webpack = require("webpack");
const path = require("path");
const RemovePlugin = require("remove-files-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

const server = {
    entry: "./server/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader", "eslint-loader"],
                exclude: [/node_modules/, path.resolve(buildPath, "web")],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({"global.GENTLY": false}),
        new RemovePlugin({
            before: {
                include: [
                    path.resolve(buildPath, "server")
                ]
            },
            watch: {
                include: [
                    path.resolve(buildPath, "server")
                ]
            }
        })
    ],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".ts"],
    },
    output: {
        filename: "[contenthash].server.js",
        path: path.resolve(buildPath, "server")
    },
    target: "node",
};

const client = {
    entry: "./client/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader", "eslint-loader"],
                exclude: [/node_modules/, path.resolve(buildPath, "web")],
            },
        ],
    },
    plugins: [
        new RemovePlugin({
            before: {
                include: [
                    path.resolve(buildPath, "client")
                ]
            },
            watch: {
                include: [
                    path.resolve(buildPath, "client")
                ]
            }
        })
    ],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".ts"],
    },
    output: {
        filename: "[contenthash].client.js",
        path: path.resolve(buildPath, "client"),
    },
};

module.exports = [server, client];