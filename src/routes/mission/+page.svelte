<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta
	title="Our Mission"
	description="Our mission is to act as a consolidated hub for community-led initiatives and open source projects that aim to improve public services, transparency, and digital infrastructure across the Philippines."
	keywords={[
		'mission',
		'community initiatives',
		'public services',
		'transparency',
		'digital infrastructure Philippines'
	]}
/>

<PageHeader
	title="Our Mission"
	summary="Making it easy to discover, support, and contribute to impactful technology projects for the Philippines."
	color="blue"
/>

<div class="mx-auto max-w-screen-xl px-4 py-16">
	<div class="max-w-4xl">
		<p class="mb-8 text-xl leading-relaxed text-gray-700">
			We act as a consolidated hub for community‑led initiatives and open source projects that aim
			to improve public services, transparency, and digital infrastructure across the Philippines.
		</p>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">What we do</h2>

		<div class="mb-12 grid gap-8 md:grid-cols-2">
			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Curate and showcase</h3>
				<p class="leading-relaxed text-gray-700">
					We maintain a curated directory of open source projects that address real challenges in
					the Philippines, making it easy for developers, organizations, and citizens to discover
					impactful work.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Connect communities</h3>
				<p class="leading-relaxed text-gray-700">
					We bridge the gap between developers, organizations, and government agencies to foster
					collaboration and knowledge sharing across the technology ecosystem.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Support contributors</h3>
				<p class="leading-relaxed text-gray-700">
					We provide resources, guidance, and platforms for developers and organizations to share
					their work and find meaningful ways to contribute to technology.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Promote transparency</h3>
				<p class="leading-relaxed text-gray-700">
					We advocate for open source approaches to government technology, promoting transparency,
					accountability, and citizen participation in digital governance.
				</p>
			</div>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">Our approach</h2>

		<p class="mb-6 leading-relaxed text-gray-700">
			OpenBayan operates as a community-driven initiative, independent of any single organization or
			government entity. We believe that the best technology emerges from collaborative efforts
			between diverse stakeholders.
		</p>

		<p class="leading-relaxed text-gray-700">
			By maintaining this directory and fostering connections within the community, we aim to
			accelerate the development and adoption of technology solutions that truly serve the Filipino
			people.
		</p>
	</div>
</div>
