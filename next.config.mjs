import { build } from "velite";

class VeliteWebpackPlugin {
  static started = false;
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      await build({ watch: dev, clean: !dev });
    });
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  telemetry: false,
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        message: /Build dependencies behind this expression are ignored/,
      },
    ];
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

export default nextConfig;
