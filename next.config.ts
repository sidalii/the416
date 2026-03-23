import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: ["./styles"],
  },
};

export default nextConfig;
