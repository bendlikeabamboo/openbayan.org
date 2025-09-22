import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getProject } from '$lib/content/projects';

export const load: PageLoad = async ({ params }) => {
	const res = await getProject(params.slug);
	if (!res) throw error(404, 'Project not found');
	return res;
};
