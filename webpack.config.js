"use strict";
exports.__esModule = true;
var path_1 = require("path");
exports["default"] = {
    entry: path_1.resolve(__dirname, "src/index.tsx"),
    output: {
        filename: "main.js",
        path: path_1.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            components: path_1.join(__dirname, "src", "components"),
            services: path_1.join(__dirname, "src", "services")
        }
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader"
            }]
    }
};
