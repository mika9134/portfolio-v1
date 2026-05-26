<script lang="ts">
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { viewport } from '../actions/viewport';

	interface Project {
		id: number;
		name: string;
		category: string;
		categoryLabel: string;
		tech: string;
		icon: string;
		gradient: string;
	}

	const projects: Project[] = [
		{
			id: 1,
			name: 'Neon E-commerce',
			category: 'web',
			categoryLabel: 'Web Design',
			tech: 'React, Node.js, MongoDB',
			icon: 'fas fa-shopping-cart',
			gradient: 'from-primary to-[#4B0082]'
		},
		{
			id: 2,
			name: 'Cyber Fitness',
			category: 'app',
			categoryLabel: 'App Development',
			tech: 'Flutter, Firebase',
			icon: 'fas fa-dumbbell',
			gradient: 'from-secondary to-[#1E90FF]'
		},
		{
			id: 3,
			name: 'Neon Banking',
			category: 'ui',
			categoryLabel: 'UI/UX Design',
			tech: 'Figma, Adobe XD',
			icon: 'fas fa-university',
			gradient: 'from-accent to-primary'
		},
		{
			id: 4,
			name: 'Cyber Social',
			category: 'web',
			categoryLabel: 'Web Design',
			tech: 'Vue.js, Firebase',
			icon: 'fas fa-users',
			gradient: 'from-[#8B5CF6] to-[#6366F1]'
		},
		{
			id: 5,
			name: 'Neon Travel',
			category: 'ui',
			categoryLabel: 'UI/UX Design',
			tech: 'Sketch, InVision',
			icon: 'fas fa-plane',
			gradient: 'from-[#EC4899] to-[#8B5CF6]'
		},
		{
			id: 6,
			name: 'Cyber Weather',
			category: 'app',
			categoryLabel: 'App Development',
			tech: 'React Native, API',
			icon: 'fas fa-cloud-sun',
			gradient: 'from-[#10B981] to-[#3B82F6]'
		}
	];

	let activeFilter = $state('all');

	// Reactive filtered list of projects
	const filteredProjects = $derived(
		activeFilter === 'all'
			? projects
			: projects.filter((project) => project.category === activeFilter)
	);

	const changeFilter = (filter: string) => {
		activeFilter = filter;
	};
</script>

<section
	class="bg-darker py-[6rem] px-0 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05),transparent_60%)] before:pointer-events-none"
	id="portfolio"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4">
		<!-- Section Header -->
		<div class="mb-[3rem]">
			<h2
				use:viewport
				class="text-[2.5rem] max-sm:text-[1.75rem] font-heading font-bold mb-4 relative inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full fade-up"
			>
				My Portfolio
			</h2>
			<p use:viewport class="text-gray text-[1.1rem] mt-4 max-w-[600px] fade-up">
				Explore my recent projects showcasing creativity, technical expertise, and problem-solving skills
			</p>
		</div>

		<!-- Portfolio Filter Controls -->
		<div use:viewport class="flex justify-center gap-4 mb-12 flex-wrap fade-up">
			<button
				class="filter-btn relative bg-transparent border-none py-2 px-4 font-medium cursor-pointer transition-colors duration-300 {activeFilter === 'all' ? 'text-light active' : 'text-gray'}"
				onclick={() => changeFilter('all')}
			>
				All
			</button>
			<button
				class="filter-btn relative bg-transparent border-none py-2 px-4 font-medium cursor-pointer transition-colors duration-300 {activeFilter === 'web' ? 'text-light active' : 'text-gray'}"
				onclick={() => changeFilter('web')}
			>
				Web Design
			</button>
			<button
				class="filter-btn relative bg-transparent border-none py-2 px-4 font-medium cursor-pointer transition-colors duration-300 {activeFilter === 'app' ? 'text-light active' : 'text-gray'}"
				onclick={() => changeFilter('app')}
			>
				App Development
			</button>
			<button
				class="filter-btn relative bg-transparent border-none py-2 px-4 font-medium cursor-pointer transition-colors duration-300 {activeFilter === 'ui' ? 'text-light active' : 'text-gray'}"
				onclick={() => changeFilter('ui')}
			>
				UI/UX Design
			</button>
		</div>

		<!-- Portfolio Grid -->
		<div class="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
			{#each filteredProjects as project (project.id)}
				<div
					use:viewport
					animate:flip={{ duration: 400 }}
					transition:fade={{ duration: 300 }}
					class="group portfolio-item rounded-3xl overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_10px_rgba(138,43,226,0.5)] h-[300px] fade-up"
				>
					<!-- Inner Base Content (with gradient and details) -->
					<div
						class="w-full h-full bg-gradient-to-br {project.gradient} transition-transform duration-500 group-hover:scale-110 flex flex-col justify-center items-center p-8 text-white text-center"
					>
						<i class="{project.icon} text-[3rem] mb-4"></i>
						<h3 class="text-[1.5rem] font-bold mb-2">{project.name}</h3>
						<p class="text-[0.9rem] opacity-80">{project.tech}</p>
					</div>

					<!-- Hover Overlay -->
					<div
						class="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<h3 class="text-white text-[1.5rem] font-bold mb-1">{project.name}</h3>
						<p class="text-secondary text-[0.9rem] mb-4">{project.categoryLabel}</p>
						<a
							href="#contact"
							class="inline-flex items-center text-white font-bold gap-2 hover:text-secondary hover:gap-3 transition-all"
						>
							View Project
							<i class="fas fa-arrow-right text-xs"></i>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.filter-btn::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(135deg, #8a2be2, #ff00ff);
		transition: width 0.3s ease;
	}

	.filter-btn:hover::after,
	.filter-btn.active::after {
		width: 100%;
	}
</style>
