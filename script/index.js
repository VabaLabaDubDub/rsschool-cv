const toggleButton = document.querySelector(".btn");

toggleButton.addEventListener("click", function() {
	const lightElements = document.querySelectorAll(".light");

	lightElements.forEach(function(element) {
	element.classList.toggle("active");
	});

	const whiteElements = document.querySelectorAll(".white");

	whiteElements.forEach(function(element) {
	element.classList.toggle("active-subtitles");
	});

	const linkElements = document.getElementsByTagName("a");
	const linkArray = Array.from(linkElements);
	linkArray.forEach(function(element){
		element.classList.toggle("black")
	});

	toggleButton.classList.toggle("active-btn");
});