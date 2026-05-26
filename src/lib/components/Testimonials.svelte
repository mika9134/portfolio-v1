<script lang="ts">
	import { onMount } from 'svelte';
	import { viewport } from '../actions/viewport';

	interface Testimonial {
		text: string;
		author: string;
		role: string;
		avatarClass: string;
	}

	const testimonials: Testimonial[] = [
		{
			text: 'Working with this developer was an incredible experience. Their attention to detail and creative approach transformed our vision into a stunning website that perfectly represents our brand in the digital space.',
			author: 'Sarah Johnson',
			role: 'CEO, TechStart',
			avatarClass: 'bg-gradient-to-br from-primary to-[#4B0082]'
		},
		{
			text: "The developer's technical expertise and creative vision helped us create a website that not only looks amazing but also performs exceptionally well. Our conversion rates have increased significantly since launch.",
			author: 'Michael Brown',
			role: 'Marketing Director, Innovate Inc.',
			avatarClass: 'bg-gradient-to-br from-secondary to-[#1E90FF]'
		},
		{
			text: 'The animations and interactive elements created for our website have completely transformed our brand\'s online presence. Our customers frequently comment on how engaging and unique our site feels.',
			author: 'Emily Chen',
			role: 'Founder, Design Hub',
			avatarClass: 'bg-gradient-to-br from-accent to-primary'
		}
	];

	let currentIndex = $state(0);
	let intervalId: number;

	const showSlide = (index: number) => {
		currentIndex = index;
		resetAutoplay();
	};

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % testimonials.length;
	};

	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	};

	const startAutoplay = () => {
		intervalId = setInterval(nextSlide, 5000) as unknown as number;
	};

	const resetAutoplay = () => {
		clearInterval(intervalId);
		startAutoplay();
	};

	const handlePrevClick = () => {
		prevSlide();
		resetAutoplay();
	};

	const handleNextClick = () => {
		nextSlide();
		resetAutoplay();
	};

	onMount(() => {
		startAutoplay();
		return () => clearInterval(intervalId);
	});
</script>

<section
	class="bg-dark py-[6rem] px-0 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1),transparent_60%)] before:pointer-events-none"
	id="testimonials"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4">
		<!-- Section Header -->
		<div class="mb-[3rem]">
			<h2
				use:viewport
				class="text-[2.5rem] max-sm:text-[1.75rem] font-heading font-bold mb-4 relative inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full fade-up"
			>
				Testimonials
			</h2>
			<p use:viewport class="text-gray text-[1.1rem] mt-4 max-w-[600px] fade-up">
				What clients say about my work and collaboration experience
			</p>
		</div>

		<!-- Slider Container -->
		<div use:viewport class="relative max-w-[800px] mx-auto fade-up">
			<!-- Slider window -->
			<div class="overflow-hidden w-full relative">
				<div
					class="flex transition-transform duration-500 ease-out"
					style="transform: translateX(-{currentIndex * 100}%)"
				>
					{#each testimonials as testimonial}
						<div class="min-w-full px-4">
							<div
								class="bg-card-bg rounded-3xl p-8 max-sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative border border-primary/10 before:content-['\201C'] before:absolute before:top-5 before:left-5 before:text-8xl before:text-primary/10 before:font-serif before:leading-none"
							>
								<p class="italic text-gray mb-8 relative z-10 leading-relaxed text-lg max-sm:text-base">
									"{testimonial.text}"
								</p>
								<div class="flex items-center gap-4">
									<div
										class="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[1.5rem] {testimonial.avatarClass}"
									>
										<i class="fas fa-user"></i>
									</div>
									<div>
										<h4 class="text-lg max-sm:text-base font-bold text-light mb-0.5">
											{testimonial.author}
										</h4>
										<p class="text-gray text-sm">{testimonial.role}</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Navigation Buttons -->
			<div class="flex justify-center gap-4 mt-8">
				<button
					class="nav-btn w-[50px] h-[50px] rounded-full bg-card-bg flex items-center justify-center border-none shadow-[0_4px_10px_rgba(0,0,0,0.2)] cursor-pointer text-gray transition-all hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
					onclick={handlePrevClick}
					aria-label="Previous Testimonial"
				>
					<i class="fas fa-arrow-left"></i>
				</button>
				<button
					class="nav-btn w-[50px] h-[50px] rounded-full bg-card-bg flex items-center justify-center border-none shadow-[0_4px_10px_rgba(0,0,0,0.2)] cursor-pointer text-gray transition-all hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
					onclick={handleNextClick}
					aria-label="Next Testimonial"
				>
					<i class="fas fa-arrow-right"></i>
				</button>
			</div>

			<!-- Navigation Dots -->
			<div class="flex justify-center gap-2 mt-8">
				{#each testimonials as _, idx}
					<button
						class="dot w-2.5 h-2.5 rounded-full bg-card-bg cursor-pointer border-none transition-all {idx === currentIndex ? 'bg-gradient-to-r from-primary to-accent scale-125 shadow-[0_0_10px_rgba(138,43,226,0.5)]' : ''}"
						onclick={() => showSlide(idx)}
						aria-label="Go to slide {idx + 1}"
					></button>
				{/each}
			</div>
		</div>
	</div>
</section>
