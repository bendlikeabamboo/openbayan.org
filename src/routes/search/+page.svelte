<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import type { ProjectMeta } from '$lib/content/projects';
	let { data } = $props<{ data: { projects: ProjectMeta[] } }>();

	let searchQuery = $state('');
	let searchInput: HTMLInputElement;
	let showFilters = $state(false);
	let selectedSectors = $state<string[]>([]);
	let selectedStatus = $state<string[]>([]);
	let selectedTags = $state<string[]>([]);

	// Get unique sectors, statuses, and tags for filters
	const allSectors = [
		...new Set(data.projects.flatMap((p: ProjectMeta) => p.sectors || []))
	].sort();
	const allStatuses = [
		...new Set(data.projects.map((p: ProjectMeta) => p.status).filter(Boolean))
	].sort();
	const allTags = [...new Set(data.projects.flatMap((p: ProjectMeta) => p.tags || []))].sort();

	const filteredProjects = $derived(
		data.projects.filter((project: ProjectMeta) => {
			// Text search
			const matchesSearch =
				!searchQuery.trim() ||
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.tags?.some((tag: string) =>
					tag.toLowerCase().includes(searchQuery.toLowerCase())
				) ||
				project.sectors?.some((sector: string) =>
					sector.toLowerCase().includes(searchQuery.toLowerCase())
				);

			// Sector filter
			const matchesSector =
				selectedSectors.length === 0 ||
				project.sectors?.some((sector) => selectedSectors.includes(sector));

			// Status filter
			const matchesStatus =
				selectedStatus.length === 0 || (project.status && selectedStatus.includes(project.status));

			// Tags filter
			const matchesTags =
				selectedTags.length === 0 || project.tags?.some((tag) => selectedTags.includes(tag));

			return matchesSearch && matchesSector && matchesStatus && matchesTags;
		})
	);

	$effect(() => {
		if (searchInput) {
			searchInput.focus();
		}
	});
</script>

<Meta
	title="Search Projects"
	description="Search and filter through our comprehensive collection of open source projects improving the Philippines. Find projects by sector, status, tags, and keywords."
	keywords={[
		'search projects',
		'filter projects',
		'find open source',
		'Philippines tech projects',
		'civic technology search'
	]}
/>

