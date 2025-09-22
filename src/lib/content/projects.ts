export type ProjectMeta = {
	title: string;
	summary?: string;
	status?: 'alpha' | 'beta' | 'stable' | 'archived';
	repoUrl?: string;
	website?: string;
	license?: string;
	maintainers?: string[];
	tags?: string[];
	sectors?: string[];
	featured?: boolean;
	dateAdded?: string;
	lastUpdated?: string;
	slug: string;
};

// Eager for listing to allow build-time metadata aggregation
const projectModules = import.meta.glob('/content/projects/*/index.md', { eager: true }) as Record<
	string,
	{ metadata: ProjectMeta }
>;

export function getAllProjects(): ProjectMeta[] {
	return Object.entries(projectModules)
		.map(([path, mod]) => ({
			...(mod?.metadata ?? {}),
			slug: path.split('/').at(-2) as string
		}))
		.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
}

export async function getProject(slug: string) {
	const modules = import.meta.glob('/content/projects/*/index.md');
	const match = Object.keys(modules).find((p) => p.endsWith(`/${slug}/index.md`));
	if (!match) return null;
	const mod = (await modules[match]()) as { metadata: ProjectMeta; default: unknown };
	return { meta: mod.metadata, Component: mod.default };
}
