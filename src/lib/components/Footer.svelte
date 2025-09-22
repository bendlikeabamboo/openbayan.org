<script lang="ts">
	import { officialSitesUrl, githubOrgUrl, githubIssuesUrl } from '$lib/config/site';
</script>

<footer class="w-full bg-gray-800">
	<div class="mx-auto max-w-screen-xl px-4 py-10 text-sm text-gray-300">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<section class="lg:col-span-2">
				<div class="mb-4 flex items-center gap-2">
					<svg aria-hidden="true" width="32" height="32" viewBox="0 0 640 640" focusable="false">
						<defs>
							<linearGradient id="footer-tricolor" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style="stop-color:var(--flag-blue)" />
								<stop offset="50%" style="stop-color:var(--flag-yellow)" />
								<stop offset="100%" style="stop-color:var(--flag-red)" />
							</linearGradient>
						</defs>
						<path
							fill="url(#footer-tricolor)"
							d="M286.7 96.1C291.7 113 282.1 130.9 265.2 135.9C185.9 159.5 128.1 233 128.1 320C128.1 426 214.1 512 320.1 512C426.1 512 512.1 426 512.1 320C512.1 233.1 454.3 159.6 375 135.9C358.1 130.9 348.4 113 353.5 96.1C358.6 79.2 376.4 69.5 393.3 74.6C498.9 106.1 576 204 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 204 141.1 106.1 246.9 74.6C263.8 69.6 281.7 79.2 286.7 96.1z"
						/>
					</svg>
					<span class="text-lg font-semibold text-white">OpenBayan</span>
				</div>
				<p class="mb-3">Community-led hub for open source tech in the Philippines.</p>
				<p>
					<a class="underline hover:text-white" href={officialSitesUrl}
						>List of official government websites</a
					>
				</p>
			</section>

			<nav aria-label="Navigation">
				<h2 class="mb-3 font-semibold text-white">Navigation</h2>
				<ul class="space-y-2">
					<li><a class="hover:text-white hover:underline" href="/directory">Directory</a></li>
					<li><a class="hover:text-white hover:underline" href="/submit">Submit Project</a></li>
					<li><a class="hover:text-white hover:underline" href="/search">Search</a></li>
				</ul>
			</nav>

			<section>
				<h2 class="mb-3 font-semibold text-white">Community</h2>
				<ul class="space-y-2">
					<li>
						<a class="hover:text-white hover:underline" href={githubOrgUrl} rel="noopener">GitHub</a
						>
					</li>
					<li>
						<a class="hover:text-white hover:underline" href={githubIssuesUrl} rel="noopener"
							>Report Issues</a
						>
					</li>
					<li><a class="hover:text-white hover:underline" href="/email">Get Activated</a></li>
				</ul>
			</section>
		</div>

		<div
			class="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-600 pt-4 sm:flex-row sm:items-center"
		>
			<p class="text-gray-400">Content licensed MIT/CC-BY where applicable.</p>
			<p class="text-gray-400">&copy; {new Date().getFullYear()} OpenBayan</p>
		</div>
	</div>
</footer>
