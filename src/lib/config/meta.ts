export const siteConfig = {
	name: 'OpenBayan',
	title: 'OpenBayan - Open Source Technology for the Philippines',
	description:
		'A community-led directory of open source projects that improve public services, transparency, and digital infrastructure across the Philippines.',
	url: 'https://openbayan.org',
	ogImage: 'https://openbayan.org/og-image.png',
	twitterHandle: '@openbayan',
	keywords: [
		'open source',
		'Philippines',
		'technology',
		'government',
		'transparency',
		'digital infrastructure',
		'community',
		'projects',
		'civic tech',
		'public services'
	]
};

export interface PageMeta {
	title?: string;
	description?: string;
	keywords?: string[];
	ogImage?: string;
	ogType?: 'website' | 'article';
	canonical?: string;
	noindex?: boolean;
}

export function generateMeta(pageMeta: PageMeta = {}) {
	const title = pageMeta.title ? `${pageMeta.title} - ${siteConfig.name}` : siteConfig.title;

	const description = pageMeta.description || siteConfig.description;

	const keywords = [...siteConfig.keywords, ...(pageMeta.keywords || [])].join(', ');

	const ogImage = pageMeta.ogImage || siteConfig.ogImage;
	const ogType = pageMeta.ogType || 'website';

	return {
		title,
		description,
		keywords,
		ogImage,
		ogType,
		canonical: pageMeta.canonical,
		noindex: pageMeta.noindex
	};
}
