import webpack from "webpack";
import { BuildOptions } from "../types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import DevServer from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration & { devServer?: DevServer.Configuration } {
    const { paths, mode } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(options),
        devtool: "inline-source-map",
        devServer: buildDevServer(options),
    };
}
