import { resolve, join } from "path"

export default {
    entry: resolve(__dirname, "src/index.tsx"),
    output: {
      filename: "main.js",
      path: resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        components: join(__dirname, "src", "components"),
        services: join(__dirname, "src", "services")
      }
    },
    module: {
      rules: [{
          test: /\.tsx?$/,
          loader: "ts-loader"
      }]
    }
  }