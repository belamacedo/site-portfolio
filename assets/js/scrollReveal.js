window.sr = ScrollReveal({ reset: true });

ScrollReveal({
	distance: "50px",
	duration: 2000,
	origin: "top",
	reset: false,
});

// Delay

sr.reveal(".s-200", { delay: 200 });
sr.reveal(".s-300", { delay: 300 });
sr.reveal(".s-400", { delay: 400 });
