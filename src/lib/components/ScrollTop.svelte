<script lang="ts">
	import { onMount } from 'svelte';

	let active = $state(false);

	onMount(() => {
		const checkScroll = () => {
			active = window.scrollY > 500;
		};

		window.addEventListener('scroll', checkScroll);
		checkScroll();

		return () => {
			window.removeEventListener('scroll', checkScroll);
		};
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

<button
	onclick={scrollToTop}
	class="fixed bottom-[30px] right-[30px] w-[50px] h-[50px] bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.2),_0_0_10px_rgba(138,43,226,0.5)] transition-all duration-300 z-[999] max-sm:bottom-[20px] max-sm:right-[20px] max-sm:w-[40px] max-sm:h-[40px] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),_0_0_10px_rgba(138,43,226,0.5)] {active ? 'opacity-100 visible' : 'opacity-0 invisible'}"
	id="scrollTop"
	aria-label="Scroll to top"
>
	<i class="fas fa-arrow-up"></i>
</button>
