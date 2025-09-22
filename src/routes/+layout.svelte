<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import DisclosureBanner from '$lib/components/DisclosureBanner.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Favicon and Icons -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />

	<!-- Preconnect for performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

	<!-- DNS prefetch for external links -->
	<link rel="dns-prefetch" href="//github.com" />
</svelte:head>

<a
	href="#content"
	class="sr-only rounded-[--radius-sm] border border-gray-300 bg-white px-3 py-1 focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
	>Skip to content</a
>

<DisclosureBanner />
<SiteHeader />

<!-- Subtle tri-color accent under header -->
<div class="flex h-1 w-full" aria-hidden="true">
	<div class="flex-1" style="background:var(--flag-blue)"></div>
	<div class="flex-1" style="background:var(--flag-yellow)"></div>
	<div class="flex-1" style="background:var(--flag-red)"></div>
</div>

<main id="content">{@render children?.()}</main>

<Footer />
