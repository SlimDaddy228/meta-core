const webpack = require("webpack");
const path = require("path");
const RemovePlugin = require("remove-files-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const buildPath = path.resolve(__dirname, "./dist");

const alias = {
    "@": path.resolve(__dirname, "./"),
    "@server": path.resolve(__dirname, "./server/"),
    "@client": path.resolve(__dirname, "./client/"),
    "@shared": path.resolve(__dirname, "./shared/"),
    "@core": path.resolve(__dirname, "./shared/core"),
}

const server = {
    entry: "./server/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: [/node_modules/],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({"global.GENTLY": false}),
        new ESLintPlugin({}),
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
        minimize: false,
    },
    resolve: {
        extensions: [".js", ".ts"],
        alias
    },
    output: {
        filename: "[contenthash].server.js",
        path: path.resolve(buildPath, "server")
    },
    node: {
        __dirname: true,
        __filename: true
    },
    target: "node",
};

const client = {
    entry: "./client/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: [/node_modules/],
            },
        ],
    },
    plugins: [
        new ESLintPlugin({}),
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
        minimize: false,
    },
    resolve: {
        extensions: [".js", ".ts"],
        alias
    },
    output: {
        filename: "[contenthash].client.js",
        path: path.resolve(buildPath, "client"),
    },
};

module.exports = [server, client];