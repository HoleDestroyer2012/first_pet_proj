import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "../types/config";

export function buildPlugins(
    options: BuildOptions
): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: options.paths.html,
        }),
        new webpack.ProgressPlugin(),
    ];
}
