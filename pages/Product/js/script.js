window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".navbar-products");
	if(navbar) {
		if(window.scrollY > 0) {
			navbar.classList.add("active");
		} else {
			navbar.classList.remove("active");
		}
	}
})