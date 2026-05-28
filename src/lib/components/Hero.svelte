<script lang="ts">
	import { onMount } from 'svelte';
	import { viewport } from '../actions/viewport';

	// Typed Text Animation State
	const texts = ['Mikiyas Solomon', 'Fullstack Developer', 'Svelte / Next.js Expert', 'FastAPI Developer'];
	let textIndex = $state(0);
	let charIndex = $state(0);
	let isDeleting = $state(false);
	let typedText = $state('');
	let typingSpeed = $state(100);

	// Mouse Parallax State
	let mouseX = $state(0);
	let mouseY = $state(0);
	let windowWidth = $state(1200);
	let windowHeight = $state(800);

	onMount(() => {
		// Typing Effect
		let typingTimer: number;
		const type = () => {
			const currentText = texts[textIndex];

			if (isDeleting) {
				typedText = currentText.substring(0, charIndex - 1);
				charIndex--;
				typingSpeed = 50;
			} else {
				typedText = currentText.substring(0, charIndex + 1);
				charIndex++;
				typingSpeed = 100;
			}

			if (!isDeleting && charIndex === currentText.length) {
				isDeleting = true;
				typingSpeed = 1000;
			} else if (isDeleting && charIndex === 0) {
				isDeleting = false;
				textIndex = (textIndex + 1) % texts.length;
				typingSpeed = 500;
			}

			typingTimer = setTimeout(type, typingSpeed) as unknown as number;
		};

		typingTimer = setTimeout(type, 1000) as unknown as number;

		// Mouse Parallax Listeners
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;

		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		const handleResize = () => {
			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(typingTimer);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
		};
	});

	// Derived values for parallax offsets
	let shape1Transform = $derived(
		`translateX(${(windowWidth - mouseX * 0.05) / 100}px) translateY(${(windowHeight - mouseY * 0.05) / 100}px)`
	);
	let shape2Transform = $derived(
		`translateX(${(windowWidth - mouseX * 0.07) / 100}px) translateY(${(windowHeight - mouseY * 0.07) / 100}px)`
	);
	let shape3Transform = $derived(
		`translateX(${(windowWidth - mouseX * 0.09) / 100}px) translateY(${(windowHeight - mouseY * 0.09) / 100}px)`
	);

	const scrollToAbout = () => {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			const headerHeight = 80;
			const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	};
</script>

<section
	class="min-height-[100vh] flex items-center relative overflow-hidden bg-darker py-[6rem] px-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(138,43,226,0.1),transparent_60%)] before:pointer-events-none"
	id="home"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4 w-full">
		<div class="flex items-center justify-between gap-8 max-lg:flex-col-reverse max-lg:text-center max-lg:justify-center">
			<!-- Text Content -->
			<div class="flex-1">
				<h1 use:viewport class="text-[3.5rem] max-lg:text-[2.5rem] max-sm:text-[2rem] font-heading font-bold mb-4 leading-tight fade-up">
					<span class="text-gray text-[2rem] max-sm:text-[1.5rem] font-medium">Hi, I'm</span> <br />
					<span class="text-primary [text-shadow:var(--glow)] font-extrabold">{typedText}<span class="animate-pulse">|</span></span>
				</h1>
				<p use:viewport class="text-[1.2rem] max-sm:text-[1rem] text-gray mb-8 max-w-[500px] max-lg:mx-auto fade-up">
					Innovative Fullstack Developer with over 4 years of experience specializing in SvelteKit, React, Next.js, and Python FastAPI to build high-performance web systems.
				</p>
				<div use:viewport class="flex gap-4 mb-8 max-lg:justify-center max-sm:flex-col fade-up">
					<a
						href="#portfolio"
						class="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary to-accent shadow-[0_5px_15px_rgba(138,43,226,0.3)] transition-all hover:scale-105 hover:shadow-[0_10px_20px_rgba(138,43,226,0.4)] gap-2"
					>
						View My Work
						<i class="fas fa-arrow-right text-sm"></i>
					</a>
					<a
						href="#contact"
						class="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-primary bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all hover:scale-105 hover:shadow-[0_10px_20px_rgba(138,43,226,0.3)]"
					>
						Contact Me
					</a>
				</div>
				<div use:viewport class="flex gap-4 max-lg:justify-center fade-up">
					<a
						href="https://github.com/mika9134"
						target="_blank"
						rel="noreferrer"
						class="social-icon w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="GitHub"
					>
						<i class="fab fa-github"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/mikiyas-solomon-a55769261"
						target="_blank"
						rel="noreferrer"
						class="social-icon w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="LinkedIn"
					>
						<i class="fab fa-linkedin-in"></i>
					</a>
				</div>
			</div>

			<!-- Image Graphic -->
			<div use:viewport class="flex-1 relative flex justify-center fade-left">
				<div class="w-[400px] h-[400px] max-md:w-[300px] max-md:h-[300px] max-sm:w-[250px] max-sm:h-[250px] relative">
					<div
						class="w-full h-full overflow-hidden shadow-[0_20px_30px_rgba(0,0,0,0.3),_0_0_10px_rgba(138,43,226,0.5)] animate-morphing"
					>
						<div class="dev-image w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-[8rem] max-md:text-[6rem] relative overflow-hidden">
							<i class="fas fa-code z-10"></i>
						</div>
					</div>
				</div>

				<!-- Parallax Floating Shapes -->
				<div
					class="floating-shape absolute top-[10%] left-[10%] w-[60px] h-[60px] bg-primary rounded-full shadow-[0_0_10px_rgba(138,43,226,0.5)] opacity-60 blur-[3px]"
					style="transform: {shape1Transform}"
				></div>
				<div
					class="floating-shape absolute bottom-[20%] right-[10%] w-[80px] h-[80px] bg-secondary rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-[0_0_10px_rgba(0,255,255,0.5)] opacity-60 blur-[3px]"
					style="transform: {shape2Transform}"
				></div>
				<div
					class="floating-shape absolute top-1/2 left-1/2 w-[40px] h-[40px] bg-accent rounded-full shadow-[0_0_10px_rgba(255,0,255,0.5)] opacity-60 blur-[3px]"
					style="transform: {shape3Transform}"
				></div>
			</div>
		</div>
	</div>

	<!-- Scroll Down Indicator -->
	<button
		onclick={scrollToAbout}
		class="scroll-indicator absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px] text-light text-[0.9rem] opacity-70 transition-all hover:opacity-100 hover:-translate-y-[5px]"
		id="scrollIndicator"
		aria-label="Scroll Down"
	>
		<span class="font-medium">Scroll Down</span>
		<i class="fas fa-chevron-down text-lg animate-bounce-slow text-primary"></i>
	</button>
</section>
