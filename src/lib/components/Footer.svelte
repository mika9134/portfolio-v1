<script lang="ts">
	const currentYear = new Date().getFullYear();

	const handleLinkClick = (e: MouseEvent, targetId: string) => {
		e.preventDefault();
		const target = document.getElementById(targetId);
		if (target) {
			const headerHeight = 64;
			const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	};
</script>

<footer
	class="bg-darker text-light py-16 px-0 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_right,rgba(138,43,226,0.05),transparent_70%)] before:pointer-events-none"
>
	<div class="max-w-[1200px] mx-auto px-8 max-sm:px-4">
		<div class="flex justify-between gap-8 mb-12 flex-wrap max-md:flex-col max-md:gap-12">
			<!-- Info block -->
			<div class="max-w-[300px]">
				<a
					href="#home"
					onclick={(e) => handleLinkClick(e, 'home')}
					class="font-heading font-bold text-2xl mb-4 inline-block text-light"
				>
					Cyber<span class="text-primary [text-shadow:var(--glow)]">Dev</span>
				</a>
				<p class="text-gray mb-6 leading-relaxed">
					Creating innovative digital experiences with cutting-edge technology and aesthetic design.
				</p>
				<div class="flex gap-4">
					<a
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="GitHub"
					>
						<i class="fab fa-github"></i>
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="LinkedIn"
					>
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="Twitter"
					>
						<i class="fab fa-twitter"></i>
					</a>
					<a
						href="https://dribbble.com"
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-gray text-lg transition-all hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(138,43,226,0.5)]"
						aria-label="Dribbble"
					>
						<i class="fab fa-dribbble"></i>
					</a>
				</div>
			</div>

			<!-- Quick Links block -->
			<div>
				<h3
					class="text-lg font-heading font-bold text-light mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[30px] after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-accent"
				>
					Quick Links
				</h3>
				<ul class="flex flex-col gap-3 mt-4">
					<li>
						<a
							href="#home"
							onclick={(e) => handleLinkClick(e, 'home')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							onclick={(e) => handleLinkClick(e, 'about')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#services"
							onclick={(e) => handleLinkClick(e, 'services')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							Services
						</a>
					</li>
					<li>
						<a
							href="#portfolio"
							onclick={(e) => handleLinkClick(e, 'portfolio')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							Portfolio
						</a>
					</li>
					<li>
						<a
							href="#contact"
							onclick={(e) => handleLinkClick(e, 'contact')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>

			<!-- Services block -->
			<div>
				<h3
					class="text-lg font-heading font-bold text-light mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[30px] after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-accent"
				>
					Services
				</h3>
				<ul class="flex flex-col gap-3 mt-4">
					<li>
						<a
							href="#services"
							onclick={(e) => handleLinkClick(e, 'services')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							Web Development
						</a>
					</li>
					<li>
						<a
							href="#services"
							onclick={(e) => handleLinkClick(e, 'services')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							UI/UX Design
						</a>
					</li>
					<li>
						<a
							href="#services"
							onclick={(e) => handleLinkClick(e, 'services')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							Responsive Design
						</a>
					</li>
					<li>
						<a
							href="#services"
							onclick={(e) => handleLinkClick(e, 'services')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							Performance Optimization
						</a>
					</li>
					<li>
						<a
							href="#services"
							onclick={(e) => handleLinkClick(e, 'services')}
							class="text-gray transition-all hover:text-light hover:translate-x-1 inline-block"
						>
							SEO Optimization
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div class="border-t border-white/5 pt-8 text-center text-gray text-[0.9rem]">
			<p>&copy; {currentYear} CyberDev. All Rights Reserved.</p>
		</div>
	</div>
</footer>
