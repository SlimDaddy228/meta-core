const webpack = require("webpack");
const path = require("path");
const RemovePlugin = require("remove-files-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const buildPath = path.resolve(__dirname, "./apps/cfx/dist");

const alias = {
    "@server": path.resolve(__dirname, "./apps/cfx/server/"),
    "@client": path.resolve(__dirname, "./apps/cfx/client/"),
}

const server = {
    entry: "./apps/cfx/server/index.ts",
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
        minimize: true,
    },
    resolve: {
        extensions: [".ts"],
        alias
    },
    output: {
        filename: "[contenthash].server.js",
        path: path.resolve(buildPath, "server")
    },
    target: "node",
};

const client = {
    entry: "./apps/cfx/client/index.ts",
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
        minimize: true,
    },
    resolve: {
        extensions: [".ts"],
        alias
    },
    output: {
        filename: "[contenthash].client.js",
        path: path.resolve(buildPath, "client"),
    },
};

module.exports = [server, client];