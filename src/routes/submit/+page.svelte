<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { contactEmail, githubRepoUrl, githubNewPRUrl } from '$lib/config/site';
</script>

<Meta
	title="Submit a Project"
	description="Share your open source project with the Filipino community. Help build a better Philippines through technology by contributing to our directory of civic tech projects."
	keywords={[
		'submit project',
		'contribute project',
		'open source Philippines',
		'civic tech contribution',
		'share technology project'
	]}
/>

<PageHeader
	title="Submit a Project"
	summary="Share your open source project with the Filipino community and help build a better Philippines through technology."
	color="red"
/>

<div class="mx-auto max-w-screen-xl px-4 py-16">
	<div class="max-w-4xl">
		<p class="mb-8 text-xl leading-relaxed text-gray-700">
			We welcome open source projects that serve the Filipino community. Whether you're building
			tools for government transparency, digital services, or engagement, we'd love to feature your
			work.
		</p>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">Project Requirements</h2>

		<div class="mb-12 grid gap-8 md:grid-cols-2">
			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Open Source</h3>
				<p class="leading-relaxed text-gray-700">
					Your project must be open source with a clear license (MIT, Apache, GPL, etc.).
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Community Impact</h3>
				<p class="leading-relaxed text-gray-700">
					Projects should aim to improve public services, transparency, or digital infrastructure in
					the Philippines.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Active Development</h3>
				<p class="leading-relaxed text-gray-700">
					Projects should be actively maintained or have clear documentation for contributors.
				</p>
			</div>

			<div>
				<h3 class="mb-3 text-lg font-semibold text-gray-900">Clear Documentation</h3>
				<p class="leading-relaxed text-gray-700">
					Include a README with setup instructions, usage examples, and contribution guidelines.
				</p>
			</div>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-900">How to Submit</h2>

		<div class="mb-8 grid gap-6 sm:grid-cols-2">
			<a
				class="block bg-blue-600 p-6 text-white transition-colors hover:bg-blue-700"
				href={githubNewPRUrl}
				rel="noopener"
				target="_blank"
			>
				<h3 class="mb-2 text-lg font-semibold">Submit via Pull Request</h3>
				<p class="text-sm text-blue-100">
					Fork our repository, add your project to the content/projects directory, and submit a pull
					request. This is the preferred method for technical contributors.
				</p>
			</a>

			<a
				class="block bg-green-600 p-6 text-white transition-colors hover:bg-green-700"
				href={`mailto:${contactEmail}`}
			>
				<h3 class="mb-2 text-lg font-semibold">Email Submission</h3>
				<p class="text-sm text-green-100">
					Send us an email with your project details. We'll review and add it to the directory if it
					meets our criteria. Perfect for non-technical contributors.
				</p>
			</a>
		</div>

		<div class="mb-8 border border-blue-200 bg-blue-50 p-6">
			<h3 class="mb-3 text-lg font-semibold text-blue-900">Pull Request Workflow (Recommended)</h3>
			<ol class="list-inside list-decimal space-y-2 text-blue-800">
				<li>
					Fork the <a
						href={githubRepoUrl}
						class="underline hover:text-blue-600"
						target="_blank"
						rel="noopener">OpenBayan repository</a
					>
				</li>
				<li>
					Create a new folder: <code class="rounded bg-blue-100 px-1"
						>content/projects/your-project-name/</code
					>
				</li>
				<li>
					Add an <code class="rounded bg-blue-100 px-1">index.md</code> file with your project details
				</li>
				<li>Follow the metadata format from existing projects</li>
				<li>Submit a pull request with a clear description</li>
			</ol>
		</div>

		<div class="mb-8 border border-gray-200 bg-gray-50 p-6">
			<h3 class="mb-3 text-lg font-semibold text-gray-900">Required Project Information</h3>
			<ul class="list-inside list-disc space-y-2 text-gray-700">
				<li>Project name and brief description</li>
				<li>Repository URL (GitHub, GitLab, etc.)</li>
				<li>Live demo or website URL (if available)</li>
				<li>License information</li>
				<li>Primary maintainer or organization</li>
				<li>Tags and sectors that apply to your project</li>
				<li>Brief explanation of community impact</li>
				<li>Project status (development, stable, maintenance)</li>
			</ul>
		</div>

		<div class="border border-green-200 bg-green-50 p-6">
			<h3 class="mb-3 text-lg font-semibold text-green-900">Project Template</h3>
			<p class="mb-4 text-green-800">
				Copy this template and fill in your project details. Save it as <code
					class="rounded bg-green-100 px-1">content/projects/your-project-name/index.md</code
				>
			</p>
			<div class="overflow-x-auto">
				<pre
					class="overflow-x-auto rounded border border-green-200 bg-white p-4 text-sm text-gray-800"><code
						>{`---
title: "Your Project Name"
summary: "Brief one-sentence description of what your project does"
description: |
  Detailed description of your project. Explain what problem it solves,
  how it helps the Filipino community, and what makes it special.

  You can use multiple paragraphs here to provide comprehensive information
  about your project's goals, features, and impact.

# Project URLs
repository: "https://github.com/yourusername/your-project"
website: "https://your-project.com"  # Optional
demo: "https://demo.your-project.com"  # Optional

# Project Details
license: "MIT"  # e.g., MIT, Apache-2.0, GPL-3.0
status: "stable"  # development, stable, maintenance
dateAdded: "${new Date().toISOString().split('T')[0]}"

# People
maintainers:
  - "Your Name"
  - "Co-maintainer Name"  # Optional

# Categorization
sectors:
  - "Government"  # Choose from: Government, Healthcare, Education, Transportation, etc.
  - "Technology"

tags:
  - "web-app"
  - "transparency"
  - "open-data"
  - "civic-tech"

# Social Impact
impact: |
  Explain how your project benefits the Filipino community.
  What specific problems does it solve? Who are the beneficiaries?
  Include any metrics or success stories if available.
---

more information about the project`}</code
					></pre>
			</div>
		</div>
	</div>
</div>
