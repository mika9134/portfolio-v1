<script lang="ts">
	import { onMount } from 'svelte';

	let posX = $state(0);
	let posY = $state(0);
	let followerX = $state(0);
	let followerY = $state(0);

	let active = $state(false);
	let isHovered = $state(false);
	let isPressed = $state(false);
	let isTouchDevice = $state(true);

	onMount(() => {
		isTouchDevice = !window.matchMedia('(pointer: fine)').matches;
		if (isTouchDevice) return;

		active = true;

		const onMouseMove = (e: MouseEvent) => {
			posX = e.clientX;
			posY = e.clientY;
		};

		const onMouseDown = () => {
			isPressed = true;
		};

		const onMouseUp = () => {
			isPressed = false;
		};

		// Track hover of interactive elements
		const onMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target) return;
			
			const interactive = target.closest('a, button, .portfolio-item, .service-card, .dot, .nav-btn, .social-icon');
			isHovered = !!interactive;
		};

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mousedown', onMouseDown);
		window.addEventListener('mouseup', onMouseUp);
		window.addEventListener('mouseover', onMouseOver);

		// Animation loop for smooth follower trailing
		let frameId: number;
		const updateFollower = () => {
			// Linear interpolation (lerp) for smooth trailing
			followerX += (posX - followerX) * 0.15;
			followerY += (posY - followerY) * 0.15;
			frameId = requestAnimationFrame(updateFollower);
		};
		frameId = requestAnimationFrame(updateFollower);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mousedown', onMouseDown);
			window.removeEventListener('mouseup', onMouseUp);
			window.removeEventListener('mouseover', onMouseOver);
			cancelAnimationFrame(frameId);
		};
	});
</script>

{#if active && !isTouchDevice}
	<!-- Dot -->
	<div
		class="fixed pointer-events-none mix-blend-difference z-[9999] rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 transition-[width,height,transform,opacity] duration-300 ease-out"
		style="left: {posX}px; top: {posY}px; width: {isHovered ? '30px' : '20px'}; height: {isHovered ? '30px' : '20px'}; transform: translate(-50%, -50%) scale({isPressed ? 0.8 : 1}); opacity: {isHovered ? 0.3 : 0.5};"
	></div>

	<!-- Follower Circle -->
	<div
		class="fixed pointer-events-none z-[9998] rounded-full border border-primary -translate-x-1/2 -translate-y-1/2 transition-[width,height,transform] duration-300 ease-out opacity-30"
		style="left: {followerX}px; top: {followerY}px; width: {isHovered ? '60px' : '40px'}; height: {isHovered ? '60px' : '40px'}; transform: translate(-50%, -50%) scale({isPressed ? 0.8 : 1});"
	></div>
{/if}
