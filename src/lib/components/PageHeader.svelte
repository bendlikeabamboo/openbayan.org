<script lang="ts">
	export let title: string;
	export let summary: string | undefined;
	// Choose one per page for balanced color use
	export let color: 'blue' | 'red' | 'yellow' = 'blue';
	const colorMap: Record<typeof color, { bg: string; text: string }> = {
		blue: { bg: '#0038A8', text: 'text-white' },
		red: { bg: '#CE1126', text: 'text-white' },
		yellow: { bg: '#FCD116', text: 'text-gray-900' }
	};
	const colorConfig = colorMap[color];
</script>

<section class="relative overflow-hidden py-16" style={`background-color: ${colorConfig.bg}`}>
	<div class="mx-auto max-w-screen-xl px-4">
		<div class="max-w-4xl">
			<h1 class="mb-6 text-4xl font-bold {colorConfig.text}">{title}</h1>
			{#if summary}
				<p
					class="text-xl leading-relaxed {color === 'yellow'
						? 'text-gray-800'
						: color === 'blue'
							? 'text-blue-100'
							: 'text-red-100'}"
				>
					{summary}
				</p>
			{/if}
		</div>
	</div>

	<!-- Emblem positioned at bottom right -->
	<div class="pointer-events-none absolute right-4 bottom-4 opacity-20">
		<img
			src="/sun.png"
			alt=""
			class="h-20 w-20 filter {color === 'blue'
				? 'brightness-75 hue-rotate-180'
				: color === 'red'
					? 'brightness-90 hue-rotate-90'
					: 'brightness-110'}"
		/>
	</div>
</section>
