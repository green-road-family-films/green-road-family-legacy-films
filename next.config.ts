import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: required for GoDaddy cPanel shared hosting,
  // which serves files only and cannot run a Node server.
  output: "export",
};

export default nextConfig;
