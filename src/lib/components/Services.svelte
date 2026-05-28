<script lang="ts">
	import { viewport } from '../actions/viewport';

	interface Service {
		icon: string;
		title: string;
		description: string;
	}

	const services: Service[] = [
		{
			icon: 'fas fa-code',
			title: 'Full-Stack Web Dev',
			description: 'Developing highly interactive, performant web applications using SvelteKit, React, Next.js, and modern Tailwind CSS configurations.'
		},
		{
			icon: 'fas fa-server',
			title: 'Backend & API Design',
			description: 'Designing secure, scalable RESTful APIs with Python FastAPI, Express, Nest.js, and robust validation structures.'
		},
		{
			icon: 'fas fa-database',
			title: 'Database Management',
			description: 'Structuring efficient SQL and NoSQL databases using PostgreSQL, MongoDB, SQLModel, and multi-tenant warehouse models.'
		},
		{
			icon: 'fas fa-robot',
			title: 'AI Workflows & Integrations',
			description: 'Implementing custom AI-powered workflows to automate backend tasks, client flows, and administrative processes.'
		},
		{
			icon: 'fas fa-cogs',
			title: 'DevOps & Test Automation',
			description: 'Setting up automated CI/CD pipelines, Docker container environments, Selenium script suites, and cPanel/production server deploys.'
		},
		{
			icon: 'fas fa-rocket',
			title: 'Performance & SEO',
			description: 'Optimizing application bundles, databases, and server configurations for blazing-fast speed and search engine visibility.'
		}
	];
</script>

<section
	class="bg-dark py-[6rem] px-0 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,255,0.1),transparent_60%)] before:pointer-events-none"
	id="services"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4">
		<!-- Section Header -->
		<div class="mb-[3rem]">
			<h2
				use:viewport
				class="text-[2.5rem] max-sm:text-[1.75rem] font-heading font-bold mb-4 relative inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full fade-up"
			>
				My Services
			</h2>
			<p use:viewport class="text-gray text-[1.1rem] mt-4 max-w-[600px] fade-up">
				Specialized solutions to elevate your digital presence and create memorable user experiences
			</p>
		</div>

		<!-- Services Grid -->
		<div class="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
			{#each services as service}
				<div
					use:viewport
					class="group service-card bg-card-bg rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_10px_rgba(138,43,226,0.5)] relative overflow-hidden z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-gradient-to-b before:from-primary/10 before:to-transparent before:transition-all before:duration-300 before:z-[-1] hover:before:h-full fade-up"
				>
					<!-- Icon Box -->
					<div
						class="w-[60px] h-[60px] bg-gradient-to-br from-primary to-accent text-white rounded-2xl flex items-center justify-center text-[1.5rem] mb-6 shadow-[0_0_10px_rgba(138,43,226,0.5)] transition-all duration-500 group-hover:rounded-full group-hover:rotate-[360deg]"
					>
						<i class={service.icon}></i>
					</div>

					<h3 class="text-xl font-heading font-bold mb-4 text-light">
						{service.title}
					</h3>
					<p class="text-gray mb-6 leading-relaxed">
						{service.description}
					</p>

					<a
						href="#contact"
						class="service-link inline-flex items-center text-primary font-bold gap-2 transition-all hover:gap-3 hover:text-accent hover:[text-shadow:0_0_8px_rgba(255,0,255,0.4)]"
					>
						Learn More
						<i class="fas fa-arrow-right text-xs"></i>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
