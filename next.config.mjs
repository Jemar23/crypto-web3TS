import { env } from "./src/env/server.mjs";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://lh3.googleusercontent.com/-j8nIV5iv0V0MF4T1FLp7XpZm_P4C1BdNV8QQMUFpaxdiDdXOMdkxFgjRaPGgYnN_I4DlSdRNo79pJtig7esjFjc3R4F3F39jXTt=w600"]
  }
});

