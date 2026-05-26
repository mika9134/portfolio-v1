<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Preloader from '$lib/components/Preloader.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import Header from '$lib/components/Header.svelte';
	import ScrollTop from '$lib/components/ScrollTop.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Creative Portfolio | John Doe</title>
	<meta name="description" content="CyberDev - Creative Designer and Developer portfolio showcasing innovative web apps, UI/UX designs, and responsive frontend systems." />
	<link rel="icon" href={favicon} />
</svelte:head>

<Preloader />
<CustomCursor />
<ScrollProgress />
<Header />

<main class="w-full relative">
	{@render children()}
</main>

<Footer />
<ScrollTop />

