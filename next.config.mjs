// Next.js configuration adapted for GitHub Pages static export
// When deploying to GitHub Pages from a project repository (not <user>.github.io),
// we need to set a basePath and assetPrefix so that assets resolve correctly.
// These are only applied in production builds to keep local dev simple.
const repoName = 'mohan-dev-site';
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enables `next export` via static HTML output
	output: 'export',
	// Disable the default image optimization which requires a server
	images: { unoptimized: true },
	// Use basePath / assetPrefix only for production (GitHub Pages environment)
	basePath: isProd ? `/${repoName}` : undefined,
	assetPrefix: isProd ? `/${repoName}` : undefined,
};

export default nextConfig;
