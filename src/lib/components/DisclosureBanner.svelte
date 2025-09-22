<script lang="ts">
	import { officialSitesUrl } from '$lib/config/site';
</script>

<div role="region" aria-label="Community notice" class="w-full bg-gray-100 text-xs">
	<div class="mx-auto max-w-screen-xl px-4 py-2 text-gray-800">
		<p>
			This is a community-led initiative. Not an official government website.
			<a href={officialSitesUrl} class="font-medium underline hover:no-underline"
				>List of official government websites</a
			>.
		</p>
	</div>
</div>
