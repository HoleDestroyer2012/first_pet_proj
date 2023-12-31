import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPath } from "./config/types/config";

export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const mode = env.mode || "development";
    const PORT = 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        port: PORT,
    });

    return config;
};
