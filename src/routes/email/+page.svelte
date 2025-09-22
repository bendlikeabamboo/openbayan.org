<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Email Activation – OpenBayan</title>
	<meta
		name="description"
		content="Request activation for meaningful contributors to the OpenBayan community."
	/>
</svelte:head>

<PageHeader
	title="Email Activation"
	summary="Request activation for meaningful contributors to the OpenBayan community."
	color="red"
/>

<div class="mx-auto max-w-screen-xl px-4 py-16">
	<div class="max-w-4xl">
		<p class="mb-6 text-xl leading-relaxed text-gray-700">
			Email activation is available for anyone who wants to be more involved in the OpenBayan
			community.
		</p>

		<div class="mb-8 border border-blue-200 bg-blue-50 p-6">
			<p class="text-blue-800">
				<strong>Quick turnaround:</strong> We'll try to activate your account within 2-3 days at most.
				Usually much faster!
			</p>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">Who can request activation?</h2>

		<div class="mb-12 grid gap-8 md:grid-cols-2">
			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Project maintainers</h3>
				<p class="leading-relaxed text-gray-700">
					Developers and organizations who maintain open source projects.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Contributors</h3>
				<p class="leading-relaxed text-gray-700">
					Anyone who wants to contribute to projects or help improve the platform.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Organizations</h3>
				<p class="leading-relaxed text-gray-700">
					Non-profit organizations, government agencies, or companies working on digital
					initiatives.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Technology enthusiasts</h3>
				<p class="leading-relaxed text-gray-700">
					Individuals interested in open source technology and community building.
				</p>
			</div>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">How to request activation</h2>

		<div class="mb-8 border border-gray-200 bg-gray-50 p-6">
			<p class="mb-4 leading-relaxed text-gray-700">
				Send an email to <strong>activate@openbayan.org</strong> with the following information:
			</p>

			<ul class="list-inside list-disc space-y-2 text-gray-700">
				<li>Your name and brief background</li>
				<li>Preferred username for your OpenBayan email account</li>
				<li>Your interest in open source technology or community projects</li>
				<li>Links to your projects, contributions, or relevant work (optional)</li>
				<li>GitHub username (if you want organization access)</li>
				<li>How you'd like to contribute to the OpenBayan community</li>
			</ul>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">Setting up with an email client</h2>

		<div class="mb-8 border border-blue-200 bg-blue-50 p-6">
			<p class="mb-4 text-blue-800">
				<strong>Server Configuration:</strong> Use these settings to configure your email client (Outlook,
				Thunderbird, Apple Mail, etc.) with your OpenBayan email account.
			</p>
		</div>

		<div class="mb-12 grid gap-6 md:grid-cols-2">
			<div class="border border-gray-200 bg-gray-50 p-6">
				<h3 class="mb-4 text-lg font-semibold text-gray-900">Incoming Mail (IMAP/POP3)</h3>
				<div class="space-y-3 text-sm">
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">IMAP Server:</span>
						<span class="font-mono text-gray-900">mail.openbayan.org</span>
					</div>
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">IMAP SSL Port:</span>
						<span class="font-mono text-gray-900">993</span>
					</div>
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">IMAP Non-SSL Port:</span>
						<span class="font-mono text-gray-900">143</span>
					</div>
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">POP3 SSL Port:</span>
						<span class="font-mono text-gray-900">995</span>
					</div>
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">POP3 Non-SSL Port:</span>
						<span class="font-mono text-gray-900">110</span>
					</div>
				</div>
			</div>

			<div class="border border-gray-200 bg-gray-50 p-6">
				<h3 class="mb-4 text-lg font-semibold text-gray-900">Outgoing Mail (SMTP)</h3>
				<div class="space-y-3 text-sm">
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">SMTP Server:</span>
						<span class="font-mono text-gray-900">mail.openbayan.org</span>
					</div>
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">SMTP SSL Port:</span>
						<span class="font-mono text-gray-900">465</span>
					</div>
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">SMTP STARTTLS Port:</span>
						<span class="font-mono text-gray-900">587</span>
					</div>
					<div class="flex justify-between">
						<span class="font-medium text-gray-700">SMTP Non-SSL Port:</span>
						<span class="font-mono text-gray-900">25</span>
					</div>
				</div>
			</div>
		</div>

		<div class="mb-12 border border-green-200 bg-green-50 p-6">
			<h3 class="mb-3 text-lg font-semibold text-green-900">Recommended Settings</h3>
			<ul class="list-inside list-disc space-y-2 text-green-800">
				<li><strong>Use IMAP instead of POP3</strong> for better synchronization across devices</li>
				<li>
					<strong>Enable SSL/TLS encryption</strong> for secure connections (ports 993 for IMAP, 465
					for SMTP)
				</li>
				<li>
					<strong>Use STARTTLS on port 587</strong> if your client doesn't support SSL on port 465
				</li>
				<li><strong>Authentication required</strong> for both incoming and outgoing mail</li>
			</ul>
		</div>

		<h2 class="mb-8 text-2xl font-bold text-gray-900">What activation provides</h2>

		<div class="mb-12 grid gap-6 md:grid-cols-2">
			<div class="border border-blue-200 bg-blue-50 p-6">
				<div class="mb-4 flex items-center">
					<div
						class="mr-3 flex h-8 w-8 items-center justify-center bg-blue-600 text-sm font-bold text-white"
					>
						@
					</div>
					<h3 class="text-lg font-semibold text-gray-900">OpenBayan Email Account</h3>
				</div>
				<p class="text-sm leading-relaxed text-gray-700">
					Your own @openbayan.org email address for community activities and professional use.
				</p>
			</div>

			<div class="border border-gray-200 bg-gray-50 p-6">
				<div class="mb-4 flex items-center">
					<div
						class="mr-3 flex h-8 w-8 items-center justify-center bg-gray-800 text-sm font-bold text-white"
					>
						GH
					</div>
					<h3 class="text-lg font-semibold text-gray-900">GitHub Organization Access</h3>
				</div>
				<p class="text-sm leading-relaxed text-gray-700">
					Direct access to our GitHub organization for contributing to projects and repositories.
				</p>
			</div>

			<div class="border border-green-200 bg-green-50 p-6">
				<div class="mb-4 flex items-center">
					<div
						class="mr-3 flex h-8 w-8 items-center justify-center bg-green-600 text-sm font-bold text-white"
					>
						CC
					</div>
					<h3 class="text-lg font-semibold text-gray-900">Community Coordination</h3>
				</div>
				<p class="text-sm leading-relaxed text-gray-700">
					Join our internal coordination channels and planning discussions.
				</p>
			</div>

			<div class="border border-yellow-200 bg-yellow-50 p-6">
				<div class="mb-4 flex items-center">
					<div
						class="mr-3 flex h-8 w-8 items-center justify-center bg-yellow-600 text-sm font-bold text-white"
					>
						EA
					</div>
					<h3 class="text-lg font-semibold text-gray-900">Early Access</h3>
				</div>
				<p class="text-sm leading-relaxed text-gray-700">
					Be the first to know about new features, projects, and community initiatives.
				</p>
			</div>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">Email Usage Guidelines</h2>

		<div class="mb-8 border border-red-200 bg-red-50 p-4 sm:p-6">
			<h3 class="mb-4 text-lg font-semibold text-red-900">
				Important: Please follow these rules to maintain our email reputation
			</h3>
			<div class="space-y-4 text-red-800">
				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-red-600 text-xs font-bold text-white"
						>1</span
					>
					<div class="min-w-0">
						<p class="mb-1 font-semibold">400 outbound emails per hour maximum</p>
						<p class="text-sm text-red-700">
							This helps prevent our domain from being flagged as spam
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-red-600 text-xs font-bold text-white"
						>2</span
					>
					<div class="min-w-0">
						<p class="mb-1 font-semibold">No marketing emails</p>
						<p class="text-sm text-red-700">
							Use your OpenBayan email only for community activities and professional correspondence
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-red-600 text-xs font-bold text-white"
						>3</span
					>
					<div class="min-w-0">
						<p class="mb-1 font-semibold">Do not circumvent rules 1 and 2</p>
						<p class="text-sm text-red-700">
							No workarounds or attempts to bypass these limitations
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-red-600 text-xs font-bold text-white"
						>4</span
					>
					<div class="min-w-0">
						<p class="mb-1 font-semibold">Maintain our reputation</p>
						<p class="text-sm text-red-700">
							Violations hurt our email deliverability and affect the entire community
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-red-600 text-xs font-bold text-white"
						>5</span
					>
					<div class="min-w-0">
						<p class="mb-1 font-semibold">Change your password immediately</p>
						<p class="text-sm text-red-700">
							Update your credentials after receiving the initial login details
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-4 sm:flex-row">
			<a
				href="mailto:activate@openbayan.org"
				class="inline-flex items-center bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
			>
				Send activation request
			</a>
			<a
				href="/directory"
				class="inline-flex items-center border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
			>
				Browse projects
			</a>
		</div>
	</div>
</div>
