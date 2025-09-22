import type { PageLoad } from './$types';
import { getAllProjects } from '$lib/content/projects';

export const load: PageLoad = async () => {
	const projects = getAllProjects();
	const featured = projects.filter((p) => p.featured).slice(0, 6);
	return { featured };
};
