<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let mobileNavActive = $state(false);
	let activeSection = $state('home');

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'services', label: 'Services' },
		{ id: 'portfolio', label: 'Portfolio' },
		{ id: 'testimonials', label: 'Testimonials' },
		{ id: 'contact', label: 'Contact' }
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;

			// Determine active section based on scroll offset
			const scrollPosition = window.scrollY;
			for (const item of navItems) {
				const el = document.getElementById(item.id);
				if (el) {
					const top = el.offsetTop - 120;
					const height = el.offsetHeight;
					if (scrollPosition >= top && scrollPosition < top + height) {
						activeSection = item.id;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const toggleMobileNav = () => {
		mobileNavActive = !mobileNavActive;
	};

	const handleLinkClick = (e: MouseEvent, targetId: string) => {
		e.preventDefault();
		mobileNavActive = false;

		const target = document.getElementById(targetId);
		if (target) {
			const headerHeight = scrolled ? 64 : 80;
			const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
			activeSection = targetId;
		}
	};
</script>

<header
	class="fixed top-0 left-0 w-full z-[1000] bg-dark/80 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-all duration-300 {scrolled ? 'py-2 bg-dark/95' : 'py-4 bg-dark/80'}"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4 flex justify-between items-center">
		<a
			href="#home"
			onclick={(e) => handleLinkClick(e, 'home')}
			class="font-heading font-bold text-2xl text-light flex items-center gap-2"
		>
			Cyber<span class="text-primary [text-shadow:var(--glow)]">Dev</span>
		</a>

		<button
			class="hidden max-md:block bg-none border-none text-2xl text-light cursor-pointer transition-transform duration-300"
			onclick={toggleMobileNav}
			aria-label="Toggle Mobile Menu"
		>
			<i class="fas {mobileNavActive ? 'fa-times' : 'fa-bars'}"></i>
		</button>

		<nav
			class="mobile-nav max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-dark/95 max-md:shadow-[0_10px_20px_rgba(0,0,0,0.3)] max-md:py-4 {mobileNavActive ? 'active' : ''}"
			id="nav"
		>
			<ul class="flex gap-8 max-md:flex-col max-md:gap-0">
				{#each navItems as item}
					<li class="w-full">
						<a
							href="#{item.id}"
							onclick={(e) => handleLinkClick(e, item.id)}
							class="font-medium relative transition-colors duration-300 text-gray max-md:block max-md:py-3 max-md:px-8 hover:text-light max-md:hover:bg-primary/10 {activeSection === item.id ? 'text-light active' : ''}"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	/* Desktop nav styling */
	nav ul li a::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(135deg, #8a2be2, #ff00ff);
		transition: width 0.3s ease;
	}

	nav ul li a:hover::after,
	nav ul li a.active::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		/* Disable underline effect on mobile */
		nav ul li a::after {
			display: none;
		}

		/* Mobile slide toggle via clipping path */
		.mobile-nav {
			clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
			transition: clip-path 0.3s ease;
		}

		.mobile-nav.active {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
</style>
