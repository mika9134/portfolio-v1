<script lang="ts">
	import { viewport } from '../actions/viewport';

	const skills = [
		'React',
		'Next.js',
		'Svelte / SvelteKit',
		'JavaScript (ES6+)',
		'TypeScript',
		'TailwindCSS',
		'HTML5 / CSS3',
		'Node.js',
		'Express.js',
		'Nest.js',
		'Python (FastAPI)',
		'PostgreSQL',
		'MongoDB',
		'Docker',
		'CI/CD',
		'Figma',
		'RESTful APIs'
	];
</script>

<section
	class="bg-darker py-[6rem] px-0 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(138,43,226,0.1),transparent_60%)] before:pointer-events-none"
	id="about"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4">
		<!-- Section Header -->
		<div class="mb-[3rem]">
			<h2
				use:viewport
				class="text-[2.5rem] max-sm:text-[1.75rem] font-heading font-bold mb-4 relative inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full fade-up"
			>
				About Me
			</h2>
			<p use:viewport class="text-gray text-[1.1rem] mt-4 max-w-[600px] fade-up">
				Discover my journey, skills, and what drives me to create exceptional digital experiences
			</p>
		</div>

		<!-- About Content -->
		<div class="flex items-center gap-[4rem] max-lg:flex-col max-lg:gap-[3rem]">
			<!-- Left Column: Image / Placeholder -->
			<div use:viewport class="flex-1 relative w-full max-w-[400px] mx-auto fade-right">
				<div class="relative w-full rounded-2xl overflow-visible shadow-[0_20px_30px_rgba(0,0,0,0.3),_0_0_10px_rgba(138,43,226,0.5)]">
					<!-- Code graphic panel -->
					<div class="code-pattern w-full aspect-square bg-card-bg rounded-2xl flex items-center justify-center relative overflow-hidden">
						<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--color-card-bg)_70%)]"></div>
						<i class="fas fa-laptop-code text-white text-[5rem] relative z-10"></i>
					</div>
					<!-- Experience Badge -->
					<div class="absolute -bottom-5 -right-5 max-sm:-bottom-3 max-sm:-right-3 bg-gradient-to-br from-primary to-accent text-white rounded-full w-[120px] h-[120px] max-md:w-[100px] max-md:h-[100px] max-sm:w-[80px] max-sm:h-[80px] flex flex-col items-center justify-center font-bold shadow-[0_10px_20px_rgba(138,43,226,0.3)] z-20">
						<span class="text-3xl max-sm:text-xl leading-none">4+</span>
						<span class="text-[0.9rem] max-sm:text-[0.7rem] text-center mt-1">Years Experience</span>
					</div>
				</div>
			</div>

			<!-- Right Column: Bio details -->
			<div use:viewport class="flex-1 fade-left">
				<p class="text-gray mb-8">
					I'm an innovative Fullstack Developer with over 4 years of experience specializing in the JavaScript ecosystem (React, Node.js, Next.js, SvelteKit) and Python FastAPI. I have a proven track record of building scalable, high-performance web applications and RESTful APIs.
				</p>
				<p class="text-gray mb-8">
					My approach combines detailed system architecture design with modern, user-friendly interface styling. I'm highly passionate about automating workflows, CI/CD integrations, unit testing, and implementing AI-powered features for businesses.
				</p>
				<a
					href="#contact"
					class="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary to-accent shadow-[0_5px_15px_rgba(138,43,226,0.3)] transition-all hover:scale-105 hover:shadow-[0_10px_20px_rgba(138,43,226,0.4)] gap-2 mb-8"
				>
					Let's Talk
					<i class="fas fa-paper-plane text-sm"></i>
				</a>

				<!-- Skills Section -->
				<h3 class="text-xl font-heading font-bold mb-4 gradient-text">My Skills</h3>
				<div class="flex flex-wrap gap-4">
					{#each skills as skill}
						<span
							class="bg-card-bg px-4 py-2 rounded-full font-medium shadow-[0_4px_10px_rgba(0,0,0,0.2)] text-gray transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-[3px] hover:shadow-[0_0_10px_rgba(138,43,226,0.5)] cursor-default"
						>
							{skill}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
