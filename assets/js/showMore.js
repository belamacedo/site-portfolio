const button = document.querySelector(".show-more");
const rowTwo = document.querySelector(".row-2");

rowTwo.style.display = "none";

// Ver Mais
const showMore = () => {
	if (rowTwo.style.display === "flex") {
		rowTwo.style.display = "none";
		button.innerHTML = "Ver mais";
	} else if (rowTwo.style.display === "none") {
		rowTwo.style.display = "flex";
		button.innerHTML = "Ver menos";
	}
};

button.addEventListener("click", showMore);
