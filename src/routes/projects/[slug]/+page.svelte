<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import type { ProjectMeta } from '$lib/content/projects';
	let { data } = $props<{ data: { meta: ProjectMeta; Component: unknown } }>();
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Project'}  OpenBayan</title>
	{#if data.meta?.summary}
		<meta name="description" content={data.meta.summary} />
	{/if}
</svelte:head>

<Meta
	title={data.meta?.title ?? 'Project'}
	description={data.meta?.summary ??
		`Learn about ${data.meta?.title ?? 'this project'} and how it contributes to improving the Philippines through open source technology.`}
	keywords={[
		...(data.meta?.tags ?? []),
		...(data.meta?.sectors ?? []),
		'open source Philippines',
		'civic technology'
	]}
	ogType="article"
/>

<!-- Project Header -->
<section class="relative overflow-hidden bg-[#0038A8]">
	<div class="mx-auto max-w-screen-xl px-4 py-16">
		<div class="max-w-4xl">
			<h1 class="mb-6 text-4xl font-bold text-white">{data.meta?.title}</h1>

			{#if data.meta?.summary}
				<p class="mb-8 text-xl leading-relaxed text-blue-100">{data.meta.summary}</p>
			{/if}

			<!-- Status and Tags -->
			<div class="mb-8 flex flex-wrap gap-3">
				{#if data.meta?.status}
					<span
						class="inline-block px-3 py-1 text-sm font-medium {data.meta.status === 'stable'
							? 'bg-green-100 text-green-800'
							: data.meta.status === 'beta'
								? 'bg-yellow-100 text-yellow-800'
								: data.meta.status === 'alpha'
									? 'bg-orange-100 text-orange-800'
									: 'bg-gray-100 text-gray-800'}"
					>
						{data.meta.status}
					</span>
				{/if}
				{#if data.meta?.tags?.length}
					{#each data.meta.tags.slice(0, 4) as tag (tag)}
						<span class="inline-block bg-blue-700 px-3 py-1 text-sm text-white">{tag}</span>
					{/each}
				{/if}
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-col gap-4 sm:flex-row">
				{#if data.meta?.website}
					<a
						href={data.meta.website}
						target="_blank"
						rel="noopener"
						class="inline-flex items-center justify-center bg-white px-8 py-3 font-medium text-[#0038A8] transition-colors hover:bg-blue-50"
					>
						Visit Website
					</a>
				{/if}
				{#if data.meta?.repoUrl}
					<a
						href={data.meta.repoUrl}
						target="_blank"
						rel="noopener"
						class="inline-flex items-center justify-center border border-white px-8 py-3 font-medium text-white transition-colors hover:bg-blue-800"
					>
						View Source
					</a>
				{/if}
			</div>
		</div>
	</div>

	<!-- Emblem positioned at bottom right -->
	<div class="pointer-events-none absolute right-4 bottom-4 opacity-20">
		<img src="/sun.png" alt="" class="h-20 w-20 brightness-75 hue-rotate-180 filter" />
	</div>
</section>

<!-- Project Content -->
<div class="mx-auto max-w-screen-xl px-4 py-16">
	<div class="grid gap-8 lg:grid-cols-4">
		<!-- Main Content -->
		<div class="lg:col-span-3">
			<article class="prose prose-lg max-w-none">
				{@render data.Component({})}
			</article>
		</div>

		<!-- Sidebar -->
		<div class="lg:col-span-1">
			<div class="space-y-6 border border-gray-200 bg-gray-50 p-6">
				<h3 class="text-lg font-semibold text-gray-900">Project Details</h3>

				{#if data.meta?.maintainers?.length}
					<div>
						<dt class="mb-1 text-sm font-medium text-gray-500">Maintainers</dt>
						<dd class="text-sm text-gray-900">
							{#each data.meta.maintainers as maintainer, i (maintainer)}
								{maintainer}{#if i < data.meta.maintainers.length - 1},
								{/if}
							{/each}
						</dd>
					</div>
				{/if}

				{#if data.meta?.license}
					<div>
						<dt class="mb-1 text-sm font-medium text-gray-500">License</dt>
						<dd class="text-sm text-gray-900">{data.meta.license}</dd>
					</div>
				{/if}

				{#if data.meta?.sectors?.length}
					<div>
						<dt class="mb-1 text-sm font-medium text-gray-500">Sectors</dt>
						<dd class="space-y-1">
							{#each data.meta.sectors as sector (sector)}
								<span class="inline-block bg-gray-100 px-2 py-1 text-xs text-gray-700"
									>{sector}</span
								>
							{/each}
						</dd>
					</div>
				{/if}

				{#if data.meta?.dateAdded}
					<div>
						<dt class="mb-1 text-sm font-medium text-gray-500">Added</dt>
						<dd class="text-sm text-gray-900">
							{new Date(data.meta.dateAdded).toLocaleDateString()}
						</dd>
					</div>
				{/if}

				{#if data.meta?.lastUpdated}
					<div>
						<dt class="mb-1 text-sm font-medium text-gray-500">Last Updated</dt>
						<dd class="text-sm text-gray-900">
							{new Date(data.meta.lastUpdated).toLocaleDateString()}
						</dd>
					</div>
				{/if}
			</div>

			<!-- Related Actions -->
			<div class="mt-6 space-y-3">
				<a
					href="/directory"
					class="block w-full border border-gray-300 px-4 py-2 text-center text-gray-700 transition-colors hover:bg-gray-50"
				>
					Browse More Projects
				</a>
				<a
					href="/submit"
					class="block w-full bg-blue-600 px-4 py-2 text-center text-white transition-colors hover:bg-blue-700"
				>
					Submit Your Project
				</a>
			</div>
		</div>
	</div>
</div>
