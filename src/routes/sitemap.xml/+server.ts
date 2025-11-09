import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const baseUrl = url.origin;
	
	const pages = [
		{ path: '', priority: '1.0', changefreq: 'daily' },
		{ path: '/about', priority: '0.8', changefreq: 'weekly' },
		{ path: '/examples', priority: '0.8', changefreq: 'weekly' }
	];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `	<url>
		<loc>${baseUrl}${page.path}</loc>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
		<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
	</url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};

export const prerender = true;
