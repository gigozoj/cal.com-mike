require("dotenv").config({ path: "../../.env" });

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  serverExternalPackages: ["deasync", "http-cookie-agent", "rest-facade", "superagent-proxy", "superagent"],
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
  transpilePackages: [],
  images: {
    unoptimized: true,
  },
  webpack: (config, { webpack, buildId, isServer }) => {
    if (isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp:
            /(^@google-cloud\/spanner|^@mongodb-js\/zstd|^@sap\/hana-client\/extension\/Stream$|^@sap\/hana-client|^@sap\/hana-client$|^aws-crt|^aws4$|^better-sqlite3$|^bson-ext$|^cardinal$|^cloudflare:sockets$|^hdb-pool$|^ioredis$|^kerberos$|^mongodb-client-encryption$|^mysql$|^oracledb$|^pg-native$|^pg-query-stream$|^react-native-sqlite-storage$|^snappy\/package\.json$|^snappy$|^sql.js$|^sqlite3$|^typeorm-aurora-data-api-driver$)/,
        })
      );

      config.externals.push("formidable");
    }

    config.plugins.push(new webpack.DefinePlugin({ "process.env.BUILD_ID": JSON.stringify(buildId) }));

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

module.exports = nextConfig;
