export interface ViewportOptions {
	threshold?: number;
	once?: boolean;
}

export function viewport(node: HTMLElement, options: ViewportOptions = { threshold: 0.1, once: true }) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('active');
					if (options.once) {
						observer.unobserve(node);
					}
				}
			});
		},
		{
			threshold: options.threshold ?? 0.1
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
