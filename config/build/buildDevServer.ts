import { BuildOptions } from "../types/config";
import DevServer from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServer.Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, 
    };
}
