<script lang="ts">
	import { viewport } from '../actions/viewport';

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let submitStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
			submitStatus = 'error';
			return;
		}

		submitStatus = 'submitting';

		// Simulate API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 1200));
			submitStatus = 'success';
			name = '';
			email = '';
			subject = '';
			message = '';
		} catch (err) {
			submitStatus = 'error';
		}
	};
</script>

<section
	class="bg-darker py-[6rem] px-0 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.1),transparent_60%)] before:pointer-events-none"
	id="contact"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4">
		<!-- Section Header -->
		<div class="mb-[3rem]">
			<h2
				use:viewport
				class="text-[2.5rem] max-sm:text-[1.75rem] font-heading font-bold mb-4 relative inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full fade-up"
			>
				Get In Touch
			</h2>
			<p use:viewport class="text-gray text-[1.1rem] mt-4 max-w-[600px] fade-up">
				Let's discuss your project and create something amazing together
			</p>
		</div>

		<!-- Contact Content -->
		<div class="flex gap-16 max-lg:flex-col max-lg:gap-12">
			<!-- Contact Info Column -->
			<div use:viewport class="flex-1 fade-right">
				<div class="mb-8">
					<!-- Info item: Location -->
					<div class="flex gap-4 mb-6 items-start">
						<div
							class="w-[50px] h-[50px] rounded-full bg-card-bg flex items-center justify-center text-primary text-lg flex-shrink-0 shadow-[0_0_10px_rgba(138,43,226,0.5)] border border-primary/20"
						>
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<div>
							<h4 class="text-lg font-heading font-bold text-light mb-1">Location</h4>
							<p class="text-gray">San Francisco, CA, USA</p>
						</div>
					</div>

					<!-- Info item: Email -->
					<div class="flex gap-4 mb-6 items-start">
						<div
							class="w-[50px] h-[50px] rounded-full bg-card-bg flex items-center justify-center text-primary text-lg flex-shrink-0 shadow-[0_0_10px_rgba(138,43,226,0.5)] border border-primary/20"
						>
							<i class="fas fa-envelope"></i>
						</div>
						<div>
							<h4 class="text-lg font-heading font-bold text-light mb-1">Email</h4>
							<p class="text-gray">hello@cyberdev.com</p>
						</div>
					</div>

					<!-- Info item: Phone -->
					<div class="flex gap-4 mb-6 items-start">
						<div
							class="w-[50px] h-[50px] rounded-full bg-card-bg flex items-center justify-center text-primary text-lg flex-shrink-0 shadow-[0_0_10px_rgba(138,43,226,0.5)] border border-primary/20"
						>
							<i class="fas fa-phone-alt"></i>
						</div>
						<div>
							<h4 class="text-lg font-heading font-bold text-light mb-1">Phone</h4>
							<p class="text-gray">+1 (123) 456-7890</p>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div class="flex gap-4">
					<a
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="GitHub"
					>
						<i class="fab fa-github"></i>
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="LinkedIn"
					>
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="Twitter"
					>
						<i class="fab fa-twitter"></i>
					</a>
					<a
						href="https://dribbble.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="Dribbble"
					>
						<i class="fab fa-dribbble"></i>
					</a>
				</div>
			</div>

			<!-- Contact Form Column -->
			<div use:viewport class="flex-1 fade-left">
				<form
					onsubmit={handleSubmit}
					class="bg-card-bg rounded-3xl p-8 max-sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-primary/10"
					id="contactForm"
				>
					<!-- Message boxes -->
					{#if submitStatus === 'success'}
						<div class="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500 text-emerald-300 flex items-center gap-3">
							<i class="fas fa-check-circle text-lg"></i>
							<span>Thank you for your message! I will get back to you soon.</span>
						</div>
					{:else if submitStatus === 'error'}
						<div class="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500 text-rose-300 flex items-center gap-3">
							<i class="fas fa-exclamation-circle text-lg"></i>
							<span>Please fill in all fields with valid information.</span>
						</div>
					{/if}

					<div class="mb-6">
						<label for="name" class="block mb-2 font-medium text-light">Name</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							class="w-full px-4 py-3 bg-dark/40 border border-primary/20 rounded-xl font-body text-light text-base outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(138,43,226,0.1)] transition-all"
							placeholder="Your Name"
							required
						/>
					</div>

					<div class="mb-6">
						<label for="email" class="block mb-2 font-medium text-light">Email</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							class="w-full px-4 py-3 bg-dark/40 border border-primary/20 rounded-xl font-body text-light text-base outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(138,43,226,0.1)] transition-all"
							placeholder="Your Email"
							required
						/>
					</div>

					<div class="mb-6">
						<label for="subject" class="block mb-2 font-medium text-light">Subject</label>
						<input
							type="text"
							id="subject"
							bind:value={subject}
							class="w-full px-4 py-3 bg-dark/40 border border-primary/20 rounded-xl font-body text-light text-base outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(138,43,226,0.1)] transition-all"
							placeholder="Subject"
							required
						/>
					</div>

					<div class="mb-6">
						<label for="message" class="block mb-2 font-medium text-light">Message</label>
						<textarea
							id="message"
							bind:value={message}
							class="w-full px-4 py-3 bg-dark/40 border border-primary/20 rounded-xl font-body text-light text-base outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(138,43,226,0.1)] transition-all min-h-[150px] resize-y"
							placeholder="Your Message"
							required
						></textarea>
					</div>

					<button
						type="submit"
						disabled={submitStatus === 'submitting'}
						class="w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary to-accent shadow-[0_5px_15px_rgba(138,43,226,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(138,43,226,0.4)] gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{#if submitStatus === 'submitting'}
							<i class="fas fa-spinner animate-spin"></i>
							Sending...
						{:else}
							Send Message
							<i class="fas fa-paper-plane text-sm"></i>
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
