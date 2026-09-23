const detailsForm = document.getElementById("detailsForm");
const questions = document.getElementById("questionsSection");

questions.style.display = "none";

detailsForm.addEventListener("submit", function (event) {
	event.preventDefault();
	questions.style.display = "block";
});

questions.addEventListener("change", function () {
	const answers = ["d", "b", "a"];
	const selectedOption = event.target;
	const options = questions.querySelectorAll(
		`input[type="radio"][name="${selectedOption.name}"]`
	);
	const questionIndex = [...new Set(
		[...questions.querySelectorAll('input[type="radio"]')].map((option) => option.name)
	)].indexOf(selectedOption.name);

	options.forEach(function (option) {
		const label = option.closest("label") || option.parentElement;
		label.style.color = option.value.toLowerCase() === answers[questionIndex] ? "green" : "red";
	});
});
