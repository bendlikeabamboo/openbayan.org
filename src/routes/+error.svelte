<script lang="ts">
	import { page } from '$app/stores';

	// Determine error type and appropriate messaging
	$: status = $page.status || 404;
	$: isNotFound = status === 404;
	$: isServerError = status >= 500;

	$: title = isNotFound
		? 'Page Not Found'
		: isServerError
			? 'Server Error'
			: 'Something Went Wrong';

	$: summary = isNotFound
		? "The page you're looking for doesn't exist or has been moved."
		: isServerError
			? "We're experiencing technical difficulties. Please try again later."
			: 'An unexpected error occurred while processing your request.';
</script>

<svelte:head>
	<title>{title} – OpenBayan</title>
	<meta name="description" content={summary} />
</svelte:head>

<div class="flex min-h-screen items-center justify-center px-4 py-8">
	<div class="mx-auto max-w-2xl text-center">
		<!-- Error Details -->
		<div class="mb-12">
			<h1
				class="mb-6 text-9xl leading-none font-bold text-gray-900 sm:text-[12rem] lg:text-[14rem]"
			>
				{status}
			</h1>
			<h2 class="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
			<p class="mb-12 text-xl leading-relaxed text-gray-600">{summary}</p>
		</div>

		<!-- Action Buttons -->
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/"
				class="inline-flex items-center justify-center bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-700"
			>
				Go to Homepage
			</a>

			<a
				href="/directory"
				class="inline-flex items-center justify-center border border-gray-300 px-8 py-4 text-lg font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
			>
				Browse Projects
			</a>
		</div>
	</div>
</div>