<!-- Search Header with expandable filters -->
<section class="relative overflow-hidden bg-[#0038A8]">
	<div class="mx-auto max-w-screen-xl px-4 py-16">
		<div class="max-w-4xl">
			<h1 class="mb-6 text-4xl font-bold text-white">Search Projects</h1>
			<p class="mb-8 text-xl leading-relaxed text-blue-100">
				Find open source technology projects for the Philippines
			</p>

			<!-- Search Bar -->
			<div class="mb-6 max-w-2xl">
				<div class="flex gap-3">
					<input
						bind:this={searchInput}
						bind:value={searchQuery}
						type="search"
						placeholder="Search by title, description, tags, or sectors..."
						class="flex-1 border border-blue-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
					<button
						onclick={() => (showFilters = !showFilters)}
						class="bg-blue-700 px-4 py-3 text-white transition-colors hover:bg-blue-800"
					>
						Filters
					</button>
				</div>
			</div>

			<!-- Expandable Filters -->
			{#if showFilters}
				<div class="max-w-2xl space-y-4 border border-blue-300 bg-white p-4">
					<div>
						<h3 class="mb-2 font-semibold text-gray-900">Sectors</h3>
						<div class="flex flex-wrap gap-2">
							{#each allSectors as sector (sector)}
								<label class="flex items-center">
									<input type="checkbox" bind:group={selectedSectors} value={sector} class="mr-2" />
									<span class="text-sm text-gray-700">{sector}</span>
								</label>
							{/each}
						</div>
					</div>

					<div>
						<h3 class="mb-2 font-semibold text-gray-900">Status</h3>
						<div class="flex flex-wrap gap-2">
							{#each allStatuses as status (status)}
								<label class="flex items-center">
									<input type="checkbox" bind:group={selectedStatus} value={status} class="mr-2" />
									<span class="text-sm text-gray-700 capitalize">{status}</span>
								</label>
							{/each}
						</div>
					</div>

					<div>
						<h3 class="mb-2 font-semibold text-gray-900">Tags</h3>
						<div class="flex flex-wrap gap-2">
							{#each allTags as tag (tag)}
								<label class="flex items-center">
									<input type="checkbox" bind:group={selectedTags} value={tag} class="mr-2" />
									<span class="text-sm text-gray-700">{tag}</span>
								</label>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<!-- Emblem positioned at bottom right -->
	<div class="pointer-events-none absolute right-4 bottom-4 opacity-20">
		<img src="/sun.png" alt="" class="h-20 w-20 brightness-75 hue-rotate-180 filter" />
	</div>
</section>

<div class="mx-auto max-w-screen-xl px-4 py-16">
	<div class="mb-6">
		<p class="text-gray-600">
			{#if searchQuery.trim() || selectedSectors.length > 0 || selectedStatus.length > 0 || selectedTags.length > 0}
				{filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
				{#if searchQuery.trim()}for "{searchQuery}"{/if}
			{:else}
				Showing all {data.projects.length} projects
			{/if}
		</p>

		<!-- Active filters -->
		{#if selectedSectors.length > 0 || selectedStatus.length > 0 || selectedTags.length > 0}
			<div class="mt-3 flex flex-wrap gap-2">
				{#each selectedSectors as sector (sector)}
					<span class="inline-flex items-center bg-blue-100 px-3 py-1 text-sm text-blue-800">
						{sector}
						<button
							onclick={() => (selectedSectors = selectedSectors.filter((s) => s !== sector))}
							class="ml-2 text-blue-600 hover:text-blue-800">×</button
						>
					</span>
				{/each}
				{#each selectedStatus as status (status)}
					<span
						class="inline-flex items-center bg-green-100 px-3 py-1 text-sm text-green-800 capitalize"
					>
						{status}
						<button
							onclick={() => (selectedStatus = selectedStatus.filter((s) => s !== status))}
							class="ml-2 text-green-600 hover:text-green-800">×</button
						>
					</span>
				{/each}
				{#each selectedTags as tag (tag)}
					<span class="inline-flex items-center bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
						{tag}
						<button
							onclick={() => (selectedTags = selectedTags.filter((t) => t !== tag))}
							class="ml-2 text-yellow-600 hover:text-yellow-800">×</button
						>
					</span>
				{/each}
				{#if selectedSectors.length > 0 || selectedStatus.length > 0}
					<button
						onclick={() => {
							selectedSectors = [];
							selectedStatus = [];
						}}
						class="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
					>
						Clear all filters
					</button>
				{/if}
			</div>
		{/if}
	</div>

	{#if filteredProjects.length === 0}
		<div class="py-12 text-center">
			<div class="mb-4 text-gray-400">
				<svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
			<h3 class="mb-2 text-lg font-medium text-gray-900">No projects found</h3>
			<p class="mb-4 text-gray-600">
				Try adjusting your search terms or filters, or browse all projects.
			</p>
			<a
				href="/directory"
				class="inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
			>
				Browse all projects
			</a>
		</div>
	{:else}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project (project.slug)}
				<a
					href={`/projects/${project.slug}`}
					class="block border border-gray-200 p-4 transition-colors hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				>
					<h3 class="mb-1 font-semibold text-gray-900">{project.title}</h3>
					{#if project.summary}
						<p class="mb-2 text-sm text-gray-600">{project.summary}</p>
					{/if}
					<div class="mb-2 flex flex-wrap gap-1">
						{#if project.status}
							<span
								class="inline-block px-2 py-0.5 text-xs {project.status === 'stable'
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
					</div>
					{#if project.tags?.length}
						<div class="flex flex-wrap gap-1">
							{#each project.tags.slice(0, 3) as tag (tag)}
								<span class="inline-block bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{tag}</span
								>
							{/each}
							{#if project.tags.length > 3}
								<span class="inline-block bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
									>+{project.tags.length - 3}</span
								>
							{/if}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</div>
