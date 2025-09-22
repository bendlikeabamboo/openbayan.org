import type { PageLoad } from './$types';
import { getAllProjects } from '$lib/content/projects';

export const load: PageLoad = async () => {
	return {
		projects: getAllProjects()
	};
};
