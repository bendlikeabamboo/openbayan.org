<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import type { ProjectMeta } from '$lib/content/projects';

	let { data } = $props<{ data: { projects: ProjectMeta[] } }>();

	// Group projects by sector (using first sector as primary category)
	const projectsBySector = data.projects.reduce(
		(acc: Record<string, ProjectMeta[]>, project: ProjectMeta) => {
			const sector = project.sectors?.[0] || 'Other';
			if (!acc[sector]) {
				acc[sector] = [];
			}
			acc[sector].push(project);
			return acc;
		},
		{} as Record<string, ProjectMeta[]>
	);

	const sectors = Object.keys(projectsBySector).sort();
</script>

<Meta
	title="Project Directory"
	description="Browse our comprehensive directory of open source projects improving public services, transparency, and digital infrastructure across the Philippines. Find projects by sector and contribute to meaningful change."
	keywords={[
		'project directory',
		'open source projects Philippines',
		'civic tech directory',
		'government projects',
		'transparency tools'
	]}
/>

<PageHeader
	title="Project Directory"
	summary="Discover open source projects that improve public services, transparency, and digital infrastructure across the Philippines."
	color="blue"
/>

<div class="mx-auto max-w-screen-xl px-4 py-16">
	{#each sectors as sector (sector)}
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold text-gray-900">
				{sector} ({projectsBySector[sector].length})
			</h2>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projectsBySector[sector] as project (project.slug)}
					<a
						class="block rounded-[--radius-sm] border border-gray-200 p-4 hover:border-gray-300 focus:ring-2 focus:ring-[--color-brand] focus:outline-none"
						href={`/projects/${project.slug}`}
					>
						<h3 class="mb-1 text-lg font-semibold">{project.title}</h3>
						{#if project.summary}
							<p class="mb-2 text-sm text-gray-600">{project.summary}</p>
						{/if}
						{#if project.status}
							<span
								class="mb-2 inline-block rounded-full px-2 py-0.5 text-xs {project.status ===
								'stable'
									? 'bg-green-100 text-green-700'
									: project.status === 'beta'
										? 'bg-blue-100 text-blue-700'
										: project.status === 'alpha'
											? 'bg-yellow-100 text-yellow-700'
											: 'bg-gray-100 text-gray-700'}"
							>
								{project.status}
							</span>
						{/if}
						{#if project.tags?.length}
							<div class="flex flex-wrap gap-2">
								{#each project.tags.slice(0, 3) as tag (tag)}
									<span
										class="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
										>{tag}</span
									>
								{/each}
							</div>
						{/if}
					</a>
				{/each}
			</div>
		</section>
	{/each}
</div>
