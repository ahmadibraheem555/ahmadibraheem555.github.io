// /** @type {import('next').NextConfig} */
// const nextConfig = { reactStrictMode: true };

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` creates a plain HTML site in the `out/` folder,
  // which works on GitHub Pages and on Vercel.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
