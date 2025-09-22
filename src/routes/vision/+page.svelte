<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta
	title="Our Vision"
	description="A Philippines where open source technology is trusted, widely adopted, and sustainably maintained by a collaborative community of contributors, public servants, and organizations."
	keywords={[
		'vision',
		'open source adoption',
		'collaborative community',
		'public servants',
		'sustainable technology Philippines'
	]}
/>

<PageHeader
	title="Our Vision"
	summary="A Philippines where technology serves everyone through transparency, collaboration, and innovation."
	color="yellow"
/>

<div class="mx-auto max-w-screen-xl px-4 py-16">
	<div class="max-w-4xl">
		<p class="mb-8 text-xl leading-relaxed text-gray-700">
			A Philippines where open source technology is trusted, widely adopted, and sustainably
			maintained by a collaborative community of contributors, public servants, and organizations.
		</p>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">Our vision for the future</h2>

		<div class="mb-12 grid gap-8 md:grid-cols-2">
			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Transparent governance</h3>
				<p class="leading-relaxed text-gray-700">
					Government systems built on open source principles that promote transparency,
					accountability, and citizen participation in democratic processes.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Collaborative innovation</h3>
				<p class="leading-relaxed text-gray-700">
					A thriving ecosystem where developers, organizations, and government agencies work
					together to solve complex societal challenges through technology.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Accessible technology</h3>
				<p class="leading-relaxed text-gray-700">
					Digital solutions that are designed for all Filipinos, regardless of their technical
					background, economic status, or geographic location.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Sustainable development</h3>
				<p class="leading-relaxed text-gray-700">
					Long-term thinking in technology development that considers environmental impact,
					community needs, and sustainable funding models.
				</p>
			</div>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">Building towards this vision</h2>

		<p class="mb-6 leading-relaxed text-gray-700">
			We envision a transparent, interoperable, and user-centered digital government ecosystem where
			citizens can easily access services, participate in governance, and hold institutions
			accountable.
		</p>

		<p class="leading-relaxed text-gray-700">
			Through OpenBayan, we're working to make this vision a reality by connecting the right people
			with the right projects, fostering collaboration, and promoting the adoption of open source
			solutions across all sectors of Philippine society.
		</p>
	</div>
</div>
